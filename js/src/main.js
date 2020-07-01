// onepage_scroll.js

(function($){

  $('html, body').animate({scrollTop:0},300); // 새로고침 시 상단으로 이동
  
  var viewBox = $('#viewBox');
  var gnb = $('#gnbBox');
  var gnbLi = gnb.find('li');
  var speed = 700;

  var scrollOffset = [];
  var i=0;
  for(;i<gnbLi.length;i++){
    var selHref = gnbLi.eq(i).find('a').attr('href');
    var selEl = $(selHref).offset().top;
    scrollOffset[i]=selEl;
  }
  console.log(scrollOffset);
  gnbLi.eq(0).addClass('action');
  gnbLi.eq(0).siblings().removeClass('action');    

  $(window).on('scroll',function(){
    var winScroll = $(window).scrollTop();
    if(winScroll <= scrollOffset[1]){
      gnbLi.eq(0).addClass('action');
      gnbLi.eq(0).siblings().removeClass('action');      
    }else if(winScroll > scrollOffset[1] && winScroll <= scrollOffset[2]){
      gnbLi.eq(1).addClass('action');
      gnbLi.eq(1).siblings().removeClass('action');
    }else if(winScroll > scrollOffset[2] && winScroll <= scrollOffset[3]){
      gnbLi.eq(2).addClass('action');
      gnbLi.eq(2).siblings().removeClass('action');
    }else if(winScroll > scrollOffset[3] && winScroll <= scrollOffset[4]){
      gnbLi.eq(3).addClass('action');
      gnbLi.eq(3).siblings().removeClass('action');
    }else if(winScroll > scrollOffset[4] && winScroll <= scrollOffset[5]){
      gnbLi.eq(4).addClass('action');
      gnbLi.eq(4).siblings().removeClass('action');
    }else{
      gnbLi.eq(5).addClass('action');
      gnbLi.eq(5).siblings().removeClass('action');
    }
  });

  gnbLi.children('a').on('click',function(e){
    e.preventDefault();
    var sectionName = $(this).attr("href");
    var sectionOffset = $(sectionName).offset().top;
    // console.log(sectionOffset);

    $('html, body').animate({scrollTop:sectionOffset},speed);
  });
  
  // 오른쪽에 위치할 이동 인디케이션 생성
  var headBox = $('#headBox');
  headBox.after('<aside id="pointNaviBox"></aside>');
  var pointNavi = $('#pointNaviBox');
  var gnbclone = gnb.children('ul').clone(true);
  pointNavi.append(gnbclone);

  pointNavi.css({position:'fixed', top:10+'rem', right:3+'rem', width:2+'rem', height:'auto'});
  pointNavi.children('ul').css({width:'100%',height:'100%'});
  pointNavi.find('li').css({width:'2rem',height:'2rem',marginBottom:'2rem'});
  pointNavi.find('a').css({display:'block', width:'2rem', height:'2rem', borderRadius: '2rem', backgroundColor:'#3fa', fontSize:0});

  // top 버튼 생성
  // 1000px 이전에는 안보이고 그 이후에 보이게 만들기
  // 클릭시 최 상단으로 이동
  var topMvText = '<div class="top_move_btn"><a href="#"><span>상단으로 이동</span></a></div>';
  $('#asInfoBox').after(topMvText);

  var topMvBtn = $('.top_move_btn');
  topMvBtn.css({position:'fixed',left:'50%',bottom:'3rem',marginLeft:'30rem',zIndex:'1000',width:'100px',height:'100px',backgroundColor:'#fa0'});
  topMvBtn.find('a').css({display:'block',width:'100%',height:'100%'});

  $(window).on('scroll', function(){
    var winScroll = $(window).scrollTop();
    (winScroll>=1000)? topMvBtn.stop().fadeIn() : topMvBtn.stop().fadeOut();
    // if(winScroll>=1000){topMvBtn.stop().fadeIn();}
    // else{topMvBtn.stop().fadeOut();}
  });

  topMvBtn.on('click',['a'],function(e){
    $('html, body').animate({scrollTop:0},300);
  });

  $(window).on('mousewheel DOMMouseScroll',function(e){
    var myEvt = e.originalEvent;
    var wheelValue;

    if(myEvt.wheelDeltaY){
      wheelValue = myEvt.wheelDeltaY;// -120 | 120 
    }else{
      wheelValue = myEvt.detail*-40; // -3 |3
    }
  });


})(jQuery);





