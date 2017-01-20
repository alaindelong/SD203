"use strict"

var loadDoc = function(){
	
	var xhr = new XMLHttpRequest();
 xhr.open("GET","test.txt");
 xhr.onload = function(){
     document.getElementById("textAreaId").textContent = this.responseText;
   }
  xhr.send();
}