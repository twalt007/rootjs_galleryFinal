//what is" data-whatever" ??



/* your javascript goes here */

$(document).ready(initiateApp);

var pictures = [
	'images/landscape-1.jpg',
	'images/landscape-10.jpg',
	'images/landscape-11.jpg',
	'images/landscape-13.jpg',
	'images/landscape-15.jpg',
	'images/landscape-17.jpg',
	'images/landscape-18.jpg',
	'images/landscape-19.jpg',
	'images/landscape-2.jpg',
	'images/landscape-3.jpg',
	'images/landscape-8.jpg',
	'images/landscape-9.jpg',
	'images/pexels-photo-132037.jpeg',
	'images/pretty.jpg',
];


function initiateApp(){
	/*advanced: add jquery sortable call here to make the gallery able to be sorted
		//on change, rebuild the images array into the new order
	*/
	makeGallery(pictures);
	addModalCloseHandler();
	sortable();
}
function makeGallery(imageArray){
	//use loops and jquery dom creation to make the html structure inside the #gallery section
	// box.style.backgroundImage = 'url(' + img + ')';
	for (var image=0;image<imageArray.length;image++){
	// 	var figure = document.createElement('figure');
	// 	figure.class('imageGallery col-xs-12 col-sm-6 col-md-4');
	// 	figure.style.backgroundImage = 'url('+imageArray[image]+')';
	// 	$('#gallery').append(figure);
	// }
		// imageObject.append(figCaption);

		var imageObject = $("<figure>",{
			class: "imageGallery col-xs-12 col-sm-6 col-md-4",
			style: "background-image:url("+imageArray[image]+")",
		});
		var figCaption = $("<figcaption>").text(imageArray[image]);	
		$('#gallery').append(imageObject);
		imageObject.append(figCaption);
	}
	$('figure').on("click",displayImage);

		// <figure class="imageGallery col-xs-12 col-sm-6 col-md-4" style="background-image:url(images/pexels-photo-132037.jpeg);">
		// 	<figcaption>pexels-photo-132037.jpeg</figcaption>
		// </figure>
	//create a loop to go through the pictures
		//create the elements needed for each picture, store the elements in variable

		//attach a click handler to the figure you create.  call the "displayImage" function.  

		//append the element to the #gallery section

}

function addModalCloseHandler(){
	//add a click handler to the img element in the image modal.  When the element is clicked, close the modal
	$('img').on('click',closeModal);
	function closeModal(){
		$('#galleryModal').modal('hide');
	}
	//for more info, check here: https://www.w3schools.com/bootstrap/bootstrap_ref_js_modal.asp	
}

function displayImage(){
	//find the url of the image by grabbing the background-image source, store it in a variable
	//grab the direct url of the image by getting rid of the other pieces you don't need
	console.log("testing");
	var fullUrl = $(this).css('background-image');
	console.log("testing getting url", fullUrl);
	//why do I need to store this in a separate variable?  why can't  keep using teh same variable and manipulating it?  what is better practice?
	var image = fullUrl.slice(34);
	console.log('testing getting just content', image);
	//grab the name from the file url, ie the part without the path.  so "images/pexels-photo-132037.jpeg" would become
		// pexels-photo-132037
		//take a look at the lastIndexOf method
	var cutPoint = image.lastIndexOf('.');
	console.log("indexNumber: ", cutPoint);
	var imgName = image.slice(0,cutPoint);
	console.log("NameOnly", imgName);
	$('.modal-title').text(imgName);
	$('.modal-body img').attr("src","images/"+imgName+".jpg");
	$('#galleryModal').modal('show');


	//show the modal with JS.  Check for more info here: 
	//https://www.w3schools.com/bootstrap/bootstrap_ref_js_modal.asp

	

	//change the modal-title text to the name you found above
	//change the src of the image in the modal to the url of the image that was clicked on

	
}

function sortable() {
	$( "#gallery" ).sortable();
	$( "#gallery" ).disableSelection();
};

// 	$( function() {
// 	$( ".imageGallery" ).sortable();
// 	$( ".image" ).disableSelection();
//  } );




// for playing with in the future - with content from my script tag
// function renderSingleComment(comment, target){

//     var rawTemplate = $("#commentTemplate").html();

//     //  console.log("raw template", rawTemplate);

//     var clone = $(rawTemplate);

// //  console.log("DOM", clone);
    
//     $(".comment-id", clone).text(comment.id);
//     $("h4", clone).text(comment.subject);
//     $("p.content", clone).text(comment.comment);
//     $("p.posted-date", clone).text(new Date());

//     // $(".reply-btn", clone).on("click", onReplyButtonClick);

//     target.append(clone);
// }

