<<<<<<< HEAD
/// <reference path="typings/node/node.d.ts"/>

var http = require('http');

var rq = http.get("http://board.okayplayer.com/okp.php?az=show_topics&forum=5", 
											 function(res) {
  												var inc = 0;
													
													var pageCode_Array = new Array();
													
													res.on('data',  
																	function (chunk)	{
																		pageCode_Array[inc] = chunk.toString();
																		
																		inc++									
																	}
													);
													
													res.on('end', 
																	function ()	{
																		assemblePageCode(pageCode_Array);			
													});	
											}
											
);


var pageCodeString = new String();

function searchForValue(fieldValue_Array, pageCode)	{
	var match = 0;
	
	var searchValue = new Number;
	var searchValue2 = new Number;
	var searchValue3 = new Number;
	
	
	var searchStringIndex = 0;

	var searchResult = new String;

	while (searchValue != -1)	{
		if (match == 0) 	{
			searchValue = pageCode.indexOf(fieldValue_Array[0]);
			
			searchStringIndex = searchValue + fieldValue_Array[0].length;
			
		} else	{
			searchValue = pageCode.indexOf(fieldValue_Array[0], searchStringIndex);
			
			searchStringIndex = searchValue + fieldValue_Array[0].length;
		}	
		
		//**** FORMAT FOR FORUM IDNum ****
		
		searchValue2 = pageCode.indexOf(fieldValue_Array[1], searchStringIndex);
		
		searchResult = pageCode.substr(searchValue2, (searchValue2 - searchStringIndex));
		
		if (fieldValue_Array.length == 3)	{
			searchValue3 = searchResult.indexOf(fieldValue_Array[2]);
			
			searchResult = searchResult.substr((searchValue3 + fieldValue_Array[2].length));
		}
		
		if (searchValue != -1)	{
			console.log("searchResult = " + searchResult);
			match++;
			console.log("match = " + match);
		}
	}
}

function parseCode(stringOfCode)	{
	var authorName_Array = new Array();
	var authorIDNum_Array = new Array();
	var titleIDNumForum_Array = new Array();
	var titleName_Array = new Array();
	
	var authorNameSearchString = new String();
	var authorNameSearchStringEnd = new String();
	var authorIDNumSearchString = new String();
	var authorIDNumSearchStringEnd = new String();
	var authorIDNumSearchString2 = new String();
	var titleNameSearchString = new String();
	var titleNameSearchStringEnd = new String();
	var titleIDNumSearchString = new String();
	var titleIDNumSearchStringEnd = new String();
	var titleIDNumForumSearchString = new String();
	var titleIDNumTopicSearchString = new String();
	var titleIDNumMesgSearchString = new String();
	
	
	authorIDNumSearchString = "<div align=\"center\"><a href=\"";
	authorIDNumSearchStringEnd = "\"";
	authorIDNumSearchString2 = "u_id=";
	
	authorNameSearchString = "class=\"dcauthorlink\">";
	authorNameSearchStringEnd = "</a>";
	
	titleIDNumSearchString = "<a href=\"okp.php?az=show_topic";
	titleIDNumSearchStringEnd = "&";
	titleIDNumForumSearchString = "forum=";
	titleIDNumTopicSearchString = "topic_id=";
	titleIDNumMesgSearchString = "mesg_id=";
	
	titleNameSearchString = "<span class=\"dclink\">";
	titleNameSearchStringEnd = "</span>";
	
	authorName_Array = [authorNameSearchString, authorNameSearchStringEnd];
	authorIDNum_Array = [authorIDNumSearchString, authorIDNumSearchStringEnd, authorIDNumSearchString2];
	
	titleIDNumForum_Array = [titleIDNumSearchString, titleIDNumSearchStringEnd, titleIDNumForumSearchString];
	titleName_Array = [titleNameSearchString, titleNameSearchStringEnd];
	
	//searchForValue(authorName_Array, stringOfCode);
	//searchForValue(authorIDNum_Array, stringOfCode);
	searchForValue(titleIDNum_Array, stringOfCode);
}

function assemblePageCode(pageCode_InFunct_Array)	{
		var inc = 0;
		var codeString = new String();
		
		for (inc = 0; inc < pageCode_InFunct_Array.length; inc++)	{
			codeString = codeString + pageCode_InFunct_Array[inc];	
		}
		
		parseCode(codeString);
		
}


=======
var http = require('http');

//console.log(fs.createReadStream('http://board.okayplayer.com/okp.php:8080'));
/*
var options = {
	hostname: "www.chriscjamison.com", 
	path: "/index.html"
};

var req = http.request(options,
												function (res) {
													res.on('data', 
																 function (chunk)	{
																	console.log('chunk = ' + chunk);
													});}
												
											 function (res) {
												  res.on('error',
																function (err)	{
																	console.log('err = ' + err);
													});
												});
												*/

var rq = http.get("http://board.okayplayer.com/okp.php?az=show_topics&forum=5", 
											 function(res) {
  												console.log("Got response: " + res.statusCode);
													res.on('data',  
																	function (chunk)	{
																		console.log(chunk.toString());
																	}
													);
											}
											
<<<<<<< HEAD
);
=======
);
>>>>>>> f15ccaad719888178ffc2edb7ce86ab9c4aaf48d
>>>>>>> d8e96e08f484cfe1b7de95445ce2ea4c27270bb8
