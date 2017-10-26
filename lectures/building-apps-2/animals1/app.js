/*
	The following is the data used by the application.
	Typically this data is loaded from a server or
	from a file.
	
	To make life easier and to see how the app works, the 
	data is provided here instead of loading it from somewhere.
	
*/

var title = 'Animal Photographs';

var photos = [
	{
		uri : '../images/birdnest.png',
		title : 'Bird Nest'
	},
	{
		uri : '../images/birdrow.png',
		title : 'Row of Birds'
	},
	{
		uri : '../images/bluefootedbird.png',
		title : 'Blue-footed Birds'
	},
	{
		uri : '../images/deer.png',
		title : 'Running Deer'
	},
	{
		uri : '../images/hounds.png',
		title : 'Hound Dogs'
	},
	{
		uri : '../images/parrots.png',
		title : 'Colorful Parrots'
	},
	{
		uri : '../images/penguins.png',
		title : 'Rockhopper Penguins'
	},
	{
		uri : '../images/pheasants.png',
		title : 'Pheasants'
	},
	{
		uri : '../images/polarbears.png',
		title : 'Polar Bears'
	},
	{
		uri : '../images/sheep.png',
		title : 'Flock of Sheep'
	}
];

// The following 'controller' code utilizes the above data.
// The code and the html in index.html do not contain any specifics
// of the images that are displayed.  The data 'drives' what the logic does.

// The paradigm is Model-View-Controller (MVC)
// Model = the data above
// View = interface elements and CSS
// Controller = the code below
// http://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller


// Do the initial setup.
//  - set the title based on the 'title' variable
//  - if there are photos, display the first one and its title
function prepareDisplay(photos) {
	// Set the title
	$('#title').html(title);
	
	// If there are no photos, do not display a photo/title
	if (photos.length < 1) return;
	// Else, grab the first photo object from the photos array
	var firstPhoto = photos[0];
	$('#imageHolder').attr('src', firstPhoto.uri);
	$('#photoTitle').html(firstPhoto.title);
    
    /* after this is done, finish populateMenu() */ 
}

// This function will display an item that is clicked-on in the menu.
// Which item to display is in the data that was provided when 
// .click was set (see populateMenu) and provided with event data.
function displayItem(event) {
	// Let's take a look at the event data:
	console.dir(event);
	
	var data = event.data;
	var item = data.item;
	$('#imageHolder').attr('src', item.uri);
	$('#photoTitle').html(item.title);
    
    /* get ride of test Item in the list on HTML */ 
}

// This function takes the data and creates menu items.
// Each menu item is an <li> in a <ul>.
// The .click() on each menu item is set to call displayItem 
// and provided the data contained in eventData.
function populateMenu(items) {
	// For each item in the photos array, we want to do two things:
	// 1. Create a new <li>
	// 2. Define what happens when that <li> is clicked
	for (var i=0; i < items.length; i++) {
		var item = items[i];
		
		// The following creates a new <li>.
		// When jquery ($) receives html it creates the element
		// rather than finding it.
		var menuItem = $( '<li>' + item.title + '</li>' );
		
		// Add the new <li> to the <ul> with an id of menuItems
		$('#menuItems').append(menuItem);
        
        /* After this is done, go back to the HTML */ 
		
		
		// Create a data object to send as data to the click handler.
		var eventData = {
			// index of the item in the photos array
			'num'	: i,
			// the photo object itself
			'item'	: item
		};
		// Add a click handler with event data to the <li> that was appended above.
		// eventData is the data received in the event received by displayItem
		// when a menu item is clicked
        
        /* after this at least create the displayItem() function otherwise the page will crash */ 
        
		menuItem.click(eventData, displayItem);
        
        /* after this finish the displayItem() function */
	}

}

// When the DOM is ready, the initial display is prepared and the
// menu is populated.
$(document).ready(
	function() {
        /* if you have this function in without the declartion it will crash */
		prepareDisplay(photos);
		populateMenu(photos);
	
	}
);