'use strict'

var gCanvas;
var gCtx;
var gProperties = { shape: 'circle', line: 'black', fill: 'white'};



function init() {
    gCanvas = document.querySelector('#mister-canvas');
    gCtx = gCanvas.getContext('2d')
}
function getShape(el) {
    gProperties.shape = el;
}




function getColor(el, key) {
    if (key === 'line') {
        gProperties.line = el;
        console.log(el)
    } else {
        gProperties.fill = el;
    }
    console.log(gProperties)
}


function getLineColor() {
    var elLine = document.querySelector('#color-line');
    var color = elLine.value;
    console.log(color)
}
function canvasClicked(ev) {
    console.log(gProperties.shape);

    switch (gProperties.shape) {

        case "square":
            drawSquare(ev.offsetX, ev.offsetY);

            break;

        case "circle":
            drawCircle(ev.offsetX, ev.offsetY);


            break;

        case "triangle":
            drawTriangle(ev.offsetX, ev.offsetY);
            break;

        default:
            drawLine(ev.offsetX, ev.offsetY);
            break;
    }

}


function drawLine(X, Y) {


}


function drawTriangle(X, Y) {
    console.log(gProperties.fill)
    gCtx.save()
    gCtx.beginPath();
    gCtx.moveTo(X, Y - 20);
    gCtx.lineTo(X + 20, Y + 20);
    gCtx.lineTo(X - 20, Y + 20);
    gCtx.fillStyle = `${gProperties.fill}`
    gCtx.strokeStyle = `${gProperties.line}`
    gCtx.lineWidth = 10
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

    gCtx.lineWidth = 10
    gCtx.closePath()
    gCtx.stroke();
    gCtx.fill()
    gCtx.restore()
}

function drawCircle(X,Y) {
    gCtx.save()
    gCtx.beginPath()
    // gCtx.moveTo(X, Y);

    gCtx.arc(X, Y, 50, 0, 2 * Math.PI);

    gCtx.fillStyle = `${gProperties.fill}`
    gCtx.strokeStyle = `${gProperties.line}`
    gCtx.closePath()
    gCtx.lineWidth = 10

    gCtx.stroke()
    gCtx.fill()
    gCtx.restore()
}