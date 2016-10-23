var http = require('http');

var rq = http.get("http://board.okayplayer.com/okp.php?az=show_topics&forum=5", 
					function(res) {
					var inc = 0;
						
						var pageCode_Array = new Array;
						
						res.on('data',  
										function (sourcecode)	{
											pageCode_Array[inc] = sourcecode.toString();
											inc++;							
										}
						);
						
						res.on('end', 
										function ()	{
											parseBoardData(assembleSourceCode(pageCode_Array));
										}
					);	
				}
											
);


function assembleSourceCode(SourceCode)	{
	var sourceCodeString = new String;
	
	var inc = new Number;
	
	
	for (inc = 0; inc < SourceCode.length; inc++)	{
		sourceCodeString = sourceCodeString + SourceCode[inc].toString();
	}
	sourceCodeString = sourceCodeString.replace(/(\r\n|\n|\r)/gm," ");
	
	sourceCodeString = sourceCodeString.replace(/\s+/g," ");

	return sourceCodeString;
}

function parseBoardData(sourceCode)	{
	var indexStartNum = new Number;
	var currentIndexNum = new Number;
	
	var boardArchiveIndexNumEnd = new Number;
	
	var boardArchiveNameIndexNumStart = new Number;
	var boardArchiveNameIndexNumEnd = new Number;
	
	var boardArchiveDescIndexNumStart = new Number;
	var boardArchiveDescIndexNumEnd = new Number;
	
	var boardArchiveDateIndexNum = new Number;
	var boardArchiveDateIndexNumStart = new Number;
	var boardArchiveDateIndexNumEnd = new Number;
	
	var boardArchiveNumTopicsIndexNum = new Number;
	var boardArchiveNumTopicsIndexNumStart = new Number;
	var boardArchiveNumTopicsIndexNumEnd = new Number;
	
	var boardArchiveIdNumString = new String;
	var boardArchiveNameString = new String;
	var boardArchiveDescString = new String;
	var boardArchiveDateString = new String;
	var boardArchiveNumTopicsString = new String;
	
	var boardIndexString_Array = new Array;
	
	var boardArchiveData_Array = new Array;
	
	boardIndexString_Array = 
		[
			"\"okp.php?az=show_topics&forum=",
			"\"",
			"<span class=\"dclink\">",
			"</span>",
			"<span class=\"dccaption\">",
			"</span>",
			"<td class=\"dcdate\"",
			">",
			"</td>",
			"<td class=\"dcmisc\"",
			">",
			"<br />"
		];
		
		indexStartNum = sourceCode.indexOf(boardIndexString_Array[0]);
		
		currentIndexNum = indexStartNum + boardIndexString_Array[0].length;
		
		boardArchiveIndexNumEnd = sourceCode.indexOf(boardIndexString_Array[1], currentIndexNum);
		
		boardArchiveIdNumString = sourceCode.slice((currentIndexNum + boardIndexString_Array[1].length), boardArchiveIndexNumEnd); 
		
		boardArchiveNameIndexNumStart = sourceCode.indexOf(boardIndexString_Array[2], boardArchiveIndexNumEnd);
		boardArchiveNameIndexNumEnd = sourceCode.indexOf(boardIndexString_Array[3], boardArchiveNameIndexNumStart);
		
		boardArchiveNameString = sourceCode.slice((boardArchiveNameIndexNumStart + boardIndexString_Array[2].length), boardArchiveNameIndexNumEnd); 
		
		boardArchiveDescIndexNumStart = sourceCode.indexOf(boardIndexString_Array[4], boardArchiveNameIndexNumEnd);
		boardArchiveDescIndexNumEnd = sourceCode.indexOf(boardIndexString_Array[5], boardArchiveDescIndexNumStart);
		
		boardArchiveDescString = sourceCode.slice((boardArchiveDescIndexNumStart + boardIndexString_Array[4].length), boardArchiveDescIndexNumEnd);
		
		boardArchiveDateIndexNum = sourceCode.indexOf(boardIndexString_Array[6], boardArchiveDescIndexNumEnd);
		
		boardArchiveDateIndexNumStart = sourceCode.indexOf(boardIndexString_Array[7], boardArchiveDateIndexNum);
		boardArchiveDateIndexNumEnd = sourceCode.indexOf(boardIndexString_Array[8], boardArchiveDateIndexNumStart);
		
		boardArchiveDateString = sourceCode.slice((boardArchiveDateIndexNumStart + boardIndexString_Array[7].length), boardArchiveDateIndexNumEnd);
		
		boardArchiveNumTopicsIndexNum = sourceCode.indexOf(boardIndexString_Array[9], boardArchiveDateIndexNumEnd);
		
		boardArchiveNumTopicsIndexNumStart = sourceCode.indexOf(boardIndexString_Array[10], boardArchiveNumTopicsIndexNum);
		boardArchiveNumTopicsIndexNumEnd = sourceCode.indexOf(boardIndexString_Array[11], boardArchiveNumTopicsIndexNumStart);
		
		boardArchiveNumTopicsString = sourceCode.slice((boardArchiveNumTopicsIndexNumStart + boardIndexString_Array[10].length), boardArchiveNumTopicsIndexNumEnd);
		
		boardArchiveData_Array = [
			boardArchiveIdNumString,
			boardArchiveNameString,
			boardArchiveDateString,
			boardArchiveNumTopicsString
		];
}

function 