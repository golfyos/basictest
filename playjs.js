window.addEventListener("load", function(){
    setRect();
    
    var buttonColor = document.getElementById("color").addEventListener("click",changeColor);
    // buttonColor.onclick = changeColor;
    var buttonMove = document.getElementById("move").addEventListener("click",moveRect);


});

function setRect(){
    var bigRect = document.getElementById("rectanglearea");
     bigRect.addEventListener("mousemove",getPos);
    for(var i=0;i<60;i++){
        var rect = document.createElement("div");
        rect.classList.add("rectangle");
        rect.addEventListener("drag",dragRect);
       
        bigRect.appendChild(rect);
        
    }

}

function changeColor(){
    var allRect = document.querySelectorAll("#rectanglearea .rectangle");
    for (var i=0;i<allRect.length;i++){
        var rand1 = Math.round(Math.random()*256);
        var rand2 = Math.round(Math.random()*256);
        var rand3 = Math.round(Math.random()*256);
        allRect[i].style.backgroundColor = "rgb("+rand1+","+rand2+","+rand3+")";
    }
}

function moveRect(){
    var rect = document.querySelectorAll("#rectanglearea .rectangle");
    //var boundWidth = document.getElementById("rectanglearea");
    //var boundHeight = document.getElementById("rectanglearea").style.getPropertyValue("height");
    

    //if(rect.length>0){
        //var height = rect[0].style.getPropertyValue("height");
        //var width = rect[0].style.getPropertyValue("width");
    //}
    

    for(var i=0;i<rect.length;i++){
        var top = Math.round(Math.random()*450);
        var left = Math.round(Math.random()*650);
        rect[i].style.position = "absolute";
        rect[i].style.top = top +"px";
        rect[i].style.left = left +"px";
    }
}

var x,y;

function dragRect(event){
    
    //var temp = parseInt(this.style.top);
    
    
    this.style.top = y+"px";
    this.style.left = x+"px";
}

function getPos(event){
    
    x = event.offsetX;
    y = event.offsetY;
    console.log(x);
}