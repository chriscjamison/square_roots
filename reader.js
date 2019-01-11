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
  var archive_start_search_string;
  // Initializes a Number which holds the character number within 
  // the HTML contained within, 'source_code', in which the search string begins.
  var archive_start_search_index;

  // The HTML which surrounds the link 
  archive_start_search_string = "<td width=\"100%\" colspan=\"2\">";

  // The character number within the HTML is returned to 'archive_da
  archive_start_search_index = source_code.indexOf(archive_start_search_string);

  

  console.log("archive_data_search_index = " + archive_start_search_index);

  /* var left_bracket_search_string;
  var left_bracket_search_index;

  left_bracket_search_string = "<";

  left_bracket_search_index = data.indexOf(left_bracket_search_string, archive_date_search_index);

  console.log("left_bracket_search_index = " + left_bracket_search_index); */

} // END of FUNCTION readHTMLforArchive