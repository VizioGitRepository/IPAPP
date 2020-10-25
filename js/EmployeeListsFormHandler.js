/*this file contains the fetching of the add submission form, converting it into a JSON string and sending it to the db
as well as some related call backs*/



$(document).ready(function(){
   
     


    /*POST REQUEST FOR ADDING NEW EMPLOYEES*/
    const createObject=function(form){
        const arrayJSON = $('#addForms').serializeArray(); 
        return arrayJSON
    };    
    $('#addForms').submit(function(event){
        event.preventDefault();
        var data = createObject($('#addForms'));
       const object= {}
        data.forEach((element,index,array)=>{
            if (element.name=='fname'){
                object.fname=element.value
            }
            else if(element.name=='lname'){
                object.lname=element.value
            }
            else if (element.name=='select'){
                object.shift=element.value
            }
            else if (element.name=='number'){
                object.number=element.value
            }
        });
        const JSONobj=JSON.stringify(object);
        console.log(JSONobj);   
        $.ajax(
            {url:"http://localhost:8080/employeeNamesandNumbers.html/add",
            type:'post',
            contentType:"application/json",
            dataType:'json',
            data: JSONobj,
            success: function(data){
                console.log("sucesfully sent data");
                $('#addForm').fadeOut(450);
                
                setTimeout(() => {
                    $('#operationSuccessful').fadeIn(450);
                },500);
                $('#addForm').load(location.href+' #addForm>*','');
                $("#operationSuccessfulBtn").click(function(){
                    $('#operationSuccessful').fadeOut(450);
                    setTimeout(() => {
                        $('#addForm').fadeIn(450)
                    }, 500);
                    location.reload();
                })
        
            },
            error: function(err){
                console.log(err)
            }  
        })
    });
    
    
})