class MySquare
{
    getArea(edge: number):number{
        return edge * edge;

    }
}

interface RectangleArea{
     calculateArea(params: {width:number; height: number}): number;
}

class MyRectangle implements RectangleArea
{
    calculateArea(params: {width:number; height: number}): number{
        return params.width * params.height;
    }
}


document.getElementById("label").innerText = new MySquare().getArea(10).toString();

document.getElementById("label").innerText = new MyRectangle().calculateArea({width: 10,height: 15}).toString();