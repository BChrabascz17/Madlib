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
populate(index,sentence, replacements, "part of speech");
alert(sentence);


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
	for (sindex = 0; sindex < rarray.length; word++){
		sarray[rarray[sindex]] = prompt("Next "+label+":");
	}
	return sarray; 	
}