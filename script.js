   document.getElementById("header-menu").addEventListener("click", function () {
      var sidebar = document.getElementById("aside-sidebar");
      var main = document.getElementById("main");
  
      if (window.innerWidth <= 768) {
          sidebar.style.width = sidebar.style.width === "100%" ? "0" : "100%";
          main.style.paddingLeft = "0px";
      } else {
          sidebar.style.width = sidebar.style.width === "200px" ? "0" : "200px";
          main.style.paddingLeft = sidebar.style.width === "200px" ? "220px" : "0px";
      }
  });

  window.addEventListener("load", () => {
   
   const sections = document.querySelectorAll(".landing-page-section, .footer-content, .footer-bottom");
   sections.forEach((section) => {
     section.style.opacity = "1";
     section.style.transition = "opacity 1s ease-in-out";
   });
    
 });

 function handleSubmit(event) {
   event.preventDefault(); 
 
   document.getElementById("feedback-form").style.display = "none";
   document.getElementById("success-message").style.display = "block";
}
