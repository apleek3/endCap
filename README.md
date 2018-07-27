# endCap - Group Project 1
Endcap
Get an overall score of the neighborhood you live in or move to; based on a series of variables such as walkability, bike, transit, (and later...) crime, school, weather, rent, and other amenities.

The motivation for its development:
This tool exists to help people find their ideal neighborhood.  Whether you’re new to the area or a life-long resident, this website will help the user connect with the community around them. Our goal is to help people from all walks of life decide if their next move is prudent, safe, and amicable. 

Our design process:
At first, we wanted to map out the following: where's the closest place to get water and/or beer; but without access to certain APIs this proved impractical (for now).  We then shifted focus on mapping out rent and crime and ran into a problem; the APIs that currently existed do not return JSON; they were older.  We then shifted focus again on getting information for local neighborhoods and then generating a score based on what the neighborhood had to offer.
Time was dedicated to connecting Google's Geocoding and Mapping API with an API called 'Walkability' to transform our DOM into a metaphorically living element that could ease personal relocation by demonstrating ease of mobility. 

The technologies We used (and briefly how they work):
Geocoding API: Input an address, and the will break down the address into its components (i.e street number, street name etc.) including longitude and latitude. 
Walk Score API: ajax call returns mobility data using a score out of a 100; data points are walkability, bikeability, and a public transit.
Charts.js: (new technology & our repeating element) draws charts with HTML5 and jQuery to create a dynamic chart element. 
Parallax.js: (new technology) modifies the DOM so that the chart elements appear as though they are moving in a 3 dimensional perspective
The Geocoding API als breaks down the address down into its components.  The address components are then put into variables, which are then put into the queryURL for the Walk Score API.  The data from the Walk Score API is then inputted into a chart for a visual representation of the data.
Bootstrap: gives the page it's pizzazz. 

A demonstration of its functionality
See our video demo here: https://youtu.be/FmlQxUfpgzU

Directions for future development:
We want this site to return a complete score based on a series of variables inputted by the user.  By the end of their session a user should be able to see the score for a neighborhood and have better understanding of how easy it is to stay connected, mobile, and interested while spending time there. For example: If a user likes going out to bars and restaurants, and not going on bike rides then the site will prioritize bars and restaurants over bike riding when it gives a score for a neighborhood. Additionally, if the user is more interested in basic needs like food, water, and shelter then information prioritizing natural resources will be provided. 
