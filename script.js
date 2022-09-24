function changeFont(font) {
  document.getElementById("content").style.font = font.value;

}
function fontsize(n) {
  var size = document.getElementById("content");
  s.style.fontsize = n.value + "px";
}

function Bold()
  {
    var bol=document.getElementById("content").style.fontWeight;
    if(bol=="normal")
    {
      document.getElementById("content").style.fontWeight="bold";
    }
    else{
      document.getElementById("content").style.fontWeight="normal";
    }
  }

function italic(){
    {
    var bol=document.getElementById("content").style.fontStyle;
    if(bol=="normal")
    {
      document.getElementById("content").style.fontStyle="Italic";
    }
    else{
      document.getElementById("content").style.fontStyle="normal";
    }
  }
}