var a=$(".charactor1");
var b=$(".charactor2");
var c=$(".charactor3");
var d=$(".charactor4");
var x,y,z;
/*var w=$(".charactorp1");
var x=$(".charactorp2");
var y=$(".charactorp3");
var z=$(".charactorp4");
var i=$(".charactord1");
var j=$(".charactord2");
var k=$(".charactord3");
var l=$(".charactord4");*/

/*for(var  i=0;i<1; i++){
    a.click(function(){
    b.hide(),
    c.hide(),
    d.hide(),
  x.show(),
  y.show(),
  z.show();
    
});}
x.click(function(){
    x.hide(),j.show()
});*/

a.on("click",function(){
    /*b.animate({top:"200px"},"normal");*/
    movement(b,c,d);
  
});
b.on("click",function(){
    movement(a,c,d);
});
c.on("click",function(){
    movement(a,b,d);
});
d.on("click",function(){
    movement(a,b,c);
});

/*$("#photoholder").append($(this).children("img").remove());*/
function movement(x,y,z){  
    $(".charactor-pic").append(x.remove()),
 x.css({"background-color":"red","font-size":"15px","text-align":"center"}),
  $(".charactor-pic").append(y.remove()),
  y.css({"background-color":"red","font-size":"15px","text-align":"center"}),
  $(".charactor-pic").append(z.remove());
  z.css({"background-color":"red","font-size":"15px","text-align":"center"})
return(x,y,z);}