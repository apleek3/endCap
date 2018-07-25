$(document).ready(function () {
    console.log("Ready!");

    /**********************************GeoCode API and Walkscore API*********************************/

    var map;
    var geocoder; // global variable
    var randomScalingFactor = function () {
        return Math.round(Math.random() * 100);
    };
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

        new Chart($("#polar-chart"), {
            type: 'polarArea',
            data: {
                labels: ["Walkability", "Crime", "Schools", "Resources", "Health"],
                datasets: [
                    {
                        label: "Percentage Relative to Other Neighborhoods",
                        backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
                        data: [
                            randomScalingFactor(),
                            randomScalingFactor(),
                            randomScalingFactor(),
                            randomScalingFactor(),
                            randomScalingFactor(),
                        ],
                    }
                ]
            },
            options: {
                title: {
                    display: true,
                    text: 'Living scores relative to similar neighborhoods'
                }
            }
        });

    };


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

    /********************************** jQuery UI samples* *****************************************/
    $("#date").datepicker();

    $(function () {
        $("#accordion").accordion();
    });

    $(function () {
        $("#slider").slider();
    });


    $(function () {
        function latlong() {
            return new google.maps.LatLng($("#lat").val(), $("#lng").val());
        }
        function position() {
            map.setCenter(latlong());
        }
        $("#lat, #lng").spinner({
            step: .001,
            change: position,
            stop: position
        });

        var map = new google.maps.Map($("#map")[0], {
            zoom: 8,
            center: latlong(),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });
    });

    $(function () {
        $(".widget button")
            .eq(0).button()
            .end().eq(1).button({
                icon: "ui-icon-gear",
                showLabel: false
            }).end().eq(2).button({
                icon: "ui-icon-gear"
            }).end().eq(3).button({
                icon: "ui-icon-gear",
                iconPosition: "end"
            }).end().eq(4).button({
                icon: "ui-icon-gear",
                iconPosition: "top"
            }).end().eq(5).button({
                icon: "ui-icon-gear",
                iconPosition: "bottom"
            });
    });

    /********************************** Polar Chart Example *****************************************/








});
