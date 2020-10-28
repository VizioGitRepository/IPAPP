

/* this file contains functions related to aesthetics
*/
$(document).ready(function(){

   //toggle add form, remove edit form
    $("#addBtn").click(function(){
        $('#editForm').fadeOut(5);
        editform=-1;
        $('#addForm').fadeToggle(450);
        scroll();
        addform +=1
        toggleHeight(addform,editform)
        //reset editform variable
        editform=0
    });

    //toggle edit form, remove add form
    $('.editorbtn').click(function(){
        $('#addForm').fadeOut(5);
        addform=-1;
        $("#editForm").fadeToggle(450);
        scroll();
        editform +=1
        toggleHeight(addform,editform)
        //reset addform variable 
        addform=0
    })

    //smooth scrolling to forms
    function scroll(){
        window.scrollTo({
            top:750,
            behavior:'smooth',
        })
    }

    //height toggler to ensure navbar continues to extend past content even after the forms are closed
    function toggleHeight(count1,count2){
        // check to see if addform variable or editform variable are even
        if (count1%2==0 ||count2%2==0){
            setTimeout( function(){$('body').css('height',equal)},500)         
        }
        //else increase height
        else{
         var addH =parseInt($('#mainInfo').css('height'))-parseInt($('body').css('height'))
         var height =parseInt($('body').css('height'))
         var equals =addH+height+150+'px'
         console.log(equals)
         $('body').css('height',equals)
        }
    }

    //make the navbar extends past all content on load
    var addform=0
    var editform=0
    var tBodyHeight= parseInt($('#table').css('height'))
    var height =parseInt($('body').css('height'))
    var equal =height+250+'px'
    console.log(equal)
    $('body').css('height',equal)
    
})