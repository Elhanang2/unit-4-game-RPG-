
var char1=$(".charactor1");
var char2=$(".charactor2");
var char3=$(".charactor3");
var char4=$(".charactor4");
var enemy1,enemy2,enemy3,fighter;
var defender1,k,l;
var defender1,defender2,defender3;
var defendtot;
var chartotal;
var defendtotal;
var defendtotaldisplay;
var chartotaldisplay;
var nameValue;
var char=0;
var attack;
var hp1,hp2,hp3,hp4;
var hp1=$(".hp1");
var hp2=$(".hp2");
var hp3=$(".hp3");
var hp4=$(".hp4");
play();
function play(){
char1.on("click",function(){
    /*b.animate({top:"200px"},"normal");*/
    movetoplayingarea(char1,char2,char3,char4,120);
    chartotal=120;
    chartotaldisplay=hp1;
    randomfn();
    defender(char2,char3,char4,100,150,180,hp2,hp3,hp4);
    
    console.log(attack);
    
    console.log(chartotal);
    console.log("hi result");   
});

char2.on("click",function(){
    movetoplayingarea(char2,char1,char3,char4,100);
    chartotal=100;
    chartotaldisplay=hp2;
    randomfn();
    defender(char1,char3,char4,120,150,180,hp1,hp3,hp4);
    
    console.log(attack);
    result(chartotal,defendtotal,hp2,defendtotaldisplay);
    
     
        
});
char3.on("click",function(){
    movetoplayingarea(char3,char1,char2,char4,150);
    chartotal=150;
    chartotaldisplay=hp3;
    randomfn();
    defender(char1,char2,char4,120,100,180,hp1,hp2,hp4);
    
    console.log(attack);
    result(chartotal,defendtotal,hp3,defendtotaldisplay);
});
char4.on("click",function(){
    movetoplayingarea(char4,char1,char2,char3,180);
    chartotal=180;
    chartotaldisplay=hp4;
    randomfn();
    defender(char1,char2,char3,120,100,150,hp1,hp2,hp3);
    
    console.log(attack);
     
    
});
}
/*$("#photoholder").append($(this).children("img").remove());*/
function movetoplayingarea(fighter,enemy1,enemy2,enemy3,chartotal){ 
    $(".charactor-pic").append(fighter.remove()),
    chartotal;
    $(".enemy-pic").append(enemy1.remove()),
enemy1.css({"background-color":"red","font-size":"15px","text-align":"center"}),
  $(".enemy-pic").append(enemy2.remove()),
 enemy2.css({"background-color":"red","font-size":"15px","text-align":"center"}),
  $(".enemy-pic").append(enemy3.remove());
  enemy3.css({"background-color":"red","font-size":"15px","text-align":"center"})
  
return(fighter,enemy1,enemy2,enemy3,chartotal);
}

function defender(defender1,defender2,defender3,defender1total,defender2total,defender3total,h1,h2,h3){
    
    defender1.on("click",function(){
        $(".defender-image").append(defender1.remove()),
        defender1.css({"background-color":"black","font-size":"15px","text-align":"center","color":"white"})
        defendtotal=defender1total;
        defendtotaldisplay=h1;
        console.log("defendtotal"+defendtotal);
        console.log(defendtotaldisplay);
        console.log("defender name"+defender1.name);
        result(chartotal,defendtotal,defendtotaldisplay);
       
    });
   defender2.on("click",function(){
        $(".defender-image").append(defender2.remove()),
        defender2.css({"background-color":"black","font-size":"15px","text-align":"center","color":"white"})
        defendtotal=defender2total;
       defendtotaldisplay=h2;
       console.log(defendtotal);
       console.log(defendtotaldisplay);
       result(chartotal,defendtotal,defendtotaldisplay);
       
    });
    defender3.on("click",function(){
        $(".defender-image").append(defender3.remove()),
        defender3.css({"background-color":"black","font-size":"15px","text-align":"center","color":"white"})
        defendtotal=defender3total;
        defendtotaldisplay=h3;
        console.log(defendtotal);
        console.log(defendtotaldisplay)
        result(chartotal,defendtotal,defendtotaldisplay);
        
    });
    return(defender1,defender2,defender3,defender1total,defender2total,defender3total,h1,h2,h3);
}


function randomfn(){
    attack=Math.floor((Math.random()*5)+1)*5;
    
}
function result(chartotal,defendtotal,defendtotaldisplay){
    $(".attack").on("click",function(){
        console.log("after attack defend total "+defendtotal);
        console.log("char total"+chartotal);
        console.log("chaar total display"+chartotaldisplay);
        console.log("defend total display"+defendtotaldisplay)
    if((chartotal>0) && (defendtotal>0)){
        
            char=char+6;
            defendtotal=defendtotal-char;
            console.log(defendtotal);
             chartotal=chartotal-attack;
            console.log(chartotal);
           chartotaldisplay.text(chartotal);
       defendtotaldisplay.text(defendtotal);
       nameValue = $('.defender-image  .name').attr('name');
       console.log(";name value"+nameValue);
       
     
      $(".result1").html("you attacked "+ nameValue + "for  "+char +"  damage."+"<br>"+
      nameValue+" attacked you back for  "+attack +"  damage."); 
      $(".result").text(); 
           
            
        
    }
    else if((chartotal<0) && (defendtotal>0)){
       // $(".result").text("you attached"+ +"for"++"damage"); 
        console.log("you loss");
        $(" <button>").text("result");
    }
     else if((chartotal>=0) && (defendtotal<0)){
        $(".result").html("you defeted "+ nameValue + ", you can choose to fight another eneemy"); 
        $(".defender-image ").remove();
        defender(defender1,defender2,defender3,defender1total,defender2total,defender3total,h1,h2,h3);
        $(".defender-image ").show();
        ;}
              
    });
    return(chartotal,defendtotal,defendtotaldisplay); 
}
function reset(){

}