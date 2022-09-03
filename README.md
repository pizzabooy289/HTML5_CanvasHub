# HTML5_CanvasHub

# HTML5_Canvas_Sandbox

## NOTES 

* **x** - The x-axis (horizontal) coordinate of the point.
* **y** - The y-axis (vertical) coordinate of the point.           
* **cpx** - The x-axis coordinate of the control point.
* **cpy** - The y-axis coordinate of the control point.


## CrashCourse
* [HTML5 Canvas API Crash Course - Traversy Media](https://www.youtube.com/watch?v=gm1QtePAYTM)

# CrashCourse Examples   
  
## EX1 (5:19)

* **fillStyle** - property of the Canvas 2D API specifies the color, gradient, or pattern to use inside shapes. The default style is #000 (black).      

* **fillRect(x, y, width, height)** - method of the Canvas 2D API draws a rectangle that is filled according to the current fillStyle. 

<img src="https://github.com/pizzabooy289/HTML_GraphicsDocs/blob/main/images/ex1.png" alt="Example 1" height="100" width="200">

[EXAMPLE](https://pizzabooy289.github.io/HTML5_CanvasHub/CrashCourse/EX1/index.html)

## EX2 (6:09)

* **lineWidth** -property of the Canvas 2D API sets the thickness of lines.    
* **strokeStyle** - property of the Canvas 2D API specifies the color, gradient, or pattern to use for the strokes (outlines) around shapes. The default is #000 (black).     
* **strokeRect(x, y, width, height)**  - method draws a rectangle (no fill). The default color of the stroke is black.    

<img src="https://github.com/pizzabooy289/HTML_GraphicsDocs/blob/main/images/ex2.png" alt="Example 2" height="100" width="200">

[EXAMPLE](https://pizzabooy289.github.io/HTML5_CanvasHub/CrashCourse/EX2/index.html)

## EX3 (7:36)   

* **clearRect(x, y, width, height)** -  method of the Canvas 2D API erases the pixels in a rectangular area by setting them to transparent black.

<img src="https://github.com/pizzabooy289/HTML_GraphicsDocs/blob/main/images/ex3.png" alt="Example 3" height="100" width="200">

[EXAMPLE](https://pizzabooy289.github.io/HTML5_CanvasHub/CrashCourse/EX3/index.html)


## EX4 (8:00)   

* **font** -  set size and font family.     

* **fillText(text, x, y, maxWidth)** - draws a text string at the specified coordinates, filling the string's characters with the current fillStyle. An optional parameter allows specifying a maximum width for the rendered text.

<img src="https://github.com/pizzabooy289/HTML_GraphicsDocs/blob/main/images/ex4.png" alt="Example 4" height="100" width="200">

[EXAMPLE](https://pizzabooy289.github.io/HTML5_CanvasHub/CrashCourse/EX4/index.html)

## EX5 (8:56)      

* **lineWidth** -  Line width of text
* **strokeStyle**  -  set color   
* **strokeText(text, x, y, maxWidth)** -  strokes — that is, draws the outlines of — the characters of a text string at the specified coordinates. An optional parameter allows specifying a maximum width for the rendered text     

<img src="https://github.com/pizzabooy289/HTML_GraphicsDocs/blob/main/images/ex5.png" alt="Example 5" height="100" width="200">

[EXAMPLE](https://pizzabooy289.github.io/HTML5_CanvasHub/CrashCourse/EX5/index.html)

## EX6 (9:43)  

* **beginPath()** -  starts a new path by emptying the list of sub-paths. Call this method when you want to create a new path.
* **moveTo(x, y)** - begins a new sub-path at the point specified by the given (x, y) coordinates 
* **lineTo(x, y)** -  adds a straight line to the current sub-path by connecting the sub-path's last point to the specified (x, y) coordinates.
* **closePath()** -   add a straight line from the current point to the start of the current sub-path. If the shape has already been closed or has only one point, this function does nothing.

* **fillStyle** - specifies the color, gradient, or pattern to use inside shapes. The default style is #000 (black). 
* **fill()** -  fills the current or given path with the current fillStyle.

<img src="https://github.com/pizzabooy289/HTML_GraphicsDocs/blob/main/images/ex6.png" alt="Example 6" height="100" width="200">

[EXAMPLE](https://pizzabooy289.github.io/HTML5_CanvasHub/CrashCourse/EX6/index.html)

## EX7 (16:20)  

* **beginPath()** -  starts a new path by emptying the list of sub-paths. Call this method when you want to create a new path.


* **arc(x, y, radius, startAngle, endAngle, counterclockwise)** -  adds a circular arc to the current sub-path.The arc() method creates a circular arc centered at (x, y) with a radius of radius. The path starts at startAngle, ends at endAngle, and travels in the direction given by counterclockwise (defaulting to clockwise).

* **stroke()** -  method of the Canvas 2D API strokes (outlines) the current or given path with the current stroke style. Strokes are aligned to the center of a path; in other words, half of the stroke is drawn on the inner side, and half on the outer side.

<img src="https://github.com/pizzabooy289/HTML_GraphicsDocs/blob/main/images/ex7.png" alt="Example 7" height="100" width="200">

[EXAMPLE](https://pizzabooy289.github.io/HTML5_CanvasHub/CrashCourse/EX7/index.html)

## EX8 (21:31)  

Half Circle

<img src="https://github.com/pizzabooy289/HTML_GraphicsDocs/blob/main/images/ex8.png" alt="Example 8" height="100" width="200">

[EXAMPLE](https://pizzabooy289.github.io/HTML5_CanvasHub/CrashCourse/EX8/index.html)


## EX9 (27:09)    

Quadratic Bézier curve   


* **quadraticCurveTo(cpx, cpy, x, y)** - method of the Canvas 2D API adds a quadratic Bézier curve to the current sub-path. It requires two points: the first one is a control point and the second one is the end point. The starting point is the latest point in the current path, which can be changed using moveTo() before creating the quadratic Bézier curve.  

[EXAMPLE](https://pizzabooy289.github.io/HTML5_CanvasHub/CrashCourse/EX9/index.html)


## EX10 (29:23) 

Purple circle moving across the srceen. 

```javascript
    //Changing the x position the the circle
    circle.x += circle.dx;
```

[EXAMPLE](https://pizzabooy289.github.io/HTML5_CanvasHub/CrashCourse/EX10/index.html)

## EX11 (34:52)

The purple circle moves down and across the screen.   

```javascript
    //Changing the x and y and position the the circle
    circle.x += circle.dx;
    circle.y += circle.dy;
``` 

[EXAMPLE](https://pizzabooy289.github.io/HTML5_CanvasHub/CrashCourse/EX11/index.html)

## EX12 (35:33)

Collision detection. The ball bounus off the right side of the canvas. 

```javascript
    //Detect side walls
    if( circle.x + circle.size > canvas.width ){

        circle.dx*=-1;
    }
```  

[EXAMPLE](https://pizzabooy289.github.io/HTML5_CanvasHub/CrashCourse/EX12/index.html)

## EX13 (38:55)

Collision detection. The ball bounus off the top and bottom of the canvas. 

```javascript
    if( circle.y + circle.size > canvas.height || circle.y + circle.size < 0){

        circle.dy*=-1;
    }
```  

[EXAMPLE](https://pizzabooy289.github.io/HTML5_CanvasHub/CrashCourse/EX13/index.html)


## EX14 (42:50)

Bring in player picture (char.pgn). If hit the arrow keys the player moves. 

### index.html
```html
<img src="char.png" alt="" id="source">
```
### script.css

```css
#source{
    display: none;
}
```

[EXAMPLE](https://pizzabooy289.github.io/HTML5_CanvasHub/CrashCourse/EX14/index.html)
