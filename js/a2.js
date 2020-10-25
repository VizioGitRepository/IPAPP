$(document).ready(function(){
   
  $("#addRow").click(function(bodyHeight){
    var rowMarkup ="<tr><td scope='row'><input type='text' id  ='firstname'></input></td><td><input type='text' id ='lastname' ></input></td><td><input type='text' id ='monday' ></input></td><td><input type='text' id ='tuesday' ></input></td><td><input type='text' id= 'wednesday' ></input></td><td><input type='text' id ='thursday' ></input></td><td><input type='text' id ='friday' ></input></td><td><input type='text' id ='saturday' ></input></td><td><input type='text' id ='sunday' ></input></td><td><input type='text' id ='totalhrs' ></input></td></tr>";
    $("table>tbody").append(rowMarkup);
    });
    
  $("#removeRow").click(function removingRow(){
    var numTables = $("table>tbody>tr").length;
      if (numTables==1){
        return console.log("no rows to delete")
        }
      else {
        $("table>tbody>tr:last-child").remove();
      };
    });
  var submit = $("#submitButton").click(function(){
    var cellValuesArray= [];
    const tableSubmission = {};

  $("#mainTable>tbody>tr>td").each(function(j){
    $(this).find("input").each(function(i){
      var cellValues= $(this).val();
      cellValuesArray.push(cellValues);
      });
      return cellValuesArray; 
      });
      console.log(cellValuesArray);
      });
    
    });
    