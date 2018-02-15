$(document).ready(
  function () {
    function scrapeHTML() {
      var html_source_code = new String();
      // Holds the board data and HTML loaded from http://board.okayplayer.com/okp.php.

      var current_index_val = new Number();
      // 'Holds the index number representing the point in the source HTML where the 
      // <head> tag ends.

      var next_ele_index_val = new Number();
      // Holds the index number of the element following the current element 
      // which has just been found.

      var elements_searched_Array = new Array();
      // Holds HTML referencing points in the code which lies before the HTML to be scraped.

      var data_found_Array = new Array();
      // Holds the board metadata which will be inserted into an HTML template.

      var inc, inc_2, inc_3 = new Number();
      // Hold incrementers.

      var search_ele_nums_Array = new Array();
      // Holds the number of cycles a loop is to run for the purpose to find metadata which is similar. 

      var next_ele_vals_Array = new Array();
      // Contains the elements_searched_Array index number that matches the string to be searched for.

      var html_snippet = new String();
      // Contains metadata from the HTML which will be reinserted into updated, modern HTML5.

      elements_searched_Array = [
        "<td class=\"dcmenu\">", 
        "<a href=\"", 
        "\">",
        "</a>",
        "<img src=\"", 
        "\"",
        "<span class=\"dcemp\">",
        "</span>",
        "<span class=\"dcdate\">",
        "<table class=\"dcborder\"",
        "<td class=\"dcheading\" colspan=\"6\">",
        "</td>",
        "<td width=\"20\">",
        "<span class=\"dclink\">",
        "span class=\"dccaption\">",
        "<br />",
        "<span class=\"dcauthorinfo\">",
        "<td class=\"dcdate\" nowrap=\"nowrap\">",
        "<td class=\"dcmisc\" nowrap=\"nowrap\" colspan=\"2\">",
        "<strong>",
        "<b>",
        "<a name=\"",
        "<span class=\"dclink\">",
        "\">",
        "<td class=\"dcdate\"  width=\"120\">",
        "<div align=\"center\">",
        "<span class=\"dcmisc\">",
        " /> ",
        "</A>"
      ];
      
      search_ele_nums_Array = [0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

      next_ele_vals_Array = [0, 1, 2, 3, 4, 5, 1, 2, 4, 5, 1, 2, 1, 2, 4, 5, 1, 2, 1, 2, 4, 5, 1, 2, 1, 2, 4, 5, 6, 7, 8, 7];
      
      inc = 0;
      inc_3 = 0;
      next_ele_index_val = 0;

      html_source_code = $("html").html();
      // window.alert("search_ele_nums_Array.length = " + search_ele_nums_Array.length);
      for (inc = 0; inc < search_ele_nums_Array.length; inc++)  {
        // window.alert("inc = " + inc);
        // window.alert("elements_searched_Array[" + next_ele_vals_Array[inc_3] + "] = " + elements_searched_Array[next_ele_vals_Array[inc_3]]);
        current_index_val = html_source_code.indexOf(elements_searched_Array[next_ele_vals_Array[inc_3]], next_ele_index_val);
        current_index_val = current_index_val + elements_searched_Array[next_ele_vals_Array[inc_3]].length;
        // window.alert("current_index_val = " + current_index_val);
        
        inc_3++;
      
        // window.alert("inc_3 = " + inc_3);
        if (search_ele_nums_Array[inc] > 0) {
          // window.alert("inc = " + inc);
          // window.alert("search_ele_nums_Array[" + inc + "] = " + search_ele_nums_Array[inc]);

          for (inc_2 = 0; inc_2 < search_ele_nums_Array[inc]; inc_2++) {
            // window.alert("inc = " + inc);
            // window.alert("inc_2 = " + inc_2);
            // window.alert("inc_3 = " + inc_3);
            
            next_ele_index_val = html_source_code.indexOf(elements_searched_Array[next_ele_vals_Array[inc_3]], current_index_val);

            // next_ele_index_val = next_ele_index_val + elements_searched_Array[next_ele_vals_Array[inc_3]].length;
            // window.alert("next_ele_index_val = " + next_ele_index_val);
            html_snippet = html_source_code.slice(current_index_val, next_ele_index_val);
            // window.alert("html_source_code.slice(" + current_index_val + ", " + next_ele_index_val + ") = " + html_source_code.slice(current_index_val, next_ele_index_val));
            data_found_Array.push(html_snippet);
            // next_ele_index_val = current_index_val;
            // window.alert("inc_2 = " + inc_2);
            // window.alert("next_ele_vals_Array[" + inc_3 + "] = " + next_ele_vals_Array[inc_3]);
            
            // window.alert("elements_searched_Array[" + next_ele_vals_Array[inc_3] + "] = " + elements_searched_Array[[next_ele_vals_Array[inc_3]]]);

            // window.alert("current_index_val = " + current_index_val);
            if (inc_2 < search_ele_nums_Array[inc]) {
              current_index_val = next_ele_index_val;

              // current_index_val = current_index_val + elements_searched_Array[next_ele_vals_Array[inc_3]].length;
            }           
            
            
            inc_3++;
            
            
            // window.alert("current_index_val = " + current_index_val);
          }
        }

        if (next_ele_index_val < current_index_val) {
          next_ele_index_val = current_index_val;
        }
      }

      // window.alert("data_found_Array = " + data_found_Array);
    }
    
    scrapeHTML();
    

  }
);
