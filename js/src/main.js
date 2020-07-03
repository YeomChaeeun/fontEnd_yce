// onepage_scroll.js

(function($){

  $('html, body').animate({scrollTop:0},300); // 새로고침 시 상단으로 이동
  
  var viewBox = $('#viewBox');
  var gnb = $('#gnbBox');
  var gnbLi = gnb.find('li');
  var speed = 700;
  var footBox = $('#footBox');

  var scrollOffset = [];
  var i=0;
  for(;i<gnbLi.length;i++){
    var selHref = gnbLi.eq(i).find('a').attr('href');
    var selEl = $(selHref).offset().top;
    scrollOffset[i]=selEl;
  }
  scrollOffset[gnbLi.length] = footBox.offset().top;
  // console.log(scrollOffset);

  gnbLi.eq(0).addClass('action');
  gnbLi.eq(0).siblings().removeClass('action');    

  $(window).on('scroll',function(){
    var winScroll = $(window).scrollTop();
    if(winScroll < scrollOffset[1]){
      gnbLi.eq(0).addClass('action');
      gnbLi.eq(0).siblings().removeClass('action');      
    }else if(winScroll >= scrollOffset[1] && winScroll < scrollOffset[2]){
      gnbLi.eq(1).addClass('action');
      gnbLi.eq(1).siblings().removeClass('action');
    }else if(winScroll >= scrollOffset[2] && winScroll < scrollOffset[3]){
      gnbLi.eq(2).addClass('action');
      gnbLi.eq(2).siblings().removeClass('action');
    }else if(winScroll >= scrollOffset[3] && winScroll < scrollOffset[4]){
      gnbLi.eq(3).addClass('action');
      gnbLi.eq(3).siblings().removeClass('action');
    }else if(winScroll >= scrollOffset[4] && winScroll < scrollOffset[5]){
      gnbLi.eq(4).addClass('action');
      gnbLi.eq(4).siblings().removeClass('action');
    }else if(winScroll >= scrollOffset[5]){
      gnbLi.eq(5).addClass('action');
      gnbLi.eq(5).siblings().removeClass('action');
    }
  });

  gnbLi.children('a').on('click',function(e){
    e.preventDefault();
    var sectionName = $(this).attr("href");
    var sectionOffset = $(sectionName).offset().top;
    // console.log(sectionOffset);
    var thisLi = $(this).parent('li');

    thisLi.addClass('action');
    thisLi.siblings().removeClass('action');

    $('html, body').animate({scrollTop:sectionOffset},speed);
  });
  
  // 오른쪽에 위치할 이동 인디케이션 생성
  // var headBox = $('#headBox');
  // headBox.after('<aside id="pointNaviBox"></aside>');
  // var pointNavi = $('#pointNaviBox');
  // var gnbclone = gnb.children('ul').clone(true);
  // pointNavi.append(gnbclone);

  // pointNavi.css({position:'fixed', top:10+'rem', right:3+'rem', width:2+'rem', height:'auto'});
  // pointNavi.children('ul').css({width:'100%',height:'100%'});
  // pointNavi.find('li').css({width:'2rem',height:'2rem',marginBottom:'2rem'});
  // pointNavi.find('a').css({display:'block', width:'2rem', height:'2rem', borderRadius: '2rem', backgroundColor:'#3fa', fontSize:0});

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

  // $(window).on('mousewheel DOMMouseScroll',function(e){
  //   var myEvt = e.originalEvent;
  //   var wheelValue;

  //   if(myEvt.wheelDeltaY){
  //     wheelValue = myEvt.wheelDeltaY;// -120 | 120 
  //   }else{
  //     wheelValue = myEvt.detail*-40; // -3 |3
  //   }
  // });

  // viewBox text 바뀌는 동작
  var RoatatingText = ['front-end', 'ui/ux', 'Web'];
  var i = 0;
  $(".rotating_text").text(RoatatingText[i]);
  setInterval(function(){	
    if(i>RoatatingText.length-1){i=0}
	  $(".rotating_text").text(RoatatingText[i]);
    i++;
    // WhereActive();
  }, 1500);
  

	// viewBox button 동작
  $(document).on('click', 'a.page-scroll', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 600, 'easeInOutExpo');
    event.preventDefault();
  });
  
  // skillBox circle chart
  var skillArray = [
    {no:'1', name:'web', per:'75'},
    {no:'2', name:'css', per:'55'},
    {no:'3', name:'js', per:'80'},
    {no:'4', name:'layouting', per:'90'},
    {no:'5', name:'photoShop', per:'55'},
    {no:'6', name:'illustrator', per:'85'}
  ]

  var skillText ='<svg class="circle-chart" viewbox="0 0 33.83098862 33.83098862"  xmlns="http://www.w3.org/2000/svg">\
                    <circle class="circle-chart-background" cx="16.91549431" cy="16.91549431" r="15.91549431" />\
                    <circle class="circle-chart-circle" cx="16.91549431" cy="16.91549431" r="15.91549431"/>\
                    <g class="circle-chart-info">\
                      <text class="circle-chart-percent" alignment-baseline="central" x="16.91549431" y="15.5">'+skillArray[i].per+'%</text>\
                      <text class="circle-chart-subline" alignment-baseline="central" x="16.91549431" y="20.5">'+skillArray[i].name+'</text>\
                    </g>\
                  </svg>';

  var skillBox = $('#skillBox');
  var skillUl = skillBox.find('.skill_list').children('ul');
  var skillLi = skillUl.find('li');
  var skillLiLen = skillLi.length;

  var i=0;
  for(i;i<skillLiLen;i++){
    var skillDd = skillLi.eq(i).find('dd');
    skillDd.append(skillText);
    skillDd.prev('dt').text(skillArray[i].name);
    skillDd.find('.circle-chart-circle').css({'stroke-dasharray':skillArray[i].per});
    skillDd.find('.circle-chart-percent').text(skillArray[i].per+'%');
    skillDd.find('.circle-chart-subline').text(skillArray[i].name);

  }

  var element =  skillBox.find('.circle-chart-circle');
  var chartInfo = skillBox.find('.circle-chart-info');

  var skillOffset = $('#skillBox').offset().top;

  $(window).on('scroll',function(){
    var thisScroll = $(this).scrollTop();
    // console.log(thisScroll);
    element.removeClass('circle_fill');
    chartInfo.removeClass('circle_appear');

    if(thisScroll>=skillOffset){
      element.addClass('circle_fill');
      chartInfo.addClass('circle_appear');
    }
    
  });






})(jQuery);





