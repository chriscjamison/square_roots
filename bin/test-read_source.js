var http = require('http');

var rq = http.get("http://board.okayplayer.com/okp.php", 
					function(res) {
					var inc = 0;
						
						var pageCode_Array = new Array;
						
						res.on('data',  
										function (sourcecode)	{
											pageCode_Array[inc] = sourcecode.toString();
											inc++									
										}
						);
						
						res.on('end', 
										function ()	{
											parseSourceCode(assembleSourceCode(pageCode_Array));
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


function parseSourceCode(sourceCode)	{
	var inc = new Number;
	
	var indexNum = new Number;
	var currentIndexNum = new Number;
	var forumIndexNum = new Number;
	
	var count = new Number;
	
	var indexString_Array = new Array;
	
	var forumString = new String;
	var forumSearchNumStart = new Number;
	var forumSearchNumEnd = new Number;
	
	var forumNameString = new String;
	var forumNameSearchNumStart = new Number;
	var forumNameSearchNumEnd = new Number;
	
	var forumDescString = new String;
	var forumDescSearchNumStart = new Number;
	var forumDescSearchNumEnd = new Number;
	
	var forumString_Array = new Array;
	var forumNameString_Array = new Array;
<<<<<<< HEAD
	var forumDescString_Array = new Array;
	
	//var PosterInfo = new Array;
	
	indexString_Array = 
		[	"?az=show_topics&",
			"=",
			"\"",
			"<span class=\"dclink\">",
=======
	
	//var PosterInfo = new Array;
	
	forumIndexNum = sourceCode.indexOf("<span class=\"dclink\">");
	var forumIndexStringLength = "<span class=\"dclink\">".length;
	console.log("Forum Index Before Loop: forumIndexNum = " + forumIndexNum);
	
	while (forumIndexNum !== -1) {
		inc++;
		forumIndexNum = sourceCode.indexOf("<span class=\"dclink\">", (forumIndexNum + forumIndexStringLength));
		console.log("Forum Index In Loop: forumIndexNum = " + forumIndexNum);
	}

	console.log("inc = " + inc); 
	/*
	indexString_Array = 
		[
			"\"okp.php?az=show_topics&",
			"=",
			"\"",
>>>>>>> 73d459872d493c34a1689cc1b7aa0e70cc23454d
			"</span>",
			"<span class=\"dccaption\">",
			"<br />"
		];
	
	indexNum = sourceCode.indexOf(indexString_Array[0]);
	
	while (indexNum !== -1)	{
			
		currentIndexNum = indexNum + indexString_Array[0].length;
		
		if ((currentIndexNum === indexNum) || (currentIndexNum === -1))	{
			indexNum = -1;
		}	else	{
<<<<<<< HEAD
=======
			count++;
			
>>>>>>> 73d459872d493c34a1689cc1b7aa0e70cc23454d
			forumSearchNumStart = sourceCode.indexOf(indexString_Array[1], currentIndexNum);
			forumSearchNumEnd = sourceCode.indexOf(indexString_Array[2], currentIndexNum);
			
			forumString = sourceCode.slice((forumSearchNumStart + 1), forumSearchNumEnd);
			
			forumNameSearchNumStart = sourceCode.indexOf(indexString_Array[3], forumSearchNumEnd);
<<<<<<< HEAD
			forumNameSearchNumEnd = sourceCode.indexOf(indexString_Array[4], forumSearchNumStart);
			
			forumNameString = sourceCode.slice((forumNameSearchNumStart + indexString_Array[3].length), forumNameSearchNumEnd);
			
			forumDescSearchNumStart = sourceCode.indexOf(indexString_Array[5], forumNameSearchNumEnd);
			forumDescSearchNumEnd = sourceCode.indexOf(indexString_Array[6], forumDescSearchNumStart);
			
			forumDescString = sourceCode.slice((forumDescSearchNumStart + indexString_Array[5].length), forumDescSearchNumEnd);
			
		}
		
		forumString_Array[count] = forumString;
		forumNameString_Array[count] = forumNameString;
		forumDescString_Array[count] = forumDescString;
		
		count++;
		
		indexNum = sourceCode.indexOf(indexString_Array[0], forumDescSearchNumEnd);
	
=======
			forumNameSearchNumEnd = sourceCode.indexOf( forumSearchNumEnd);
			
			forumDescSearchNumStart = sourceCode.indexOf(indexString_Array[4], forumNameSearchNumEnd);
			forumDescSearchNumEnd = sourceCode.indexOf(indexString_Array[5], forumDescSearchNumStart);
			
			forumNameString = sourceCode.slice((forumNameSearchNumStart + 9), forumNameSearchNumEnd);
		}
		
		forumString_Array[inc] = forumString;
		forumNameString_Array[inc] = forumNameString;
		
		var forumLinkString = indexString_Array[0] + "forum=" + forumString + "\"";
		
		indexNum = sourceCode.indexOf(forumLinkString, forumNameSearchNumEnd);
		
		console.log("indexNum = " + indexNum);
>>>>>>> 73d459872d493c34a1689cc1b7aa0e70cc23454d
	}	

	console.log("forumString_Array = " + forumString_Array);
	console.log("forumNameString_Array = " + forumNameString_Array);
<<<<<<< HEAD
	console.log("forumDescString_Array = " + forumDescString_Array);

=======
	*/
>>>>>>> 73d459872d493c34a1689cc1b7aa0e70cc23454d
}

