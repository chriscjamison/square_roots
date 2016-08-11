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
	
	var forumModIdNumString = new String;
	var forumModUsernameString = new String;
	var forumModSearchNumStart = new Number;
	var forumModSearchNumEnd = new Number;
	var forumModIdNumSearchNumEnd = new Number;
	var forumModUsernameSearchNumStart = new Number;
	var forumModUsernameSearchNumEnd = new Number;
		
	var forumListing_Array = new Array;
	var forumMod_Array = new Array;
	var forumData_Array = new Array;
	var modData_Array = new Array;
	
	//var PosterInfo = new Array;
	
	indexString_Array = 
		[
			"\"okp.php?az=show_topics&",
			"=",
			"\"",
			"<span class=\"dclink\">",
			"</span>",
			"<span class=\"dccaption\">",
			"<br />",
			"u_id=",
			"\"",
			">",
			"</a>",
			"</td>"
		];
		
	indexNum = sourceCode.indexOf(indexString_Array[0]);

	while (indexNum !== -1)	{
			
		currentIndexNum = indexNum + indexString_Array[0].length;
		
		if ((currentIndexNum === indexNum) || (currentIndexNum === -1))	{
			indexNum = -1;
		}	else	{
			
			
			forumSearchNumStart = sourceCode.indexOf(indexString_Array[1], currentIndexNum);
			forumSearchNumEnd = sourceCode.indexOf(indexString_Array[2], currentIndexNum);
			
			forumString = sourceCode.slice((forumSearchNumStart + indexString_Array[1].length), forumSearchNumEnd);
			
			forumNameSearchNumStart = sourceCode.indexOf(indexString_Array[3], forumSearchNumEnd);
			
			forumNameSearchNumEnd = sourceCode.indexOf(indexString_Array[4], forumSearchNumStart);
			
			forumNameString = sourceCode.slice((forumNameSearchNumStart + indexString_Array[3].length), forumNameSearchNumEnd);
			
			forumDescSearchNumStart = sourceCode.indexOf(indexString_Array[5], forumNameSearchNumEnd);
			forumDescSearchNumEnd = sourceCode.indexOf(indexString_Array[6], forumDescSearchNumStart);
			
			forumDescString = sourceCode.slice((forumDescSearchNumStart + indexString_Array[5].length), forumDescSearchNumEnd);
			
			forumModSearchNumStart = sourceCode.indexOf(indexString_Array[7], forumDescSearchNumEnd);
			forumModSearchNumEnd = sourceCode.indexOf(indexString_Array[11], (forumModSearchNumStart + indexString_Array[7].length));
			
			while ((forumModSearchNumStart < forumModSearchNumEnd) && (forumModSearchNumStart !== -1))	{
				forumModIdNumSearchNumEnd = sourceCode.indexOf(indexString_Array[8], forumModSearchNumStart);
			
				forumModIdNumString = sourceCode.slice((forumModSearchNumStart + indexString_Array[7].length), forumModIdNumSearchNumEnd);
			
				forumModUsernameSearchNumStart = sourceCode.indexOf(indexString_Array[9], forumModIdNumSearchNumEnd);
				forumModUsernameSearchNumEnd = sourceCode.indexOf(indexString_Array[10], forumModUsernameSearchNumStart);
						
				forumModUsernameString = sourceCode.slice((forumModUsernameSearchNumStart + indexString_Array[9].length), forumModUsernameSearchNumEnd);
				
				forumModSearchNumStart = sourceCode.indexOf(indexString_Array[7], forumModUsernameSearchNumEnd);
				
				modData_Array = [
					forumString, 
					forumModIdNumString, 
					forumModUsernameString
				];
				
				forumMod_Array[forumMod_Array.length] = modData_Array;
			}
		}
		
		forumData_Array = [
			forumString,
			forumNameString,
			forumDescString
		];
		
		forumListing_Array[forumListing_Array.length] = forumData_Array;
				
		indexNum = sourceCode.indexOf(indexString_Array[0], forumDescSearchNumEnd);
	}
	
	console.log("forumListing_Array = " + forumListing_Array + "\n");
	console.log("forumMod_Array = " + forumMod_Array + "\n")
	
}