var i=1;
var arr=[];
var arrr=[];
var arrc=[];
var win=0;
$(".btn").click(function() {
    var userChosenColour = $(this).attr("id");
   
    animatePress(userChosenColour);
  });
  function animatePress(currentColor) {
    if(i%2!=0){
      if(!arr.includes(currentColor)){
    $("#m" + currentColor).addClass("roundm");
    arr.push(currentColor);
    arrr.push(currentColor);
    i++;
     cheakanswer(arrr,1);
    // if(arr.length>=5)
    //   }
    }
  }
  
    // $("#n" + currentColor).addClass("roundn");
    else{
      if(!arr.includes(currentColor)){
    $("#n" + currentColor).addClass("crosn");
    $("#m" + currentColor).addClass("crosm");
    arr.push(currentColor);
    arrc.push(currentColor);
    i++;
    cheakanswer(arrc,2);
  }
}
// if(arr.length>=5)
// cheakanswer(2);
    //setTimeout(function () {
    //   $("#n" + currentColor).removeClass("round");
    // }, 100);
  }
  function cheakanswer(ar,win){
 
     if(ar.includes("r1c1")&& ar.includes("r2c2")&& ar.includes("r3c3")){
      $(".line5").addClass("linerc");
     setTimeout(function(){
       alert("Player-"+win+" win");
      },1200);
    }

     if(ar.includes("r1c1")&& ar.includes("r1c2")&& ar.includes("r1c3")){
      $(".line5").addClass("liner1");
     setTimeout(function(){
       alert("Player-"+win+" win");
      },1200);
    }
     if(ar.includes("r1c1")&& ar.includes("r2c1")&& ar.includes("r3c1")){
      $(".line5").addClass("linec1");
     setTimeout(function(){
       alert("Player-"+win+" win");
      },1200);
    }
     if(ar.includes("r2c1")&& ar.includes("r2c2")&& ar.includes("r2c3")){
      $(".line5").addClass("liner2");
     setTimeout(function(){
       alert("Player-"+win+" win");
      },1200);
    }
     if(ar.includes("r3c1")&& ar.includes("r3c2")&& ar.includes("r3c3")){
      $(".line5").addClass("liner3");
     setTimeout(function(){
       alert("Player-"+win+" win");
      },1200);
    }
     if(ar.includes("r1c3")&& ar.includes("r2c2")&& ar.includes("r3c1")){
      $(".line5").addClass("linerr");
     setTimeout(function(){
       alert("Player-"+win+" win");
      },1200);
    }
     if(ar.includes("r1c2")&& ar.includes("r2c2")&& ar.includes("r3c2")){
      $(".line5").addClass("linec2");
     setTimeout(function(){
       alert("Player-"+win+" win");
      },1200);
    }
     if(ar.includes("r1c3")&& ar.includes("r2c3")&& ar.includes("r3c3")){
      $(".line5").addClass("linec3");
     setTimeout(function(){
       alert("Player-"+win+" win");
      },1200);
    }
  }