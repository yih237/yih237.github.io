
$(document).ready(function(){
    animateDiv('.aaa');
    animateDiv('.bbb');
    animateDiv('.ccc');
    animateDiv('.ddd');
    animateDiv('.eee');
    animateDiv('.fff');
    animateDiv('.ggg');
    animateDiv('.hhh');
    animateDiv('.iii');
    animateDiv('.jjj');
    animateDiv('.kkk');
    animateDiv('.lll');
    animateDiv('.mmm');
    animateDiv('.nnn');
    animateDiv('.ooo');
    animateDiv('.ppp');
    animateDiv('.qqq');
    animateDiv('.rrr');
    animateDiv('.sss');
    animateDiv('.ttt');
    animateDiv('.uuu');
    animateDiv('.vvv');
    animateDiv('.www');
    animateDiv('.xxx');
    animateDiv('.yyy');
    animateDiv('.zzz');
});

function makeNewPosition(){

    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 100;
    var w = $(window).width() - 100;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh,nw];

}

function animateDiv(myclass){
    var newq = makeNewPosition();
    $(myclass).animate({ top: newq[0], left: newq[1] }, 1000,   function(){
      animateDiv(myclass);
    });
};

function calcSpeed(prev, next) {

  var x = Math.abs(prev[1] - next[1]);
  var y = Math.abs(prev[0] - next[0]);

  var greatest = x > y ? x : y;

  var speedModifier = 0.1;

  var speed = Math.ceil(greatest/speedModifier);

  return speed;

  }



  