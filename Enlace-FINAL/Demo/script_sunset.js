let clicked = false;
document.getElementById("sun").addEventListener("click", sunClicked);
function sunClicked(){
  var first = document.getElementsByClassName("first-row");
  var second = document.getElementsByClassName("second-row");
  var third = document.getElementsByClassName("third-row");
  if(clicked===false){
    document.getElementById("sun").style.backgroundColor="#FFAA54";
    document.getElementById("sun").style.marginTop="130vh";
    document.getElementById("sun").style.width="300px";
    document.getElementById("sun").style.height="300px";
    document.getElementById("sun").style.boxShadow="0 0 100px #fff";
    document.getElementById("sky").style.marginTop="-100vh";
    Array.prototype.forEach.call(first, function(el) {
      el.style.borderBottom="40vh solid #FF9A1F";
    });
    Array.prototype.forEach.call(second, function(el) {
      el.style.borderBottom="30vh solid #E86710";
    });
    Array.prototype.forEach.call(third, function(el) {
      el.style.borderBottom="20vh solid #692E07";
    });
    clicked=true;
  }else{
    document.getElementById("sun").style.backgroundColor="WHITE";
    document.getElementById("sun").style.marginTop="60px";
    document.getElementById("sun").style.width="250px";
    document.getElementById("sun").style.height="250px";
    document.getElementById("sun").style.boxShadow="none";
    document.getElementById("sky").style.marginTop="0";
    Array.prototype.forEach.call(first, function(el) {
      el.style.borderBottom="40vh solid #BE87FA";
    });
    Array.prototype.forEach.call(second, function(el) {
      el.style.borderBottom="30vh solid #9781F0";
    });
    Array.prototype.forEach.call(third, function(el) {
      el.style.borderBottom="20vh solid #6A72D9";
    });
    clicked=false;
  }
}