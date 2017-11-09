////body

//affix
$('#my-affix-nav .nav a').hover(function(){
    $(this).prev().css({opacity:'1'});
},function(){
    $(this).prev().css({opacity:'0'});
});

//works
$('.works-img').hover(function(){
    var idx=$(this).index('.works-img');
    $('.works-intro').eq(idx).css({display:'block'});
},function(){
    var idx=$(this).index('.works-img');
    $('.works-intro').eq(idx).css({display:'none'});
});

//scroll down or up => moveBox

function scroll( fn ) {
    var beforeScrollTop = document.body.scrollTop,
        fn = fn || function() {};
    window.addEventListener("scroll", function() {
        var afterScrollTop = document.body.scrollTop,
            delta = afterScrollTop - beforeScrollTop;
        if( delta === 0 ) return false;
        fn( delta > 0 ? "down" : "up" );
        beforeScrollTop = afterScrollTop;
    }, false);
}
scroll(function(direction) {
    var height=parseFloat(document.body.scrollTop)+100;
    var aHeight= window.screen.availHeight;
    //console.log(direction);
    if(height<aHeight/2){//1屏
        if(direction=='down'){
            $('.box-1').addClass('active');
        }else if(direction=='up'){
            $('.box-1').removeClass('active');
        }
    }else if(height<1.5*aHeight){//2屏
        if(direction=='down'){
            $('.box-2').addClass('active');
            $('.box-3').addClass('active');
        }else if(direction=='up'){
            $('.box-2').removeClass('active');
            $('.box-3').removeClass('active');
        }
    } else if(height<2.5*aHeight){//3屏
        if(direction=='down'){
            $('.box-4').addClass('active');
        }else if(direction=='up'){
            $('.box-4').removeClass('active');
        }
    } else if(3*aHeight<height){//5屏
        if(direction=='down'){
            $('.box-5').addClass('active');
            $('.box-6').addClass('active');
        }else if(direction=='up'){
            $('.box-5').removeClass('active');
            $('.box-6').removeClass('active');
        }
    }

});
//body scroll
window.addEventListener('scroll',function(){
    var height=parseFloat(document.body.scrollTop);

    var about=$('#about').offset().top-100;
    var skillTop=$('.skills').offset().top-$('.skills').height();
    var jumb=$('.jumbotron').height()/3;

    //jumbotron
    if(height>jumb){
        $('.jumbotron-bg').removeClass('active');
    }else{
        $('.jumbotron-bg').addClass('active');
    }

//    if(height>=top){
//        //console.log('h:'+height);
//        var sum=0;
//        var t1=setInterval(function(){
//            var cur=parseFloat($('.stats-1').html());
//            if(cur>=5){
//                sum+=50;
//                clearInterval(t1);
//                if(sum==100){
//                    return;
//                }
//            }
//            cur+=1;
//            $('.stats-1').html(cur+'+');
//        },250);
//        var t2=setInterval(function(){
//            var cur=parseFloat($('.stats-2').html());
//            if(cur>=2000){
//                sum+=50;
//                console.log(sum);
//                clearInterval(t1);
//                if(sum==100){
//                    return;
//                }
//            }
//            cur+=10;
//            $('.stats-2').html(cur+'+');
//        },10);
//    }
//}
    //about-stats
    if(height>=about){
        //console.log('h:'+height);
        var t1=setInterval(function(){
            var cur=parseFloat($('.stats-1').html());
            if(cur>=5){
                clearInterval(t1);
                return;
            }
            cur+=1;
            $('.stats-1').html(cur+'+');
        },800);
        var t2=setInterval(function(){
            var cur=parseFloat($('.stats-2').html());
            if(cur>=2000){
                clearInterval(t1);
                return;
            }
            cur+=10;
            $('.stats-2').html(cur+'+');
        },100);
    }
    //skills-bar
    if(height>=skillTop){
        $('.skills-l').addClass('active');
        $('.skills-r').addClass('active');
    }else{
        $('.skills-l').removeClass('active');
        $('.skills-r').removeClass('active');
    }
});

//jumbtron
$(document).ready(function(){
    setTimeout(
        $('.jumbotron-bg').addClass('active')
    ,5000);
});

//connect-canvas
$().ready(function(){
var mousePressed=false;
var lastX, lastY;
var ctx=document.getElementById('cvs-connec').getContext("2d");
function Initthis(){
    //dran Email
    ctx.font='30px Lato';
    ctx.lineWidth='3';
    var w=$('#cvs-connec').width();
    var txt='Tel : 086-18906680940';
    var txtW=ctx.measureText(txt).width;
    var x=(w-txtW)/2;
    ctx.textBaseline='bottom';
    ctx.fillStyle='#2c3540';
    ctx.fillText(txt,x,200);

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

//movebox
$('.moveBox').css({height:$('#all').height()});
$('.moveBox').css({width:$('#all').width()});
//time
function formate(){
    var Month=['Jan','Feb','Mar','Apr','May','June','July','Aug','Sept','Oct','Nov','Dec'];
    var week=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var date=new Date();
    var M=date.getMonth();
    M=Month[M];
    var d=date.getDate();
    var w=date.getDay();
    w=week[w];
    var h=date.getHours();
    var m=date.getMinutes();
    var s=date.getSeconds();
    h<10 && (h='0'+h);
    m<10 && (m='0'+m);
    s<10 && (s='0'+s);

    $('.time-1').html(w +'  '+ M +'  '+d );
    $('.time-2').html(h +' : '+ m +' : '+s );
}
setInterval(formate,1000);

// for body scroll

$('[href="#home"]').click(function(){
    var worksH=parseFloat($('#home').offset().top);
    $("body").animate({
        scrollTop:homeH
    },1000);
});
$('[href="#works"]').click(function(){
    var worksH=parseFloat($('#works').offset().top)-100;
    $("body").animate({
        scrollTop:worksH
    },1000);
});
$('[href="#about"]').click(function(){
    var aboutH=parseFloat($('#about').offset().top)-100;
    $("body").animate({
        scrollTop:aboutH
    },1000);
});
$('[href="#connect"]').click(function(){
    var connectH=parseFloat($('#connect').offset().top)-100;
    $("body").animate({
        scrollTop:connectH
    },1000);
});


//$('[data-scroll="home"]').click(function(){
//    var homeH=parseFloat($('#home').offset().top);
//    $("body").animate({
//        //scrollTop:worksH         //让body的scrollTop等于elemId的top，就实现了滚动(65为header悬浮的高度)
//        scrollTop:homeH
//    },1000);
//});

//function scrollTo(){
//    console.log($(this.href));
//    var targetH=parseFloat($(this.href).offset().top)-100;
//    console.log(targetH);
//    $("body").animate({
//        scrollTop:targetH         //让body的scrollTop等于elemId的top，就实现了滚动(65为header悬浮的高度)
//    },1000);
//}
//$('#navbar').on('click','a',function(){
//    //console.log($('#'+$(this).html()));
//    //console.log($(this.href));
//    var target=$('#'+$(this).html());
//    console.log(target.offset());
//    var targetH=parseFloat(target.top)-100;
//    console.log(targetH);
//    //$("body").animate({
//    //    scrollTop:targetH         //让body的scrollTop等于elemId的top，就实现了滚动(65为header悬浮的高度)
//    //},1000);
//});