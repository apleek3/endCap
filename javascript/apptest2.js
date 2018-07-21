$(document).ready(function () {
    console.log("Ready!");
});


/********************************** jQuery UI samples* *****************************************/
$("#date").datepicker();

$(function () {
    $("#accordion").accordion();
});

$(function () {
    $("#slider").slider();
});


$( function() {
    function latlong() {
      return new google.maps.LatLng( $("#lat").val(), $("#lng").val() );
    }
    function position() {
      map.setCenter( latlong() );
    }
    $( "#lat, #lng" ).spinner({
      step: .001,
      change: position,
      stop: position
    });
 
    var map = new google.maps.Map( $("#map")[0], {
      zoom: 8,
      center: latlong(),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
  } );

  $( function() {
    $( ".widget button" )
      .eq( 0 ).button()
      .end().eq( 1 ).button( {
        icon: "ui-icon-gear",
        showLabel: false
      } ).end().eq( 2 ).button( {
        icon: "ui-icon-gear"
      } ).end().eq( 3 ).button( {
        icon: "ui-icon-gear",
        iconPosition: "end"
      } ).end().eq( 4 ).button( {
        icon: "ui-icon-gear",
        iconPosition: "top"
      } ).end().eq( 5 ).button( {
        icon: "ui-icon-gear",
        iconPosition: "bottom"
      } );
  } );

/********************************** Polar Chart Example *****************************************/
var randomScalingFactor = function () {
    return Math.round(Math.random() * 100);
};

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