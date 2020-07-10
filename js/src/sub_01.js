// sub_02.js

(function($){

  var subBox = $('#subBox');
  var ImgArea = subBox.find('.img_area');
  var imgPart = ImgArea.find('.img_part');
  var ImgUl = imgPart.children('ul');
  var ImgLi = ImgUl.find('li');
  var nextBtn = ImgArea.find('button');

  var ImgBig = subBox.find('.img_big');
  var CloseBtn = ImgBig.find('.close_btn');
  
  var check = true;
  var n = 0;
  var timed = 600;
  
  // subBox 자동슬라이드
    
  // -------------------------------------------------
  // img_big 파트 나타내기
  ImgUl.on('click',function(e){
    e.preventDefault();
    ImgBig.animate({left:0});
  })
  CloseBtn.on('click',function(e){
    e.preventDefault();
    ImgBig.animate({left:'100%'});
  })

  // ImgBig 내부 ul 복사해오기
  var BigImgCont = ImgBig.find('.img_cont');
  // var ImgLast = ImgLi.eq(-1).clone(true);
  // ImgUl.prepend(ImgLast);
  // ImgLi = ImgUl.find('li');
  var ImgLen = ImgLi.length;
  // console.log(ImgLen);
  // ImgUl.css({width:(ImgLen*100)+'%'});
  // ImgLi.css({width:(100/ImgLen)+'%'});
  
  var FadeFn = function(n,k){
    if(k!==n){ 
      ImgLi.eq(n).css({zIndex:6, display:'block'});
      ImgLi.eq(k).fadeOut(timed,function(){
        ImgLi.eq(n).css({zIndex:10});
        ImgLi.eq(n).siblings('li').css({zIndex:0});
        check = true;
      });
    }
  }
  nextBtn.on('click',function(e){
    e.preventDefault();
    var k = n;
    var thisBtn = $(this)[0];

    if(thisBtn === nextBtn[0] && check){
      check = false;
      (n>=ImgLen)? n=0 : n+=1;
      FadeFn(n,k);
    }
  });

  // 자동 움직임 -------------------------------------------------------
  var mvImg;
  var mvSlideGo = function(){
    mvImg = setInterval(function(){
      nextBtn.trigger('click');
    }, timed*4);
  };

  mvSlideGo();

  var ClearFn = function(){clearInterval(mvImg)};
  var GoFn = function(){mvSlideGo()};

  ImgUl.on({'mouseenter':ClearFn, 'mouseleave':GoFn});

  
})(jQuery);