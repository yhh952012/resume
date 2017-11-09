$('.moveBox').css({height:$('#all').height()});
$('.moveBox').css({width:$('#all').width()});
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
    var height=parseFloat(document.body.scrollTop);
    var aHeight= window.screen.availHeight;
    //console.log(direction);
    if(height<aHeight/2){//1фа
        if(direction=='down'){
            $('.box-1').addClass('active');
            $('.box-4').addClass('active');
        }else if(direction=='up'){
            $('.box-1').removeClass('active');
            $('.box-4').removeClass('active');
        }
    }
});
