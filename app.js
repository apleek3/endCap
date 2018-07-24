var map;
    var geocoder; // global variable
    google.maps.event.addDomListener(window, 'load', initialize);

    function initialize() {
        geocoder = new google.maps.Geocoder();
        var mapOptions = {
            center: { lat: 42.066667, lng: -71.293056 },
            zoom: 6,
            mapTypeId: 'roadmap',
            scrollwheel: true
        };
        map = new google.maps.Map(document.querySelector('#map'),
            mapOptions);
    }

    // grab the search phrase from the input box
    var button = document.querySelector("button");
    button.onclick = function () {
        var locName = document.querySelector("input").value;
        findLocation(locName);
    }

    // Function that invokes the "geocode" method and sets
    function findLocation(aName) {
        geocoder.geocode({ 'address': aName },
            function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    alert("found location: " + aName,
                        results[0].geometry.location);
                    console.log(aName);
                    console.log(results[0].geometry.location);
                    console.log(results[0].geometry.location.lat());
                    console.log(results[0].geometry.location.lng());
                    console.log(results);
                    console.log(results[0].address_components[0].long_name);
                    console.log(results[0].address_components[1].long_name);
                    console.log(results[0].address_components[3].long_name);
                    console.log(results[0].address_components[5].short_name);
                    console.log(results[0].address_components[7].short_name);
                    map.setCenter(results[0].geometry.location);
                }

                var lat = results[0].geometry.location.lat();
                var lng = results[0].geometry.location.lng();
                var streetNumber = results[0].address_components[0].long_name;
                var streetName = results[0].address_components[1].long_name;
                var splitStreetName = streetName.split(" ");
                var cityName = results[0].address_components[3].long_name;
                var stateName = results[0].address_components[5].short_name;
                var zipCode = results[0].address_components[7].short_name;

                console.log(splitStreetName);

                var queryURL = "http://api.walkscore.com/score?format=json&address=" + streetNumber + "%" + splitStreetName[0] + "%20" + splitStreetName[1] + "%20" + cityName + "%20" + stateName + "%20" + zipCode + "&lat=" + lat + "&lon=" + lng + "&transit=1&bike=1&wsapikey=ff4ba6de25e0330999725219145aa77c"

                console.log(queryURL);

                $.ajax({
                    url: queryURL,
                    method: "GET"
                }).then(function (response) {

                    console.log(response);
                });
            });
    }