'use strict'

var gCanvas;
var gCtx;
var gProperties = {
    Line: document.querySelector('#color-line').value,
    Fill: document.querySelector('#color-fill').value,
    shapes: document.querySelector('#shapes').value
};

function init() {
    gCanvas = document.querySelector('#mister-canvas');
    gCtx = gCanvas.getContext('2d')
}


function canvasClicked(ev) {
    console.log(gProperties.shapes);

    switch (gProperties.shapes) {

        case square:
            drawCircle(ev.offsetX, ev.offsetY);
            break;

        case circle:
            drawSquare(ev.offsetX, ev.offsetY);
            break;

        case triangle:
            drawTriangle(ev.offsetX, ev.offsetY);
            break;

        default:
            drawLine(ev.offsetX, ev.offsetY);
            break;
    }

}


function drawLine(X, Y) {
    gCtx.save()
    gCtx.beginPath();
    gCtx.moveTo(X, Y);

}


function drawTriangle(X, Y) {
    gCtx.save()
    gCtx.beginPath();
    gCtx.moveTo(X, Y - 20);
    gCtx.lineTo(X + 20, Y + 20);
    gCtx.lineTo(X - 20, Y + 20);
    gCtx.fillStyle = `${gColor.Fill}`
    gCtx.strokeStyle = `${gColor.Line}`
    gCtx.lineWidth = 10
    gCtx.closePath()
    gCtx.stroke();
    gCtx.fill()
    gCtx.restore()
}
function drawSquare() {
    gCtx.save()
    gCtx.beginPath();
    gCtx.moveTo(X - 20, Y - 20);
    gCtx.lineTo(X + 20, Y - 20);
    gCtx.lineTo(X + 20, Y + 20);
    gCtx.lineTo(X - 20, Y + 20);
    gCtx.fillStyle = `${gColor.Fill}`
    gCtx.strokeStyle = `${gColor.Line}`
    gCtx.lineWidth = 10
    gCtx.closePath()
    gCtx.stroke();
    gCtx.fill()
    gCtx.restore()
}

function drawCircle() {
    gCtx.save()
    gCtx.beginPath()
    gCtx.arc(100, 300, 50, 0, 2 * Math.PI);
    gCtx.fillStyle = `${gColor.Fill}`
    gCtx.strokeStyle = `${gColor.Line}`
    gCtx.closePath()
    gCtx.stroke()
    gCtx.fill()
    gCtx.restore()
}