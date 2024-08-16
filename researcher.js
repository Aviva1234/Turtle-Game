AFRAME.registerComponent("movement", {
  init:function(){
    window.addEventListener("keydown", (e) =>{
researcher_rotation = this.el.getAttribute('rotation');
if(e.key === "ArrowRight"){
    this.el.setAttribute("rotation", {
        y:90,
    });
}
else if(e.key === "ArrowLeft"){
    this.el.setAttribute("rotation",{
        y:270,
    });
}
else if(e.key === "ArrowDown"){
    this.el.setAttribute("rotation",{
        y:0,
    });
}
else if(e.key === "ArrowUp"){
    this.el.setAttribute("rotation",{y:180});
}
    });
  },
tick:function(){
    const cam = document.getElementById("camera");
    const cameraPos = cam.getAttribute("position");
    this.el.setAttribute("position",{
        x: cameraPos.x - 0,
        y: cameraPos.y - 9,
        z: cameraPos.z - 9,
    });
},
})