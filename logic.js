//----------------------------------Landing Page------------------------------
$("#repeatCo").css("display", "none");
$("#reverseCo").css('display','none')

//>>>>>>>>>>>>> Adding click Listner On Repeat Btn
$("#repeatBtn").click(function () {
  $("#repeatCo").css("display", "grid");
});

//>>>>>>>>>>>>> Adding click Listner On Reverse Btn
$("#reverseBtn").click(function () {
  $("#reverseCo").css("display", "grid");
});

//------------------------------Repeat Related Content-------------------------------
//>>>>>>>>>>>>> Click Listner on CheckBoxes
$(".addspaceB").click(function () {
  $("#addSpace").addClass("checked");
});
$(".newLineB").click(function () {
  $("#addNewLine").addClass("checked");
});
$(".periodB").click(function () {
  $("#addPeriod").addClass("checked");
});

//>>>>>>>>>>>>>Adding Valiation On Repetation Number
function validation(){
  if(isNaN( $("#RepeatationNo").val())){
    $("#RepeatationNo").css("border-bottom-color","red")
  }else{
    $("#RepeatationNo").css("border-bottom-color","#033669")
  }
}

//>>>>>>>>>>>>> Adding clickListner on Repeat Button
// Functions
 function newline() {
    for (let i = 0; i < $("#RepeatationNo").val(); i++) {
        if ($("#outputTextBox").val() == "") {
          data = $("#outputTextBox").val() + $("#inputText").val();
          $("#outputTextBox").val(data);
        } else {
          data = $("#outputTextBox").val() + "\n" + $("#inputText").val();
          $("#outputTextBox").val(data);
        }
      }
 }
 function addperiod(){
    for (let i = 0; i < $("#RepeatationNo").val(); i++) {
        if ($("#outputTextBox").val() == "") {
          data = $("#outputTextBox").val() + $("#inputText").val();
          $("#outputTextBox").val(data);
        } else {
          data = $("#outputTextBox").val() + ". " + $("#inputText").val();
          $("#outputTextBox").val(data);
        }
      }
 }
$("#repeat").click(function () {
  let data;
  // addSpace && addnewline && addperiod
  $("#outputTextBox").val("");
  if ($("#addSpace").hasClass("checked") && $("#addNewLine").hasClass("checked") &&
    $("#addPeriod").hasClass("checked")) {
    for (let i = 0; i < $("#RepeatationNo").val(); i++) {
      if ($("#outputTextBox").val() == "") {
        data = $("#outputTextBox").val() + $("#inputText").val() + ".";
        $("#outputTextBox").val(data);
      } else {
        data = $("#outputTextBox").val() + "\n" + $("#inputText").val() + ".";
        $("#outputTextBox").val(data);
      }
    }
  }
  //addnewLine && AddPeriod
   else if (
    $("#addNewLine").hasClass("checked") &&
    $("#addPeriod").hasClass("checked")
  ) {
    for (let i = 0; i < $("#RepeatationNo").val(); i++) {
      if ($("#outputTextBox").val() == "") {
        data = $("#outputTextBox").val() + $("#inputText").val() + ".";
        $("#outputTextBox").val(data);
      } else {
        data = $("#outputTextBox").val() + "\n" + $("#inputText").val() + ".";
        $("#outputTextBox").val(data);
      }
    }
  }
  //newLine && addSpaces 
   else if (($("#addNewLine").hasClass("checked") && $("#addSpace").hasClass("checked"))) {
      newline();
  }
  //addSpaces && addPeriod
  else if(($("#addSpace").hasClass("checked") &&
  $("#addPeriod").hasClass("checked"))){
      addperiod();
  }
  //addSpaces
    else if ($("#addSpace").hasClass("checked")) {
    for (let i = 0; i < $("#RepeatationNo").val(); i++) {
      if ($("#outputTextBox").val() == "") {
        data = $("#outputTextBox").val() + $("#inputText").val();
        $("#outputTextBox").val(data);
      } else {
        data = $("#outputTextBox").val() + " " + $("#inputText").val();
        $("#outputTextBox").val(data);
      }
    }
  
  }
  //addNewLine
   else if ($("#addNewLine").hasClass("checked")) {
      newline();  
  } 
  //addPeriod
  else if ($("#addPeriod").hasClass("checked") ){
      addperiod();
  
  } else {
    for (let i = 0; i < $("#RepeatationNo").val(); i++) {
      data = $("#outputTextBox").val() + $("#inputText").val();
      $("#outputTextBox").val(data);
    }
  }
  $("#addSpace").removeClass("checked");
  $("#addNewLine").removeClass("checked");
  $("#addPeriod").removeClass("checked");

  $('#addSpace').prop('checked', false); 
  $('#addNewLine').prop('checked', false);
  $('#addPeriod').prop('checked', false);
});

//>>>>>>>>>>>>>adding clickListner on Clear Button
$("#clear").click(function () {
  $("#inputText").val("");
  $("#RepeatationNo").val("");
  $("#addSpace").removeClass("checked");
  $("#addNewLine").removeClass("checked");
  $("#addPeriod").removeClass("checked");

  $('#addSpace').prop('checked', false); 
  $('#addNewLine').prop('checked', false);
  $('#addPeriod').prop('checked', false);

});
//>>>>>>>>>>>>>click Listner on select Button
let text;
$("#selectOutputBtn").click(function(){
  text=$("#outputTextBox").select();
  console.log(text);
});
//>>>>>>>>>>>>>click Listner on copy Button
$("#copyBtn").click(function(){
  let output =document.querySelector("#outputTextBox");
  navigator.clipboard.writeText(output.value);
  alert("Text Copied !");
});


//>>>>>>>>>>>>>click Listner on Back Button
$("#backBtn").click(function(){
    $("#repeatCo").css('display','none');
});

//----------------------------------Reverse Related content------------------------

//>>>>>>>>>>>>>click listner on ReverseBtn
$("#revBtn").click(function () {

    let revInputVal=document.querySelector("#revInputBox").value;
    let reversedVal=revInputVal.split("").reverse().join().replace(/,/g,""); 
    $("#revOutputBox").val(reversedVal);
});
//>>>>>>>>>>>>>Click Listner on revCopy btn
$("#revCopyBtn").click(function(){
  let output =document.querySelector("#revOutputBox");
  navigator.clipboard.writeText(output.value);
  alert("Text Copied !");
});
//>>>>>>>>>>>>>Click listner  on Clear Btn
$("#revClearBtn").click(function () {
  $("#revInputBox").val("");  
});
//>>>>>>>>>>>>> click Listner on Back Button
$("#revBackBtn").click(function(){
  $("#reverseCo").css('display','none');
});
