/*
	The following is the data used by the application.
	Typically this data is loaded from a server or
	from a file.
	
	To make life easier to see how the app works the 
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
// Model = the data
// View - interface elements and CSS
// Controller - the code
// http://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller

// Global vars to keep track of our slides
var currImage;
var nextImage;
var prevImage;
var currNum;

// Do the initial setup.
//  - set the title based on the 'title' variable
//  - prepare slides
function setup(initialItem) {
	// Set main title
	$('#title').html(title);

	var imgTag = '<img src="">';
	
	currImage = $(imgTag);
	currImage.addClass('imageHolder');
	$('#imageFrame').append(currImage);
	
	nextImage = $(imgTag);
	nextImage.addClass('imageHolder');
	$('#imageFrame').append(nextImage);
	
	prevImage = $(imgTag);
	prevImage.addClass('imageHolder');
	$('#imageFrame').append(prevImage);

	currImage.attr('src', initialItem.uri);
	currImage.css('left', '0px');
	
	$('#photoTitle').html(initialItem.title);
	
    
    
    // The first photo has an index of 0
    currNum = 0;
}

// This function will display an item that is clicked-on in the menu.
// Which item to display is in the data that was provided when 
// .click was set (see populateMenu) and provided with event data.
function displayItem(event) {
	var data = event.data;
	var item = data.item;
	
    
    
    // If the item is already selected, return
    if (currNum == data.num) return;
    // Else it is a new selection, so mark it as current and transition the slides
    currNum = data.num;
    
    
	
	// We need to do 2 things:
	// 1. Set the new current photo's title
	// 2. Slide our photos over
	
	// Set the title
	$('#photoTitle').html(item.title);


	// What was the previous image (for the last transition)
	// will be remembered in tempImage and then removed
	var tempImage = prevImage;
	
	// What was the current image will become the previous image, sliding off-screen
	prevImage = currImage;
	
	// What was the next image will be filled and become the current image, sliding on-screen
	// The current image will be set to the next image.
	currImage = nextImage;
	
	
	// Remove (destroy) the image not being used in the current transition and create
	// a new image to be used in the next transition.
	// A previously used (transitioned) image will already have transitioned from left to right.
	// Instead of moving the image back to the left to be used again a new image
	// will be created.  The reason I do this is because moving the image back to the left
	// will be animated and it will animate over the other images.  Plus that additional
	// animation is a waste of processing power.
	tempImage.remove();
	
	// Create a new image to be used during the next transition.
	var imgTag = '<img src="">';
	nextImage = $(imgTag);
	nextImage.addClass('imageHolder');
	$('#imageFrame').append(nextImage); 

	// Set the current image to display the newly selected image from the menu.
	currImage
        .attr('src',item.uri)
        .load(function() {
            // Make the new image transition from -450px to 0px putting it into view.
            $(this).css('left', '0px');
            // At the same time transition the image that was in the view off to the right
            // moving it from 0px to 450px.
            prevImage.css('left','450px');
        });
}

// This function takes the data and creates menu items.
// Each menu item is an <li> in a <ul>.
// The .click() on each menu item is set to call displayItem 
// and provided the data contained in eventData.
function populateMenu(items) {
	for (var i=0; i < items.length; i++) {
		var item = items[i];
		
		// The following creates a new <li>.
		// When jquery ($) receives html it creates the element
		// rather than finding it.
		//var menuItem = $( '<li>' + item.title + '</li>' );  // version without thumbnail
		var menuItem = $( '<li><img class="thumbnail" src="' + item.uri + '"> ' + item.title + '</li>' ); // version with thumbnail
		
		// Add the new <li> to the <ul> with an id of menuItems
		$('#menuItems').append(menuItem);
		
		// Create a data object to send as data to the click handler.
		var eventData = {
			'num'	: i,
			'item'	: item
		}
		// Add a click handler with event data to the <li> that was appended above.
		// eventData is the data received in the event received by displayItem
		// when a menu item is clicked
		menuItem.click(eventData, displayItem);
	}

}

// When the DOM is ready, the initial display is prepared and the
// menu is populated.
$(document).ready(
	function() {
		setup(photos[0]);
		populateMenu(photos);
		$('#photoMenu').draggable(); // make the menu draggable
		$('#photoDisplay').draggable(); // make the photo display draggable

	
	}
);