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
function makeValueList()
{
	for (var key in morse_dict){
		valueList.push(morse_dict[key]);
		//console.log(valueList);
	}
}

function find_key(dic, val){
	for (var key in dic){
		if (dic[key] == val){
			return dic[key];
		}
	}
}

function find_value(dic, val){
	for (var key in dic){
		if (dic[key] == val){
			return key;
		}
	}
}

function has_key(dic, val){
	key_list = Object.keys(dic);
	for (var key in key_list){
		//console.log(key_list[key]);
		//console.log(val);
		if (val == key_list[key]){
			//console.log(val);
			//console.log(key);
			return true;
		}
	}
	return false;
}

function blahblah(arg){
	var text = arg.toLowerCase();

	charList = ['.', '-', ' '];
	for (morse in charList){
		// console.log(arg[0]);
		if (arg[0] == charList[morse]){
			return morseCodeDetected(arg);
		}
	}
	// console.log("something is wrong");
	return textDetected(arg);

}

function morseCodeDetected(morse){
	//if (tom == false){
		// console.log("senpai its in");
		makeValueList();
		//console.log(valueList);
		var newstring = "";
		var morse_lines = morse.split("  ");
		// console.log(morse_lines);
		var newlist = [];
		console.log(morse_lines);
		for (var line in morse_lines){
			// newlist is a list of separates words broken into letters
			newlist.push(morse_lines[line].split(" "));
			console.log("newlist", newlist);
			// console.log("letters",morse_lines[line].split(" "));

			// for (var ch in newlist){
			// // console.log(ch);
			// 	for (var i in valueList){
			// 		//
			// 		if (newlist[ch] == valueList[i]){
			// 			find_value(morse_dict, newlist[ch]);
			// 			console.log('1');
			// 			console.log("return find value: ",find_value(morse_dict, newlist[ch]));
			// 			newstring = newstring.concat(find_value(morse_dict, newlist[ch]));
			// 		}
			// 	}
			// }
			// newstring = newstring.concat(" ");
		}
		for (var i in newlist){
			for (var j in newlist[i]){
				console.log("IJ: ",newlist[i][j]);
				for (var value in valueList){
					if (newlist[i][j] == valueList[value]){
						find_value(morse_dict, newlist[i][j]);
						console.log("return key: ",find_value(morse_dict, newlist[i][j]));
						newstring = newstring.concat(find_value(morse_dict, newlist[i][j]));
					}
				}
				
			}
			newstring = newstring.concat(" ");
		}

		// console.log(newlist);
		
	//}
	//console.log("3");
	//document.getElementById("morse2eng").value = newstring;
	// console.log("!!!!", newstring);
	return newstring;
}

function textDetected(text){
	//console.log("2");
	//else{
		newstring = "";
		for (var ch in text){
			//console.log(text[ch]);
			//console.log(text);
			if (has_key(morse_dict, text[ch])){
				
				newstring = newstring.concat(morse_dict[text[ch]]," ");

				// console.log("1: ",morse_dict[text[ch]]);
				// console.log("2: ",newstring);
			}
			else{
				// console.log("error");
				newstring = "\nError translating!!! Character not a text. ";
				break;
			}
		}
	//}
	//console.log("3");
	//document.getElementById("morse2eng").value = newstring;
	//console.log("<3: ", newstring);
	return newstring;
}

