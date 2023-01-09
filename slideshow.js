var index= 0;
show();

function show(){
    var i;
    var slides= document.getElementsByClassName("slideshow");
    for(i=0; i<slides.length; i++){
        slides[i].style.display= "none";
    }
    index++;
    if (index > slides.length) {index = 1}    
    slides[index-1].style.display = "inline-block";
    setTimeout(show, 3000);
}
