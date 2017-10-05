//initialize variables
var sentence = [];
var replacements = [];
var index = 0;
//initialize users
alert("filler go away.");
alert("End with Shift+6(^)");
//fill sentence
populate(index, sentence,"word");
index = 0;
alert(sentence);
// specify positions
populate(index, replacements, "position");
alert(replacements);
index = 0;
// populate(index,sentence, replacements, "part of speech");
replace(index,sentence, replacements, "part of speech");
alert(sentence);
//switch people
//train filler
alert("Enter words that match the part of speech shown");
index = 0;
replace(index,sentence, replacements, "new word");
sentenceString = sentence.join(' ')
alert(sentenceString.toString())

function populate(sindex, sarray, label) {
	do{
		sarray[sindex]= prompt("Next "+label+":");
		sindex = sindex + 1;
	}
	while (sarray[sindex - 1]!="^");
	console.log(sarray);
	sarray.splice(-1,1);
	return sarray;
}



function replace(sindex, sarray, rarray, label) {
	for (sindex = 0; sindex < rarray.length; sindex++){
		if(label == "new word") {
			sarray[rarray[sindex]] = prompt("Provide a "+sarray[rarray[sindex]]+" here:");
		}
		else{
			sarray[rarray[sindex]] = prompt("Next "+label+":");
		}
		
	}
	return sarray; 	
}