/* loadBoardData.js */

/* ********** ********** ********** ********** ********** ********** 
 * loadForumData 
 * 
 * Loads the metadata for each forum on the site.
 * ********** ********** ********** ********** ********** ********** */

function loadForumData() {
  
  var board_html = new String();
  // Holds the HTML content contained by 'board.okayplayer.com/okp.php'.

  jQuery.ajaxPrefilter(
    function (options) {
      if (options.crossDomain && jQuery.support.cors) {
          options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
      }
    }
  );

  jQuery.get(
    'http://board.okayplayer.com/okp.php',
    function (response) {
      board_html = board_html + response;
    }
  ).done(
    function () {
      console.log(board_html);

      // Routes the HTML of the Boards to 'parseBoardData' which will extract the metadata 
      // of the Boards.
      parseBoardData(board_html);

      // $("body").text(board_html);
    }
  );
  // console.log(board_html);
  // $(body_element).load("http://board.okayplayer.com/okp.php");

} // END of FUNCTION "loadForumData"


/* ********** ********** ********** ********** ********** ********** 
 * parseBoardData 
 * 
 * Extracts the HTML which displays the metadata of the Boards and 
 * injects that HTML into the <body> tag.
 * 
 * @params - board_html
 *           + Contains the full HTML string produced by 
 *             'http://board.okayplayer.com/okp.php'
 * ********** ********** ********** ********** ********** ********** */

function parseBoardData(board_html) {

  var body_search_strings_Array = new Array();
  // Holds an Array which contains the Strings, '<body>' and '</body>'.
  // These strings will be searched for within the contents 
  // of 'board_html'.

  var body_search_index_num_1 = new Number();
  var body_search_index_num_2 = new Number();
  // Holds the location within the HTML held by 'board_html' that 
  // the '<body>' tag begins and ends.
  
  var body_html = new String();
  // Holds a String which contains the HTML that lies between the 
  // '<body>' tag of the HTML held by 'board_html'.

  
console.log("board_html.length = " + board_html.length);
  // Initializes the values of 'body_search_strings_Array' as 
  // '<body>' and '</body>'.
  body_search_strings_Array = [
    "<table class=\"dcborder\" cellspacing=\"0\"", 
    "<tr class=\"dclite\"><td class=\"dcfooter\">Powered by DCForum+ Version 1.25 <br />Copyright &copy; <!-- 1997-2003 //--> DCScripts.com</td></tr></table></td></tr></table>"
  ];

  // The location of the beginning and end of the '<body>' tag is found 
  // within 'board_html' and passed on to 'body_search_index_num_1' 
  // and 'body_search_index_2'.
  body_search_index_num_1 = board_html.indexOf(body_search_strings_Array[0]);
  body_search_index_num_2 = board_html.indexOf(body_search_strings_Array[1]);

console.log("body_search_index_num_1 = " + body_search_index_num_1);
console.log("body_search_index_num_2 = " + body_search_index_num_2);

  // The contents of the <body> tag of the HTML contained by 
  // 'board_html' is passed on to 'body_html'.
  body_html = board_html.slice(body_search_index_num_1, (body_search_index_num_2 + body_search_strings_Array[1].length));

  $("body").html(body_html);
} // END of FUNCTION "parseBoardData"

loadForumData();