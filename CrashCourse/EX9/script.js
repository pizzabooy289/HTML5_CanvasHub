$(document).ready(function () {

    const canvas =  document.getElementById('canvas');

    const ctx = canvas.getContext('2d');


    $( "#clear" ).click(function() {

        //Quadratic Bézier Curve
            //Start Points
            $('#axisXstartPoint').val('');
            $('#axisYstartPoint').val(''); 
                
            //Control Points
            $('#axisXcontrolPoint').val('');
            $('#axisYcontrolPoint').val('');
                
            //Points
            $('#axisXpoint').val('');
            $('#axisYpoint').val('');

        //Rectangle

            //Start Points
            $('#axisX').val('');
            $('#axisY').val(''); 
                        
            //Width and Height
            $('#width').val('');
            $('#height').val('');

        //Clear Screen
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    });

    //Quadratic Bézier Curve

    var drawCurve = function(spx, spy, cpx, cpy, x, y){

        // Quadratic Bézier curve
        ctx.beginPath();
        ctx.moveTo(spx, spy);

        ctx.quadraticCurveTo(cpx, cpy, x, y);
        ctx.stroke();
    };


    $( "#submit_curve" ).click(function() {

        //Start Points
        var spx = $('#axisXstartPoint').val();
        var spy = $('#axisYstartPoint').val(); 

        //Control Points
        var cpx = $('#axisXcontrolPoint').val();
        var cpy = $('#axisYcontrolPoint').val();

        //Points
        var x = $('#axisXpoint').val();
        var y = $('#axisYpoint').val();


        drawCurve(spx, spy, cpx, cpy, x, y);
    });

    $( "#example_curve" ).click(function() {

        //Start Points
        $('#axisXstartPoint').val(50);
        $('#axisYstartPoint').val(20); 
        
        //Control Points
        $('#axisXcontrolPoint').val(230);
        $('#axisYcontrolPoint').val(30);
        
        //Points
        $('#axisXpoint').val(50);
        $('#axisYpoint').val(100);

        drawCurve(50, 20, 230, 30, 50, 100);
    });




    //Rectangle

    $( "#submit_rec" ).click(function() {

        //Start Points
        var x = $('#axisX').val();
        var y = $('#axisY').val(); 
                
        //Width and Height
        var width = $('#width').val();
        var height = $('#height').val();
        
        ctx.strokeRect(x, y, width , height);

    });


});




