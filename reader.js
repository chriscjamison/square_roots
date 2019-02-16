$(document).ready(
  function () {
    scrapeHTML();
  }
);

function scrapeHTML() {
  /*  ********** ********** ********** ********** ********** ********** 
      @params - NONE
        
      FUNCTION DETAILS
        Container function which collects HTML from the pages of 
        the forums and parses the board metadata.
      ********** ********** ********** ********** ********** ********** */

  $.ajax(
    {
      url: "http://board.okayplayer.com/okp.php?az=show_topics&forum=5"
    }
  ).done(
    function( data ) {
      // Once the HTML from the Forum Listed page has loaded, the HTML for 
      // BoardReader is created.
      readHTMLforArchive(data);
    }
  );
} // END of FUNCTION scrapeHTML


function readHTMLforArchive(source_code) {
  /* ******** ******** ******** ******** ******** ******** ******** ********
  * @params 
  *   * source_code - String
  *       + Holds the HTML from the Forum Listing page, hosted at 
  *         board.okayplayer.com
  * 
  * FUNCTION DETAILS
  *   readHTMLforArchive extracts HTML from the Forum Listing page, then 
  *   parses that code into HTML formatted for use within BoardReader. The 
  *   formatted code is then returned to _________ to insert inside 
  *   the browser.
  *  ******** ******** ******** ******** ******** ******** ******** ******** */

  // Initializes a String which serves as a 'needle' to find within 
  // the HTML passed on by the variable, 'source_code'.
  var archive_start_search_string = "";
  // Initializes a Number which holds the character number within 
  // the HTML contained within, 'source_code', in which the search string begins.
  var archive_start_search_index;

  // The HTML which surrounds the link 
  archive_start_search_string = "<a href=\"okp.php?az=show_topic&forum=5&topic_id=";

  // The character number within the HTML is returned to 'archive_start_search_index'.
  archive_start_search_index = source_code.indexOf(archive_start_search_string);

  var archive_start_search_string_length;

  // The length of 'archive_start_search_string', in number of characters, is passed on.
  archive_start_search_string_length = archive_start_search_string.length;

  // console.log("archive_data_search_index = " + archive_start_search_index);

  // A new starting point for a search is set by taking the old value of 'archive_start_search_index' 
  // and adding the length of the string found by the initial search to the old value of 
  // of 'archive_search_string_index'.
  archive_start_search_index = archive_start_search_index + archive_start_search_string_length;

  var get_variable_character_search_string = "";
  var get_variable_character_search_index;

  // The next string to be found within 'source_code'.
  get_variable_character_search_string = "&";

  var end_of_metadata_index;

  // The string which appears after the string stored in 'archive_start_search_string' is found and its location 
  // is passed on to 'next_character_search_index'.
  get_variable_character_search_index = source_code.indexOf(get_variable_character_search_string, archive_start_search_index);

  // The Class for all metadata about posts is initiated.
  var postData = {
    topic_id: "", 
    mesg_id: ""
  };

  // The metadata for 'topic_id' is passed on to postData
  postData.topic_id = source_code.slice(archive_start_search_index, get_variable_character_search_index);

  var mesg_id_search_string = "";
  var mesg_id_search_string_index;

  mesg_id_search_string = "mesg_id="

  // A new starting point for the next search is found by adding the number of characters located 
  // within the old search string, 'postData.topic_id.length' to the locatoin of the string found 
  // in the last search, 'next_character_search_index'.

  end_of_metadata_index = get_variable_character_search_index;

  // The location of the new search string, found after the previous search string, is passed on.
  mesg_id_search_string_index = source_code.indexOf(mesg_id_search_string, end_of_metadata_index);

  get_variable_character_search_index = source_code.indexOf(get_variable_character_search_string, mesg_id_search_string_index);
  console.log("get_variable_character_search_index = " + get_variable_character_search_index);
  console.log("end_of_metadata_index = " + end_of_metadata_index);
  console.log("mesg_id_search_string_index = " + mesg_id_search_string_index);

  mesg_id_search_string_index = mesg_id_search_string_index + mesg_id_search_string.length;
  
  // The metadata for 'mesg_id' is passed on to postData.
  postData.mesg_id = source_code.slice(mesg_id_search_string_index, get_variable_character_search_index);

  console.log("postData.topic_id = " + postData.topic_id);
  console.log("postData.mesg_id = " + postData.mesg_id);

} // END of FUNCTION readHTMLforArchive