AFRAME.registerComponent("rulesgame",{
init:function(){
    numTurtles = 5;
    this.el.addEventListener('collide',function(e){
numTurtles--;
    });
}
});