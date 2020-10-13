//옴

window.onscroll = function(){
        var t =document.documentElement.scrollTop + document.body.scrollTop;
        moniter.innerHTML = t

      if (t > 800) {
      om1.style.opacity = "100%";
      om2.style.opacity = "100%";
      om3.style.opacity = "100%";
      om4.style.opacity = "100%";
      om5.style.opacity = "100%";
      om5_1.style.opacity = "100%";
      om6.style.opacity = "100%";
      om7.style.opacity = "100%";
      om7_1.style.opacity = "100%";
      om8.style.opacity = "100%";
      om9.style.opacity = "100%";
      om10.style.opacity = "100%";
      om11.style.opacity = "100%";
      om12.style.opacity = "100%";
      om13.style.opacity = "100%";
      om14.style.opacity = "100%";
      om15.style.opacity = "100%";
      om16.style.opacity = "100%";
      om17.style.opacity = "100%";
      om18.style.opacity = "100%";
      om19.style.opacity = "100%";
    }
    else{
      om1.style.opacity = "";
       om2.style.opacity = "";
        om3.style.opacity = "";
      om4.style.opacity = "";
      om5.style.opacity = "";
      om5_1.style.opacity = "";
      om6.style.opacity = "";
      om7.style.opacity = "";
      om7_1.style.opacity = "";
      om8.style.opacity = "";
      om9.style.opacity = "";
      om10.style.opacity = "";
      om11.style.opacity = "";
      om12.style.opacity = "";
      om13.style.opacity = "";
      om14.style.opacity = "";
      om15.style.opacity = "";
      om16.style.opacity = "";
      om17.style.opacity = "";
      om18.style.opacity = "";
      om19.style.opacity = "";
    }

    if (t > 1900) {
      text2.style.opacity  = "100%";
    }

    else{
      text2.style.opacity  = "";
    }

     if (t > 2800) {
      omly.style.opacity = "0%";
    }

    else{
      omly.style.opacity = "";
    }

     if (t > 3650) {
      text4.style.opacity  = "100%";
       text4.style.top  = "3300px";
    }
         else{
          text4.style.opacity  = "";
          text4.style.top  = "";
        }


         if (t > 4900) {
      text5.style.opacity  = "100%";
      text5.style.top  = "4640px";

    }
         else{
          text5.style.opacity  = "";
           text5.style.top  = "";

        }

      if (t > 5500) {
      pep.style.transform  = "rotate(-20deg)";
       pep.style.left  = "-130px";
        pep.style.top  = "4900px";
    }
        else{
           pep.style.transform  = "";
       pep.style.left  = "";
        pep.style.top  = "";
        }

           if (t > 5800) {
      text6.style.opacity  = "100%";

    }
         else{
          text6.style.opacity  = "";

        }
           
    }



//human1-.onclick = function(){	bodyy.style.position = "relative";}

//스크롤시 다른 링크로 이동

   $(window).scroll(function() {
        var scrolltop = $(document).scrollTop();
        console.log(scrolltop);
        var height = $(document).height();
        console.log(height);
        var height_win = $(window).height();
        console.log(height_win);
        
        
     if (Math.round( $(window).scrollTop()) == $(document).height() - $(window).height()) {
        
    var url = "https://jjoohee.github.io/battle-of-misfortunes/";
		$(location).attr('href',url);
        
    }
});

//로딩화면

 document.addEventListener("DOMContentLoaded", function() {
    requestAnimationFrame(function() {
            document.getElementById("loadingBar").style.width = "100%";
      });
    });

window.onload = function () {
document.getElementById("loadingIndicator").style.opacity = "0";
setTimeout(function() {
    document.getElementById("loadingIndicator").style.display = "none";}, 450);
}
