<<<<<<< HEAD
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

      var inc, inc_2 = new Number();
      // Hold incrementers.

      var search_ele_nums_Array = new Array();
      // Holds the number of cycles a loop is to run for the purpose to find metadata which is similar. 

      var next_ele_vals_Array = new Array();
      // Contains the elements_searched_Array index number that matches the string to be searched for.

      elements_searched_Array = [
        "<td class=\"dcmenu\">", 
        "<a href=\"", 
        "\">",
        "</a>",
        "<img src=\"", 
        "\"",
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
        "</span>",
        "\">",
        "<td class=\"dcdate\"  width=\"120\">",
        "<div align=\"center\">",
        "<span class=\"dcmisc\">",
        " /> ",
        "</A>"
      ];
      
      search_ele_nums_Array = [0, 1, 1];

      next_ele_vals_Array = [0, 1, 2, 4];
      
      inc = 0;
      next_ele_index_val = 0;

      html_source_code = $("html").html();
      window.alert("search_ele_nums_Array.length = " + search)
      while (inc < search_ele_nums_Array.length)  {
        window.alert("elements_searched_Array[" + next_ele_vals_Array[inc] + "] = " + elements_searched_Array[next_ele_vals_Array[inc]]);
        current_index_val = html_source_code.indexOf(elements_searched_Array[next_ele_vals_Array[inc]], next_ele_index_val);
        //  window.alert("current_index_val = " + current_index_val);
        current_index_val = current_index_val + elements_searched_Array[next_ele_vals_Array[inc]].length;
        // window.alert("current_index_val = " + current_index_val);
        // window.alert("inc = " + inc);
        if (search_ele_nums_Array[inc] > 0) {
          
          for (inc_2 = inc; inc_2 <= search_ele_nums_Array[inc_2]; inc_2++)  {
            window.alert("inc = " + inc);
            window.alert("inc_2 = " + inc_2);
            window.alert("search_ele_nums_Array[" + inc + "] = " + search_ele_nums_Array[inc_2]);
            window.alert("elements_searched_Array[" + next_ele_vals_Array[inc_2 + 1] + "] = " + elements_searched_Array[next_ele_vals_Array[inc_2 + 1]]);
            // window.alert("next_ele_index_val = " + next_ele_index_val);
           /* window.alert("current_index_val = " + current_index_val);
            if (current_index_val < next_ele_index_val) {
              current_index_val = next_ele_index_val;
            }*/
            //  window.alert("current_index_val = " + current_index_val);
            next_ele_index_val = html_source_code.indexOf(elements_searched_Array[next_ele_vals_Array[inc_2 + 1]], current_index_val);
            // window.alert("next_ele_index_val = " + next_ele_index_val);

            data_found_Array.push(html_source_code.slice(current_index_val, next_ele_index_val));

            window.alert("data_found_Array[" + (data_found_Array.length - 1) + "] = " + data_found_Array[(data_found_Array.length - 1)]);
            //  window.alert("current_index_val = " + current_index_val);
            current_index_val = next_ele_index_val;
             window.alert("next_ele_index_val = " + next_ele_index_val);

          }
        }

        if (next_ele_index_val < current_index_val) {
          next_ele_index_val = current_index_val;
        }
        // window.alert("next_ele_index_val = " + next_ele_index_val);
        inc++;
      }

      
    }
    scrapeHTML();
  }
);



=======
$(document).ready(
  function () {
    function scrapeHTML() {
      var html_source_code = new String();
      // 'html_source_code' holds the board data and HTML loaded from http://board.okayplayer.com/okp.php.

      var current_index_val = new Number();
      // 'current_index_val' holds the index number representing the point in the source HTML where the 
      // <head> tag ends.

      var next_ele_index_val = new Number();
      // 'next_ele_index_val' holds the index number of the element following the current element 
      // which has just been found.

      var elements_searched_Array = new Array();
      // 'elements_searched_Array' holds HTML referencing points in the code which lies before the HTML to be scraped.

      var data_found_Array = new Array();
      // 'data_found_Array' holds the board metadata which will be inserted into an HTML template.

      var inc, inc_2 = new Number();
      // 'inc' & 'inc_2' hold incrementers.

      var search_ele_nums_Array = new Array();
      // 'search_ele_num_Array' holds the number of cycles a loop is to run for the purpose to find metadata which is similar. 

      var next_ele_vals_Array = new Array();
      // 'next_ele_vals_Array' contains the elements_searched_Array index number that matches the string to be searched for.

      elements_searched_Array = [
        "<td class=\"dcmenu\" colspan=\"2\">", 
        "<a href=\"", 
        "\">",
        "</a>",
        "<img src=\"", 
        "\"",
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
        "</span>",
        "\">",
        "<td class=\"dcdate\"  width=\"120\">",
        "<div align=\"center\">",
        "<span class=\"dcmisc\">",
        " /> ",
        "</A>"
      ];

      search_ele_nums_Array = [0, 1];

      next_ele_vals_Array = [0, 1, 2];
      
      inc = 0;
      next_ele_index_val = 0;

      html_source_code = $("html").html();

      /*window.alert("one");
      window.alert("inc = " + inc);
      window.alert("search_ele_nums_Array.length = " + search_ele_nums_Array.length);
      */
      while (inc < search_ele_nums_Array.length)  {
        current_index_val = html_source_code.indexOf(elements_searched_Array[next_ele_vals_Array[inc]], next_ele_index_val);
        
        current_index_val = current_index_val + elements_searched_Array[next_ele_vals_Array[inc]].length;


        window.alert("current_index_val = " + current_index_val);
 
        if (search_ele_nums_Array[inc] > 0) {

          for (inc_2 = 1; inc_2 <= search_ele_nums_Array[inc]; inc_2++)  {
            window.alert("current_index_val = " + current_index_val);
            window.alert("elements_searched_Array[next_ele_vals_Array[inc + inc_2]] = " + elements_searched_Array[next_ele_vals_Array[inc + inc_2]]);
            next_ele_index_val = html_source_code.indexOf(elements_searched_Array[next_ele_vals_Array[inc + inc_2]], current_index_val);
            window.alert("next_ele_index_val = " + next_ele_index_val);
            data_found_Array.push(html_source_code.slice(current_index_val, next_ele_index_val));

            window.alert("data_found_Array[0] = " + data_found_Array[0]);
          }
          
        }

        next_ele_index_val = current_index_val;

        inc++;
      }

      
    }
    scrapeHTML();
  }
);



>>>>>>> 64044a6da5551076525b1ec8362d115d92f24112
