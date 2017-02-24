var MySquare = (function () {
    function MySquare() {
    }
    MySquare.prototype.getArea = function (edge) {
        return edge * edge;
    };
    return MySquare;
}());
var MyRectangle = (function () {
    function MyRectangle() {
    }
    MyRectangle.prototype.calculateArea = function (params) {
        return params.width * params.height;
    };
    return MyRectangle;
}());
document.getElementById("label").innerText = new MySquare().getArea(10).toString();
document.getElementById("label").innerText = new MyRectangle().calculateArea({ width: 10, height: 15 }).toString();
