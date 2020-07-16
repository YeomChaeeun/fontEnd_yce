// sub_02.js

(function($){

  var subBox = $('#subBox');
  var ImgArea = subBox.find('.img_area');
  var imgPart = ImgArea.find('.img_part');
  var ImgUl = imgPart.children('ul');
  var ImgLi = ImgUl.find('li');
  var nextBtn = ImgArea.find('button');
  var ImgLen = ImgLi.length;

  var ImgBig = subBox.find('.img_big');
  var BigNextBtn = ImgBig.find('.next');
  var CloseBtn = ImgBig.find('.close_btn');
  
  var check = true;
  var n = 0;
  var timed = 600;
  


  var Mob = function(){
    // ImgUl.css({height:ImgLen*100+'%'});
  }

  // 1024px 이상에서만 작동하게함
  var pcFull = function(){
    // subBox 자동슬라이드 fadeIn, fadeOut
    var FadeFn = function(n,k){
      if(k!==n){ 
        ImgLi.eq(n).css({zIndex:10, display:'block'});
        ImgLi.eq(k).fadeOut(timed,function(){
          ImgLi.eq(n).css({zIndex:10});
          ImgLi.eq(n).siblings('li').css({zIndex:0});
          check = true;
        });
      }
    }
    ImgLi.eq(0).css({zIndex:6, display:'block'});
    nextBtn.on('click',function(e){
      e.preventDefault();
      var k = n;
      var thisBtn = $(this)[0];
  
      if(thisBtn === nextBtn[0] && check){
        check = false;
        (n>=ImgLen-1)? n=0 : n+=1;
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
  
    // -------------------------------------------------------------------
    // img_big 파트 나타내기
  
    // ImgBig 내부 ul 복사해오기
    var BigImgCont = ImgBig.find('.img_cont');
    var ImgUlCopy = ImgUl.clone();
    BigImgCont.prepend(ImgUlCopy);
    var BigUl = BigImgCont.children('ul');
    var BigLi = BigUl.find('li');
    var BIgLast = BigLi.clone();
  
    BigUl.prepend(BIgLast);
    BigLi = BigUl.find('li');
    var BigImgLen = BigLi.length;
  
    var s = 0;
  
    ImgUl.on('click',function(e){
      e.preventDefault();
      ImgBig.css({display:'block'});
      ImgBig.animate({left:0});
    });
    CloseBtn.on('click',function(e){
      e.preventDefault();
      ImgBig.animate({left:'100%'},function(){
        ImgBig.css({display:'none'});
        BigUl.css({marginLeft:'0%'});
        s=0;
      });
    });
  
    BigUl.css({width:(BigImgLen*100)+'%'});
    BigLi.css({width:(100/BigImgLen)+'%'});
  
    // BigImg 내 이미지 슬라이드
    BigNextBtn.on('click',function(e){
      e.preventDefault();
      check=false;
      s++;
      BigUl.animate({marginLeft:-s*100+'%'},function(){
        if(s>=BigImgLen/2){
          s=0;
          BigUl.css({marginLeft:'0%'});
        }
        check=true;
      });
    });

  }

  var win = $(window);
  var winW = win.width();

  if(winW>=1024){
    pcFull();
  }else if(winW<1024){
    Mob();
  }
  
})(jQuery);