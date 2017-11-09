$().ready(function(){
    var mousePressed=false;
    var lastX, lastY;
    var ctx=document.getElementById('cvs-connec').getContext("2d");
    function Initthis(){
        $('#cvs-connec').mousedown(function(e){
            mousePressed = true;
            Draw(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, false);
        });

        $('#cvs-connec').mousemove(function (e) {
            if (mousePressed) {
                Draw(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, true);
            }
        });

        $('#cvs-connec').mouseup(function(){
            mousePressed=false;
        });

        $('#cvs-connec').mouseleave(function(){
            mousePressed=false;
        });
    }
    $('#lineWidth').on('click','li',function(){
        ctx.lineWidth=$(this).html();
    });
//draw

    function Draw(x,y,isDown){
        //var lastX=x;
        //var lastY=y;
        if(isDown){
            ctx.beginPath();
            ctx.strokeStyle=$('#lineColor').val();
            ctx.lineJoin='round';
            ctx.moveTo(lastX,lastY);
            ctx.lineTo(x,y);
            ctx.closePath();
            ctx.stroke();
        }
        lastX = x; lastY = y;
    }

    $('#clear').click(function claerArea(){
        console.log(1);
        ctx.setTransform(1,0,0,1,0,0);
        ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
    });

    $('#fill').change(function(){
        $('#cvs-connec').css({'background-color':$('#fill').val()});
    });
    Initthis();
});