//text = "... --- ...  ... --- ...  ... --- ... ... --- ...  ... --- ... "
//text = ".......... ------------- .---"

//var text = "sos SOS sOsSOs Sos";

//text = "adqwd ! $"

var morse_dict = {
	'a': ".-", 
	'b': "-...", 
	'c': "-.-.", 
	'd': "-..", 
	'e': ".", 
	'f': "..-.", 
	'g': "--.", 
	'h': "....", 
	'i': "..", 
	'j': ".---", 
	'k': "-.-", 
	'l': ".-..", 
	'm': "--", 
	'n': "-.", 
	'o': "---", 
	'p': ".--.", 
	'q': "--.-", 
	'r': ".-.", 
	's': "...", 
	't': "-", 
	'u': "..-", 
	'v': "...-", 
	'w': ".--", 
	'x': "-..-", 
	'y': "-.--", 
	'z': "--..", 
	'1': ".----", 
	'2': "..---", 
	'3': "...--", 
	'4': "....-", 
	'5': ".....", 
	'6': "-....", 
	'7': "--...", 
	'8': "---..", 
	'9': "----.", 
	'0': "-----", 
	',': "--..--", 
	'.': ".-.-.-", 
	'?': "..--..", 
	'/': "-..-.", 
	'-': "-....-", 
	' ': ""
};

var valueList = [];	
//var key = "";				// list of values of morse_dict
for (var key in morse_dict){
	valueList.push(morse_dict[key]);
}

function find_key(dic, val){
	for (var key in dic){
		if (dic[key] == val){
			return dic[key];
		}
	}
}

function has_key(dic, val){
	key_list = Object.keys(dic);
	for (var key in key_list){
		console.log(key_list[key]);
		console.log(val);
		if (val == key_list[key]){
			console.log(val);
			console.log(key);
			return true;
		}
	}
	return false;
}

function blahblah(arg){
	var text = arg.toLowerCase();

	charList = ['.', '-', ' '];
	for (morse in charList){
		if (arg[0] == morse){
			morseCodeDetected(arg);
		}
	}
	textDetected(arg);

}

function morseCodeDetected(morse){
	//if (tom == false){
		var newstring = "\nMorse code detected! Translation from morse code:\n";
		var morse_lines = morse.split("  ");
		var newlist = [];
		for (var line in morse_lines){
			newlist.push(line.split());
		}
		for (var word in newlist){
			for (var letter in word){
				if (letter in valueList){
					var key_found = find_key(morse_dict, letter);
					newstring.concat(key_found);
				}
				else{
					newstring = "\nError translating!!! Character not a morse. "
					break;
				}
				newstring.concat(" ");
			}
		}
	//}
	console.log("3");
	document.getElementById("morse2eng").value = newstring;
}

function textDetected(text){
	//console.log("2");
	//else{
		newstring = "\nText detected! Translation to morse code:\n";
		for (var ch in text){
			console.log(text[ch]);
			console.log(text);
			if (has_key(morse_dict, text[ch])){
				console.log(morse_dict[text[ch]]);
				newstring.concat(morse_dict[text[ch]]," ");
			}
			else{
				console.log("error");
				newstring = "\nError translating!!! Character not a text. ";
				break;
			}
		}
	//}
	console.log("3");
	document.getElementById("morse2eng").value = newstring;
}