// ##############################
// ########## JQUERY ############
// ##############################
// $(window).on('load', function () {
// 	$('#password-modal').modal('show');
// });
// $('#password-modal').modal({
// 	backdrop: 'static',
// 	keyboard: false
// });
// function passwordEntry() {
// 	var pword = document.getElementById("psw").value;
// 	if (pword == "password") {
// 		$('#password-modal').modal('toggle');
// 	} else {
// 		$("#passworderror").html("<p style='color:red'>Wrong password. Please try again.</p>");
// 	}
// }
// $("#psw").keyup(function (event) {
// 	if (event.keyCode === 13) {
// 		passwordEntry();
// 	}
// });
// ###############################
// ####### THEORY MODALS #########
// ###############################
function open_theory_modal(pattern) {
	document.getElementById(pattern).style.display = "block";
	document.getElementById('members-header').style.display = "none";
	document.getElementById('navbar-banner').style.display = "none";
}
function close_theory_modal(pattern) {
	document.getElementById(pattern).style.display = "none";
	document.getElementById('members-header').style.display = "block";
	document.getElementById('navbar-banner').style.display = "block";
}
var theory_modal_one = document.getElementById('saju-jirugi');
window.onclick = function (event) {
	if (event.target == modal_one || event.target == modal_two) {
		modal_one.style.display = "none";
		modal_two.style.display = "none";
		document.getElementById('members-header').style.display = "block";
		document.getElementById('navbar-banner').style.display = "block";
	}
}

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
var modal_one = document.getElementById('gallery-modal-1');
var modal_two = document.getElementById('gallery-modal-2');
window.onclick = function (event) {
	if (event.target == modal_one || event.target == modal_two) {
		modal_one.style.display = "none";
		modal_two.style.display = "none";
		document.getElementById('gallery-header').style.display = "block";
		document.getElementById('navbar-banner').style.display = "block";
	}
}

// function close_modal_anywhere(gallery_modal_id) {
// 	var modal_id = document.getElementById(gallery_modal_id);
// 	window.onclick = function (event) {
// 		if (event.target == modal_id) {
// 			modal_id.style.display = "none";
// 		}
// 	}
// }

function open_gallery_modal(gallery_modal_id) {
	document.getElementById(gallery_modal_id).style.display = "block";
	document.getElementById('gallery-header').style.display = "none";
	document.getElementById('navbar-banner').style.display = "none";
}

function close_gallery_modal(gallery_modal_id) {
	document.getElementById(gallery_modal_id).style.display = "none";
	document.getElementById('gallery-header').style.display = "block";
	document.getElementById('navbar-banner').style.display = "block";
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
	var caption_text_one = document.getElementById("gallery-caption-1");
	var caption_text_two = document.getElementById("gallery-caption-2");
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
	caption_text_one.innerHTML = dots[slide_index - 1].alt;
	caption_text_two.innerHTML = dots[slide_index - 1].alt;
}

// ##############################
// ########## THEORY ############
// ##############################

var collapsibleList = document.getElementsByClassName("collapsible");
for (var i = 0; i < collapsibleList.length; i++) {
	collapsibleList[i].addEventListener("click", function () {
		this.classList.toggle("active");
		var currentId = this.id;
		var content = this.nextElementSibling;
		if (content.style.maxHeight) {  // if the content is open
			content.style.maxHeight = null;  // close it
		} else {  // if the element is closed
			var allCollapsibles = collapsibleList;  // get HTMLCollection
			for (var j = 0; j < collapsibleList.length; j++) {  // for every element
				if ((allCollapsibles[j].classList.contains("active")) && (allCollapsibles[j].id !== currentId)) {  // if that element has the active class and it does not have the currentId of the one that has been clicked
					content.style.maxHeight = null;  // remove the maxHeight value - close it
				} else if (allCollapsibles[j].id == currentId) {  // if that element doesn't have the active class
					content.style.maxHeight = content.scrollHeight + "px";  // open the element
				}
			}
			// content.style.maxHeight = content.scrollHeight + "px";
			// console.log("add maxHeight: " + content.style.maxHeight);
		}
	});
}
