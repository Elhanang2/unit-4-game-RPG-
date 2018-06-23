var a=$(".charactor1");
var b=$(".charactor2");
var c=$(".charactor3");
var d=$(".charactor4");
var x,y,z,w;
var j,k,l;
var m,n,o,p;
var f,g,h;
var chartotal;
var defendtotal;
var char=0;
var attack;
var hp1,hp2,hp3,hp4;
var h1=$(".hp1");
var h2=$(".hp2");
var h3=$(".hp3");
var h4=$(".hp4");
a.on("click",function(){
    /*b.animate({top:"200px"},"normal");*/
    movement(a,b,c,d,120);
    defender(b,c,d,100,150,180,h2,h3,h4,h1);
    randomfn();
    console.log(attack);
    
    
    
    
});

b.on("click",function(){
    movement(b,a,c,d,100);
    defender(a,c,d,120,150,180,h1,h3,h4,h2);
    randomfn();
    
});
c.on("click",function(){
    movement(c,a,b,d,150);
    defender(a,b,d,120,100,180,h1,h2,h4,h3);
    randomfn();
});
d.on("click",function(){
    movement(d,a,b,c,180);
    defender(a,b,c,120,100,150,h1,h2,h3,h4);
    randomfn();
});

/*$("#photoholder").append($(this).children("img").remove());*/
function movement(w,x,y,z,v){ 
    $(".charactor-pic").append(w.remove()),
 
    $(".enemy-pic").append(x.remove()),
 x.css({"background-color":"red","font-size":"15px","text-align":"center"}),
  $(".enemy-pic").append(y.remove()),
  y.css({"background-color":"red","font-size":"15px","text-align":"center"}),
  $(".enemy-pic").append(z.remove());
  z.css({"background-color":"red","font-size":"15px","text-align":"center"})
  chartotal=v;
return(w,x,y,z);}
function defender(j,k,l,q,r,s,f,g,h,hp){
    
    j.on("click",function(){
        $(".defender-image").append(j.remove()),
        j.css({"background-color":"black","font-size":"15px","text-align":"center","color":"white"})
        defendtotal=q;
        
        console.log(p);
        res(hp,f);
    });
    k.on("click",function(){
        $(".defender-image").append(k.remove()),
        k.css({"background-color":"black","font-size":"15px","text-align":"center","color":"white"})
        defendtotal=r;
       
        res(hp,g);
    });
    l.on("click",function(){
        $(".defender-image").append(l.remove()),
        l.css({"background-color":"black","font-size":"15px","text-align":"center","color":"white"})
        defendtotal=s;
        
        res(hp,h);
    });
    return(j,k,l,q,r,s,f,g,h,hp2,hp3,hp4);
}
$(".attack").on("click",function(){

});



function randomfn(){
    attack=Math.floor((Math.random()*5)+1)*5;
    
}
function res(m,o){
    if((chartotal>=7) && (defendtotal>=0)){
        $(".attack").on("click",function(){
            char=char+6;
            defendtotal=defendtotal-char;
            console.log(defendtotal);
             chartotal=chartotal-attack;
            console.log(chartotal);
           m.text(chartotal);
        o.text(defendtotal);
           return(m,n); 
            
        });
    }else if((chartotal<0) && (defendtotal>0)){
        $("<p>").text("you loss"); 
        console.log("you loss");
    }
    else if((chartotal>0) && (defendtotal<0)){
        $("<p>").text("you loss"); 
        console.log("you win");}
}
