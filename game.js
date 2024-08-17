AFRAME.registerComponent("rulesgame",{
init:function(){
    numTurtles = 5;
    this.el.addEventListener('collide',function(e){
numTurtles--;
oldNumber = document.getElementById("numTurtles");
oldNumber.setAttribute("text", {value: String(numTurtles)});
e.detail.target.el.remove();
winMessage = document.getElementById("winMessage");
if (numTurtles == 0){
winMessage.setAttribute("text", {value: "Yay!\nYou Win"})
}
    });
}
});