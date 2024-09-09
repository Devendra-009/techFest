function myFunction() {
    var x = document.querySelector(".background");
    var y = document.querySelector(".domain")
   
    if (x.style.display === "none") {
      x.style.display = "flex";
      y.innerHTML = "Hide Explore";
    
      y.classList.add("mystyle");
    } else {
      x.style.display = "none";
      y.innerHTML = "Explore Domain"
      y.classList.remove("mystyle");
    }
  }