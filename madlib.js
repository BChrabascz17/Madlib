var sentence = [];
var replacement = [];
var index = 0;
alert("End with Shift+6(^)");
alert("filler go away.");
//populate(index, sentence);
alert(populate(index, sentence));

function populate(sindex, sarray) {
	do{
		sarray[sindex]= prompt("Next word:");
		sindex = sindex + 1;
	}
	while (sarray[sindex - 1]!="^");
	console.log(sarray);
	sarray.splice(-1,1);
	return sarray;
}