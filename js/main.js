'use strict'

var gCanvas;
var gCtx;
var gProperties = { shape: 'circle', line: 'black', fill: 'rgb(255, 255, 255,0)'};
var gMousePressed = false;
var gLastX, gLastY;
var gLink;



function init() {
    gCanvas = document.querySelector('#mister-canvas');
    gCtx = gCanvas.getContext('2d')
    gCtx.fillStyle = "white";
    gCtx.fillRect(0, 0, gCanvas.width, gCanvas.height);
    shareFB()
}
function getShape(el) {
    gProperties.shape = el;
}




function getColor(el, key) {
    if (key === 'line') {
        gProperties.line = el;
        // console.log(el)
    } else {
        gProperties.fill = el;
    }
    // console.log(gProperties)
}


function getLineColor() {
    var elLine = document.querySelector('#color-line');
    var color = elLine.value;

}
function canvasClicked(ev) {
    gMousePressed = true;
}


function drawLine(X, Y) {


    gCtx.save()
    // gCtx.beginPath()


    gCtx.fillRect(X, Y, 2, 2);

    gCtx.fillStyle = `${gProperties.fill}`
    // gCtx.closePath()

    gCtx.stroke()
    gCtx.fill()
    gCtx.restore()
}


function drawTriangle(X, Y) {

    gCtx.save()
    gCtx.beginPath();
    gCtx.moveTo(X, Y -20);
    gCtx.lineTo(X + 20, Y + 20);
    gCtx.lineTo(X - 20, Y + 20);
    gCtx.fillStyle = `${gProperties.fill}`
    gCtx.strokeStyle = `${gProperties.line}`
    gCtx.lineWidth = 1
    gCtx.closePath()
    gCtx.stroke();
    gCtx.fill()
    gCtx.restore()
}
function drawSquare(X, Y) {
    gCtx.save()
    gCtx.beginPath();
    gCtx.moveTo(X - 20, Y - 20);
    gCtx.lineTo(X + 20, Y - 20);
    gCtx.lineTo(X + 20, Y + 20);
    gCtx.lineTo(X - 20, Y + 20);
    gCtx.fillStyle = `${gProperties.fill}`
    gCtx.strokeStyle = `${gProperties.line}`
    gCtx.lineWidth = 1
    gCtx.closePath()
    gCtx.stroke();
    gCtx.fill()
    gCtx.restore()
}

function drawCircle(X,Y) {

    gCtx.save()
    gCtx.beginPath()
    gCtx.arc(X, Y, 50, 0, 2 * Math.PI);
    gCtx.fillStyle = `${gProperties.fill}`
    gCtx.strokeStyle = `${gProperties.line}`
    gCtx.closePath()
    gCtx.lineWidth = 1
    gCtx.stroke()
    gCtx.fill()
    gCtx.restore()
}

function check(e) {
    var x = e.clientX;
    var y = e.clientY;


    // console.log(x,y)
    // document.getElementById("demo").innerHTML = coor;
  }

function draw(X,Y ,isDown){

    gCtx.save()
    gCtx.beginPath()
    gCtx.fillStyle = `${gProperties.fill}`
    gCtx.strokeStyle = `${gProperties.line}`
    gCtx.closePath()
    gCtx.lineWidth = 1
    gCtx.stroke()
    gCtx.fill()
    gCtx.restore()

}


function onMovment(ev){
    if(!gMousePressed) return;
    var X = ev.offsetX;
    var Y = ev.offsetY
    
    if(gProperties.shape === 'circle'){
        drawCircle(X,Y)
    } 
    if (gProperties.shape === 'square'){
        drawSquare(X,Y)
    }
    if(gProperties.shape === 'triangle'){
        drawTriangle(X,Y)
    }
    if(gProperties.shape === 'line'){
        drawLine(X, Y)
    }

    
}

function onStopDrew(){
    gMousePressed = false;
}
function downloadCanvas(elLink) {
    elLink.href = gCanvas.toDataURL()
    elLink.download = 'my-img.jpg'

}

(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));



