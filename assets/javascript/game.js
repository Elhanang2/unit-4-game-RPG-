var a=$(".charactor1");
var b=$(".charactor2");
var c=$(".charactor3");
var d=$(".charactor4");
var x,y,z,w;


a.on("click",function(){
    /*b.animate({top:"200px"},"normal");*/
    movement(a,b,c,d);
    b.on("click",function(){
        $(".defender-image").append(b.remove()),
        b.css({"background-color":"black","font-size":"15px","text-align":"center","color":"white"})
    });
    c.on("click",function(){
        $(".defender-image").append(c.remove()),
        c.css({"background-color":"black","font-size":"15px","text-align":"center","color":"white"})
    });
    d.on("click",function(){
        $(".defender-image").append(d.remove()),
        d.css({"background-color":"black","font-size":"15px","text-align":"center","color":"white"})
    });
  
});

b.on("click",function(){
    movement(b,a,c,d);
    a.on("click",function(){
        $(".defender-image").append(a.remove()),
        a.css({"background-color":"black","font-size":"15px","text-align":"center","color":"white"})
    });
    c.on("click",function(){
        $(".defender-image").append(c.remove()),
        c.css({"background-color":"black","font-size":"15px","text-align":"center","color":"white"})
    });
    d.on("click",function(){
        $(".defender-image").append(d.remove()),
        d.css({"background-color":"black","font-size":"15px","text-align":"center","color":"white"})
    });
});
c.on("click",function(){
    movement(c,a,b,d);
    a.on("click",function(){
        $(".defender-image").append(a.remove()),
        a.css({"background-color":"black","font-size":"15px","text-align":"center","color":"white"})
    });
    b.on("click",function(){
        $(".defender-image").append(b.remove()),
        b.css({"background-color":"black","font-size":"15px","text-align":"center","color":"white"})
    });
    d.on("click",function(){
        $(".defender-image").append(d.remove()),
        d.css({"background-color":"black","font-size":"15px","text-align":"center","color":"white"})
    });
});
d.on("click",function(){
    movement(d,a,b,c);
    a.on("click",function(){
        $(".defender-image").append(a.remove()),
        a.css({"background-color":"black","font-size":"15px","text-align":"center","color":"white"})
    });
    b.on("click",function(){
        $(".defender-image").append(b.remove()),
        b.css({"background-color":"black","font-size":"15px","text-align":"center","color":"white"})
    });
    c.on("click",function(){
        $(".defender-image").append(c.remove()),
        c.css({"background-color":"black","font-size":"15px","text-align":"center","color":"white"})
    });
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