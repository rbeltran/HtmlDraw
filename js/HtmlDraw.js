$(document).ready(function() {
        var draw= false;
       
        var canvas = document.getElementById("can");
        var ctx = canvas.getContext("2d");
        ctx.strokeStyle = 'black';

        //set it true on mousedown
        $("#can").mousedown(function(){draw=true;});

        //reset it on mouseup
        $("#can").mouseup(function(){draw=false;});

        $("#can").mousemove(function(e) {
            if(draw==true){
                    ctx.lineWidth = 5;
                    ctx.lineCap = "round";
                    ctx.beginPath();
                    ctx.moveTo(e.pageX,e.pageY);
                    ctx.lineTo(e.pageX+1,e.pageY+1);
                    ctx.stroke();
            }    
       });

        
       //code for color pallete
        $("#clr > div").click(
        function(){
               ctx.strokeStyle = $(this).css("background-color");
        });
     
        //Eraser
        $("#eraser").click(function(){
        ctx.strokeStyle = '#fff';
        });

        //Code for save the image
        $("#save").click(function(){ 
            $("#result").append("<br /><br /><img src="+

            canvas.toDataURL()+ 

           " /><br /><a href="+canvas.toDataURL()+ 

           " target='_blank'>show</a>");
        });
     
        //Clear 
        $("#clear").click(function(){
                 ctx.fillStyle = "#fff";
                 ctx.fillRect(0, 0, canvas.width, canvas.height);
                 ctx.strokeStyle = "red";
                 ctx.fillStyle = "red";
            }
            );
		$("rect").click( function() {
			ctx.beginPath();
			ctx.rect( 0,0, 200, 100 );
			ctx.lineWidth = 5;
			ctx.strokeStyle = "black";
			ctx.stroke();
		} );
});