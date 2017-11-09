particle_no = 25;

window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame || 
    window.webkitRequestAnimationFrame || 
    window.mozRequestAnimationFrame    || 
    window.oRequestAnimationFrame      || 
    window.msRequestAnimationFrame     ||  
    function( callback ){
    window.setTimeout(callback, 1000 / 60);
  };
})();

//skills array

skillsbar({i:0,score:240});
function skillsbar(){
  var skills=['HTML','CSS3','JavaScript','JSON','XML','Jquery','BootStrap','AngularJs','PHP','nodeJS','SQL','PhotoShop'];
  var scores=[240,240,240,210,150,240,210,210,150,120,180,120];

  for(var i=0;i<skills.length;i++){
  //console.log("cvs-skills-"+options.i);
  var id="cvs-skills-"+i;
  var canvas = document.getElementById(id);
  var ctx = canvas.getContext("2d");

  var counter = 0;
  var particles = [];
  var w = $(canvas).parent().width(), h = 100;
  canvas.width = w;
  canvas.height = h;

  var score=scores[i];
  function reset(){//canvas bar bg
   // if(bar.widths<300){
    //ctx.fillStyle = "#74c2ab";
    //canvas bg
    ctx.fillStyle = "#000";
    ctx.fillRect(0,0,w,h);
    //bar-bg
    ctx.fillStyle = "#2c3540";
    ctx.fillRect(100,30,score,25);//c
  }

  function progressbar(){
    this.widths = 0;
    //this.hue = 60;

    this.draw = function(){
      //bar color
      //ctx.fillStyle = 'hsla('+this.hue+', 100%, 80%, 1)';
      ctx.fillStyle ='#ffff01';
      ctx.fillRect(100,30,this.widths,25);//c
      //mask
      var grad = ctx.createLinearGradient(0,0,0,600);
      grad.addColorStop(0,"transparent");
      grad.addColorStop(1,"rgba(0,0,0,0.5)");
      ctx.fillStyle = grad;
      ctx.fillRect(100,30,this.widths,25);//c
    }
  }

  function particle(){//drao px dot
    this.x = 98 + bar.widths;//px dot position
    this.y = 82;

    this.vx = 0.8 + Math.random()*1;
    this.v = Math.random()*5;
    this.g = 1 + Math.random()*3;
    this.down = false;

    this.draw = function(){//
      //ctx.fillStyle = 'hsla('+(bar.hue+0.3)+', 80%, 40%, 1)';//color
      ctx.fillStyle = '#ffff01';//color
      var size = Math.random()*2;
      ctx.fillRect(this.x, this.y, size, size);
    }
  }

  bar = new progressbar();

  function draw(){
    reset();
    counter++

   // bar.hue += 0.1;

    bar.widths += 2;
    if(bar.widths > score){
      //if(counter > 215){
      //  reset();
      //  //bar.hue = 0;
      //  bar.widths = 0;
      //  counter = 0;
      //  particles = [];
      //}
      //else{
      //  //bar.hue = 126;
      //  bar.widths = 351;
      //  bar.draw();
      //}
      //return;
      ctx.fillStyle='#ffff01';
      ctx.fillRect(100,30,score,25);
    }
    else{
      bar.draw();
      for(var i=0;i<particle_no;i+=10){
        particles.push(new particle());
      }
    }
    update();
  }

  function update(){//px dot drop
    for(var i=0;i<particles.length;i++){
      var p = particles[i];
      p.x -= p.vx;
      if(p.down == true){
        p.g += 0.1;
        p.y += p.g;
      }
      else{
        if(p.g<0){
          p.down = true;
          p.g += 0.1;
          p.y += p.g;
        }
        else{
          p.y -= p.g;
          p.g -= 0.1;
        }
      }
      p.draw();
    }
  }

  function animloop() {
    draw();
    requestAnimFrame(animloop);
  }

  animloop();
}
}

//skillsbar({i:1,score:240});