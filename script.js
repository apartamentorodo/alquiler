// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var images = document.getElementsByTagName("img");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

  imgOnclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  }
// When the user clicks on <span> (x), close the modal
spanOnclick = function() {
  modal.style.display = "none";
}
