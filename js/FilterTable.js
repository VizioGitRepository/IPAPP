function filterTables(){
//define variables 
    var input = document.getElementById('searchInput').value.toUpperCase()
    console.log("input:"+" "+input)
    let table= document.getElementById('tbody')
    let tr = table.getElementsByTagName('tr')
    var td
    var td2
    
    //loop through rows
        for(let i=0;i<tr.length;i++){
            td = tr[i].getElementsByTagName("td")[1];
            td2=tr[i].getElementsByTagName('td')[2];
            td3=tr[i].getElementsByTagName('td')[3];
    
            //test to see if cell has text
                if(td){
                    var textVal= td.innerHTML.toUpperCase()
                    var textVal2= td2.innerHTML.toUpperCase()
                    var textVal3=td3.innerHTML.toUpperCase()
                    //test the text in uppercase to the input text
                    if(textVal.indexOf(input)>-1){
                        console.log("lname")
                        tr[i].style.display=''
                    }
                    else if(textVal2.indexOf(input)>-1){
                        console.log('fname')
                        tr[i].style.display=''
                    }
                    else if(textVal3.indexOf(input)>-1){
                        tr[i].style.display=''
                    }
                
                    else{
                    console.log("no")
                    tr[i].style.display='none'
                }
            }
        }       
    }
       
function filterTablesShift(){
    var selector =document.getElementById('shiftSelect');
    table= document.getElementById('tbody');
    let tr= table.getElementsByTagName('tr');
    let td
    /* i have to compare the value of selector with the value of shift in table */
    for(let i=0; i<tr.length;i++){
        td= tr[i].getElementsByTagName('td')[0];   
        console.log(selector.value)
        
        if (selector.value=='0'){
            tr[i].style.display=' '
        }
       
        else if (td.innerHTML.indexOf(selector.value)>-1){
                tr[i].style.display=''
            } 
        else{
            tr[i].style.display='none'
        }   
    }
}    
