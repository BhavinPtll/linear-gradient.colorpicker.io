function myFunction() 
{   var x = document.getElementById("myColor").value;
    var y = document.getElementById("myColor2").value;    
    var grad = "linear-gradient(to right, " + x + " , " + y + " )";    
    document.getElementById("demo").innerHTML =  grad;
    document.getElementById("bod").style.background = grad;
}
//============================
var form = document.querySelector("form");
var log = document.querySelector("#log");

form.addEventListener("submit", function(event) {
  var data = new FormData(form);
  var output = "";
  for (const entry of data) {
    output = entry[0] + "=" + entry[1] + "\r";
  };
 // log.innerText = output;
  event.preventDefault();
}, false);