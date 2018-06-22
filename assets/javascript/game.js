var a=$(".charactor1");
var b=$(".charactor2");
var c=$(".charactor3");
var d=$(".charactor4");
var x,y,z,w;
var j,k,l;
var ran;
var char=6;
a.on("click",function(){
    /*b.animate({top:"200px"},"normal");*/
    movement(a,b,c,d);
    defender(b,c,d);
});

b.on("click",function(){
    movement(b,a,c,d);
    defender(a,c,d)
    
});
c.on("click",function(){
    movement(c,a,b,d);
    defender(a,b,d)
});
d.on("click",function(){
    movement(d,a,b,c);
    defender(a,b,c)
});

/*$("#photoholder").append($(this).children("img").remove());*/
function movement(w,x,y,z){ 
    $(".charactor-pic").append(w.remove()),
 
    $(".enemy-pic").append(x.remove()),
 x.css({"background-color":"red","font-size":"15px","text-align":"center"}),
  $(".enemy-pic").append(y.remove()),
  y.css({"background-color":"red","font-size":"15px","text-align":"center"}),
  $(".enemy-pic").append(z.remove());
  z.css({"background-color":"red","font-size":"15px","text-align":"center"})
return(w,x,y,z);}
function defender(j,k,l){
    
    j.on("click",function(){
        $(".defender-image").append(j.remove()),
        j.css({"background-color":"black","font-size":"15px","text-align":"center","color":"white"})
    });
    k.on("click",function(){
        $(".defender-image").append(k.remove()),
        k.css({"background-color":"black","font-size":"15px","text-align":"center","color":"white"})
    });
    l.on("click",function(){
        $(".defender-image").append(l.remove()),
        l.css({"background-color":"black","font-size":"15px","text-align":"center","color":"white"})
    });
    return(j,k,l);
}
$(".attack").on("click",function(){

});
randomfn();
$(".attack").on("click",function(){
    char=char+6;
    $(".charactor-title").p.text(x-ran)
    $(".defender").p.text(x-ran);

});

function randomfn(){
    ran=Math.floor((Math.random()*5)+1)*5;
    
}