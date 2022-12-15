function drop() {
    document.getElementsByClassName("drop").style.display = "block";
  }
  function w3_close() {
    document.getElementsByClassName("drop").style.display = "none";
  }
  function openNav() {
    document.getElementById("hamburger").style.height = "100%";
  }
  
  function closeNav() {
    document.getElementById("hamburger").style.height = "0%";
  }
  
  // Hamburger Menu Spin
  var hamburger = document.querySelector(".hamburger");
  hamburger.addEventListener("click", function() {
  
    hamburger.classList.toggle("is-active");
  
  });