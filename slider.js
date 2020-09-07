var images =[ "img24.webp" ,"img33.jpg","img27.webp" ,"img35.webp" ,"img21.webp","img25.webp","img17.webp"];
var i=0;
function slide(){
    document.getElementById("first-image").src=images [i];
if (i<(images.length-1)) 
i++;
else
i=0;
}
setInterval(slide,1000)

