document.addEventListener("DOMContentLoaded", function () {
    const menuResponsive=document.querySelector(".menu-responsive");
    const menuBars=document.querySelector(".menu-bars");
    if (menuBars) {
      menuResponsive.style.display="none";
      menuBars.addEventListener("click",function() {
    menuResponsive.style.display=(menuResponsive.style.display==="none"||menuResponsive.style.display==="")?"block":"none";
        });
}
    const scrollLinks= document.querySelectorAll(".scroll");
  
    scrollLinks.forEach(link=>{
      link.addEventListener("click",function (event) {
        event.preventDefault();
        const targetSection= document.querySelector(this.hash);
        if (targetSection){
          const sectionTop =targetSection.offsetTop;
          window.scrollTo({
            top:sectionTop,
            behavior:"smooth"
          });
        }
      });
    });
      const progressBars= document.querySelectorAll(".progress-bar");
  
    window.addEventListener("scroll",function () {
      progressBars.forEach(bar=>{
        const barPosition=bar.getBoundingClientRect().top;
        const windowHeight=window.innerHeight;
  if (barPosition < windowHeight) {
          bar.style.transition= "width 2s ease";
          bar.style.width= bar.getAttribute("data-progress") + "%"; 
        }
      });
    });
      const sentences =["web designer ?", "web developer ?"];
    const textAnimate =document.querySelector(".text-animate");
    let i = 0;
  
    setInterval(function() {
      if (textAnimate){
        textAnimate.style.opacity = "0";
        setTimeout(function () {
          textAnimate.textContent = sentences[i = (i + 1) % sentences.length];
          textAnimate.style.opacity = "1";
        },500);
      }
    },2500);
  
  });
  
