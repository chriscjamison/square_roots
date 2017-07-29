/* loadBoardData.js */

/* ********** ********** ********** ********** ********** ********** 
 * loadForumData 
 * 
 * Loads the metadata for each forum on the site.
 * 
 * @params - forum_url
 *           + Contains the URL string which loadForumData uses 
 *             to locate the content on OKP.
 * ********** ********** ********** ********** ********** ********** */

function loadForumData(forum_url) {
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
    forum_url,
    function (response) {
      board_html = board_html + response;
    }
  ).done(
    function () {
      // Routes the HTML of the Boards to 'parseBoardData' which will extract the metadata 
      // of the Boards.
      parseBoardData(board_html);
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
  var link_url_search_strings_Array = new Array();
  // Holds an Array which contains the URL's for the '<a>' tags which 
  // contain links to the individual Forums.
  var link_url_replace_strings_Array = new Array();
  // Holds an Array which contains URL Hashes which will replace 
  // the contents of '<a>' tags which link to individual Board 
  // Forums.

  var body_search_index_num_1 = new Number();
  var body_search_index_num_2 = new Number();
  // Holds the location within the HTML held by 'board_html' that 
  // the '<body>' tag begins and ends.
  
  var link_url_search_index_num = new Number();
  // Holds the location within the HTML held by 'board_html' that 
  // contains a '<a>' tag that holds a HREF that points to 
  // and individual Board Forum.

  var body_html = new String();
  // Holds a String which contains the HTML that lies between the 
  // '<body>' tag of the HTML held by 'board_html'.
  var parsed_html = new String();
  // Holds a String which holds HTML stored in 'board_html'. 
  // The 'href' attributes of the <a> tags which refer to 
  // the individual boards have been changed to allow for 
  // the extension to load the content for each board.


  // Initializes the values of 'body_search_strings_Array' as 
  // '<body>' and '</body>'.
  body_search_strings_Array = [
    "<table class=\"dcborder\" cellspacing=\"0\"", 
    "<tr class=\"dclite\"><td class=\"dcfooter\">Powered by DCForum+ Version 1.25 <br />Copyright &copy; <!-- 1997-2003 //--> DCScripts.com</td></tr></table></td></tr></table>"
  ];

  link_url_search_strings_Array = [
    "okp.php\\?az\\=show_topics\\&forum\\=32",
    "okp.php\\?az\\=show_topics\\&forum\\=3", 
    "okp.php\\?az\\=show_topics\\&forum\\=5", 
    "okp.php\\?az\\=show_topics\\&forum\\=4", 
    "okp.php\\?az\\=show_topics\\&forum\\=8", 
    "okp.php\\?az\\=show_topics\\&forum\\=6", 
    "okp.php\\?az\\=show_topics\\&forum\\=7", 
    "okp.php\\?az\\=show_topics\\&forum\\=26", 
    "okp.php\\?az\\=show_topics\\&forum\\=11", 
    "okp.php\\?az\\=show_topics\\&forum\\=22"
  ];

  link_url_replace_strings_Array = [
    "#Organix",
    "#OkayArtist", 
    "#TheLesson", 
    "#GeneralDiscussion", 
    "#OkaySports", 
    "#PassThePopcorn", 
    "#Freestyle", 
    "#MakeTheMusic", 
    "#HighTech", 
    "#OkayActivist"
  ];

  // The location of the beginning and end of the '<body>' tag is found 
  // within 'board_html' and passed on to 'body_search_index_num_1' 
  // and 'body_search_index_2'.
  body_search_index_num_1 = board_html.indexOf(body_search_strings_Array[0]);
  body_search_index_num_2 = board_html.indexOf(body_search_strings_Array[1]);

  // The contents of the <body> tag of the HTML contained by 
  // 'board_html' is passed on to 'body_html'.
  body_html = board_html.slice(body_search_index_num_1, (body_search_index_num_2 + body_search_strings_Array[1].length));

  // The HTML held by 'body_html' is passed to 'parsed_html'. 
  // In the upcoming 'forEach' Method, the 'href' attributes 
  // within the HTML which refer to individual forums will be 
  // swapped out.
  parsed_html = body_html;
  
  // The 'forEach' Method cycles through the URL strings 
  // contained by 'link_url_search_strings_Array' and locates 
  // the URL string within the HTML contained in 'body_html'.
  link_url_search_strings_Array.forEach(
    function (item, index) {
      var link_url_search_string = new String();
      // The value of the Array item underprocessing is passed on.

      link_url_search_string = item;

      // The URL held by 'link_url_search_string' is converted into the 
      // RegExp datatype. 
      // NOTE: The regular expression will extract all mentions of 
      // the URL within 'parsed_html'.
      link_url_replace_regex = new RegExp(link_url_search_string, "g");

      // The URL held by 'link_url_search_string' is extracted from the 
      // HTML held by 'parsed_html' and replaced with a URL Hash.
      // NOTE: ex: In the case of General Discussion the URL string is 
      // replaced with '#GeneralDiscussion'.
      parsed_html = parsed_html.replace(link_url_replace_regex, link_url_replace_strings_Array[index]);
    }
  ); 
  
  $("body").html(parsed_html);
} // END of FUNCTION "parseBoardData"

var initial_forum_url = new String();
// Holds a String which is a URL that points to the 
// Lobby of OKP.
initial_forum_url = "http://board.okayplayer.com/okp.php";

// Loads the content of OKP's Lobby.
loadForumData(initial_forum_url);

$(window).on("hashchange", 
  function () {
    var url_hash = new String();
    // Holds the URL Hash of the current page.

    var base_url_string = new String();
    // Holds the domain and path of the URL for OKP.
    var forum_url_string = new String();
    // Holds the GET variables of an individual forum.

    var forum_url_strings_Array = new Array;
    // Holds the GET variables for the forums of OKP.

    // The current URL Hash is passed to 'url_hash'.
    url_hash = window.location.hash;

    // The URL string which will serve as a prefix to the URL's to the 
    // board content is passed to 'base_url_string'.
    base_url_string = "http://board.okayplayer.com/okp.php";

    forum_url_strings_Array = [
      "", 
      "?az=show_topics&forum=32",
      "?az=show_topics&forum=3", 
      "?az=show_topics&forum=5", 
      "?az=show_topics&forum=4", 
      "?az=show_topics&forum=8", 
      "?az=show_topics&forum=6", 
      "?az=show_topics&forum=7", 
      "?az=show_topics&forum=26", 
      "?az=show_topics&forum=11", 
      "?az=show_topics&forum=22"
    ];

    
    if (url_hash === "#OkayArtist")  {

      // The GET variables of "OkayArtist" is passed on to 
      // 'forum_url_string'.
      forum_url_string = forum_url_strings_Array[1];
      
    } else if (url_hash === "#TheLesson") {
      
      // The GET variables of "The Lesson" is passed on to 
      // 'forum_url_string'.
      forum_url_string = forum_url_strings_Array[2];
    } else if (url_hash === "#GeneralDiscussion") {
      
      // The GET variables of "General Discussion" is passed on to 
      // 'forum_url_string'.
      forum_url_string = forum_url_strings_Array[3];
    } else if (url_hash === "#OkaySports") {
      
      // The GET variables of "OkaySports" is passed on to 
      // 'forum_url_string'.
      forum_url_string = forum_url_strings_Array[4];
    } else if (url_hash === "#Organix") {
      
      // The GET variables of "TheLesson" is passed on to 
      // 'forum_url_string'.
      forum_url_string = forum_url_strings_Array[5];
    } else if (url_hash === "#PassThePopcorn") {
      
      // The GET variables of "Pass The Popcorn" is passed on to 
      // 'forum_url_string'.
      forum_url_string = forum_url_strings_Array[5];
    } else if (url_hash === "#FreestyleBoard") {
      
      // The GET variables of "Freestyle Board" is passed on to 
      // 'forum_url_string'.
      forum_url_string = forum_url_strings_Array[6];
    } else if (url_hash === "#MakeTheMusic") {
      
      // The GET variables of "Make The Music" is passed on to 
      // 'forum_url_string'.
      forum_url_string = forum_url_strings_Array[7];
    } else if (url_hash === "#HighTech") {
      
      // The GET variables of "High Tech" is passed on to 
      // 'forum_url_string'.
      forum_url_string = forum_url_strings_Array[8];
    }

    // The domain name and path are added as a prefix to 
    // 'forum_url_string'.
    forum_url_string = base_url_string + forum_url_string;

    loadForumData(forum_url_string);
  }
);