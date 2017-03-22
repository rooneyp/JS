
function myFunction(arr) {
  var out = "";
  var i;
  for(i = 0; i < arr.length; i++) {
    out += '<a href="' + arr[i].url + '">' +
        arr[i].display + '</a><br>';
  }
  document.getElementById("id01").innerHTML = out;
}

// Run our kitten generation script as soon as the document's DOM is ready.
document.addEventListener('DOMContentLoaded', function () {
  console.log ( 'starting' );
  var xmlhttp = new XMLHttpRequest();
  var url = "http://www.rte.ie/static/player/config/osmf-config-0-1.js?v=20102014";

  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      var myArr = JSON.parse(xmlhttp.responseText);
      myFunction(myArr);
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();




});