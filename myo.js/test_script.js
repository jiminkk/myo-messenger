var myMyo = Myo.create();
myMyo.on('fingers_spread', function(edge){
    if(!edge) return;
	var test = "-";
	document.getElementById("mytext").value += test;
    myMyo.vibrate('medium');
})

myMyo.on('fist', function(edge){
	if (!edge) return;
	var test = ".";
	document.getElementById("mytext").value += test;
	myMyo.vibrate('short');
})

myMyo.on('wave_out', function(edge){
    if(!edge) return;
    var test = " ";
	document.getElementById("mytext").value += test;
	myMyo.vibrate('short');
});

myMyo.on('wave_in', function(edge){
    if(!edge) return;
    myMyo.vibrate('short')
    testing();
});

function testing() {
	//document.getElementById("embed").innerHTML="<embed src='inception.mp3' autostart=true loop=false volume=100 hidden=true>";
   	EvalSound("embed");
   	// console.log("action");
    var raw = document.getElementById("mytext").value;
   	var endprod = (blahblah(raw));
   	if (endprod[0] == '.' || endprod[0] == '-'|| endprod == ' '){
   		for (var thing in endprod){
   			console.log(endprod[thing]);
   			if (endprod[thing] == '-'){
   				myMyo.vibrate("medium");
   			}else if(endprod[thing] == '.'){
   				myMyo.vibrate("short");
   			}else{
   				sleep(750);
   			}
		}
   	}

   	alert(endprod);
   	window.location.reload();
	// charList = ['.', '-', ' '];
 //    for (var i in charList){
 //    	if (charlist[i] != endprod[0]){
 //    		alert(endprod);
 //    		return;
 //    	}
 //    }
 //    for(var j in endprod){
 //    	if(endprod[j] = ".")
 //    		myMyo.vibrate("short");
 //    	else
 //    		myMyo.vibrate("medium");
 //    }

}

function EvalSound(soundobj) {
  var thissound=document.getElementById(soundobj);
  thissound.play()
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}