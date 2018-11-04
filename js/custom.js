// ###############################
// ######### NEWS PAGE ###########
// ###############################
function getCurrentPageId(current_div_id) {
	var current_div_id = document.getElementById(current_div_id);
	var parent_div_id = String(current_div_id.parentNode.id);
	return parent_div_id;
}

function get_older_page(current_page_id) {
	var last_page_id = getNextPage(current_page_id, false);
	document.getElementById(last_page_id).style.display = 'block';
	document.getElementById(current_page_id).style.display = 'none';
	var height_to_scroll = get_div_height('news-header');
	$(this).scrollTop(height_to_scroll);
	return false;
}

function get_newer_page(current_page_id) {
	var next_page = getNextPage(current_page_id, true);
	document.getElementById(next_page).style.display = 'block';
	document.getElementById(current_page_id).style.display = 'none';
	var height_to_scroll = get_div_height('news-header');
	$(this).scrollTop(height_to_scroll);
	return false;
}

function getNextPage(current, is_newer) {
	var current_page_id = current;
	var current_page_num = 0;
	var next_page_num = 0;
	var next_page_id = '';
	if (is_newer) {  // newer page, page number goes up
		current_page_num = parseInt(current_page_id.match(/\d+/g));
		next_page_num = current_page_num + 1;
		next_page_id = current_page_id.replace(current_page_num, next_page_num);
	} else {  // older page, page number goes down
		current_page_num = parseInt(current_page_id.match(/\d+/g));
		if (current_page_num == 1) {  // if current page is the oldest, want to 
			next_page_id = current_page_id;
		} else {
			next_page_num = current_page_num - 1;
			next_page_id = current_page_id.replace(current_page_num, next_page_num);
		}
	}
	return next_page_id;
}

function get_div_height(div_id) {
	var div_height = document.getElementById(div_id).clientHeight;
	return div_height;
}

// ###############################
// ########## GALLERY ############
// ###############################
var modal = document.getElementById('gallery-modal');
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}

function open_gallery_modal() {
	document.getElementById('gallery-modal').style.display = "block";
}

function close_gallery_modal() {
	document.getElementById('gallery-modal').style.display = "none";
}

var slide_index = 1;
show_slides(slide_index);

function plus_slides(n) {
	show_slides(slide_index += n);
}

function current_slide(n) {
	show_slides(slide_index = n);
}

function show_slides(n) {
	var i;
	var slides = document.getElementsByClassName("gallery-slides");
	var dots = document.getElementsByClassName("gallery-demo");
	var captionText = document.getElementById("gallery-caption");
	if (n > slides.length) { slide_index = 1 }
	if (n < 1) { slide_index = slides.length }
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" gallery-active", "");
	}
	slides[slide_index - 1].style.display = "block";
	dots[slide_index - 1].className += " gallery-active";
	captionText.innerHTML = dots[slide_index - 1].alt;
}

// ##############################
// ########## JQUERY ############
// ##############################
jQuery(document).ready(function() {
	
	"use strict";
	// Your custom js code goes here.

});