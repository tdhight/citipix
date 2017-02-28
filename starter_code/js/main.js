// user inputs city
// user clicks update button
//  -If a user submits "New York" or "New York City" or "NYC" make the background of the page nyc.jpg                                                                                                                
//  -If a user submits "San Francisco" or "SF" or "Bay Area" make the background of the page sf.jpg                                                                                                                  
//  -If a user submits "Los Angeles" or "LA" or "LAX" make the background of the page la.jpg                                                                                                                         
//  -If a user submits "Austin" or "ATX" make the background of the page austin.jpg                                                                                                                                  
//  -If a user submits "Sydney" or "SYD" make the background of the page sydney.jpg
//  -Otherwise leave as citipix_skyline.jpg


$(document).ready(function(){
	console.log('this is running');
	var city = $('#city-type').val();

	$('#entry').submit(function(event) {
    
    	console.log("the event is: ",event);
    	// https://api.jquery.com/event.preventdefault/
    	//https://www.w3schools.com/jquery/event_preventdefault.asp
    	event.preventDefault();
	});

	function newCity() {
		if (city === 'New York' || 'New York City' || 'NYC') {
			console.log('nyc');
			$('body').addClass('nyc');
		} else if (city === 'San Francisco' || 'SF' || 'Bay Area') {
			console.log('sf');
			$('body').addClass('sf');
		} else if (city === 'Los Angeles' || 'LA' || 'LAX') {
			$('body').addClass('la');
		} else if (city === 'Austin' || 'ATX') {
			$('body').addClass('austin');
		} else if (city === 'Sydney' || 'SYD') {
			$('body').addClass('sydney');
		} else {
			$('body').css('background-image', 'url(images/citipix_skyline.jpg');
		}
	}
	$('#submit-btn').click(newCity);

});

