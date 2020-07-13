// skillBox.js

(function($){

  var aboutBox = $('#aboutBox');
  var i=0;
  var skillUl = aboutBox.find('.skill_list').children('ul');
  var skillLi = skillUl.find('li');
  var skillLiLen = skillLi.length;

  // skillBox circle chart
  var skillArray = [
    {no:'1', name:'html', per:'85'},
    {no:'2', name:'css', per:'70'},
    {no:'3', name:'scss', per:'70'},
    {no:'4', name:'js', per:'80'},
    {no:'5', name:'photoShop', per:'65'},
    {no:'6', name:'illustrator', per:'75'}
  ]

  var skillText ='<svg class="circle-chart" viewbox="0 0 33.83098862 33.83098862"  xmlns="http://www.w3.org/2000/svg">\
                    <circle class="circle-chart-background" cx="16.91549431" cy="16.91549431" r="15.91549431" />\
                    <circle class="circle-chart-circle" cx="16.91549431" cy="16.91549431" r="15.91549431"/>\
                    <g class="circle-chart-info">\
                      <text class="circle-chart-percent" alignment-baseline="central" x="16.91549431" y="15.5">'+skillArray[i].per+'%</text>\
                      <text class="circle-chart-subline" alignment-baseline="central" x="16.91549431" y="20.5">'+skillArray[i].name+'</text>\
                    </g>\
                  </svg>';


  for(i;i<skillLiLen;i++){
    var skillDd = skillLi.eq(i).find('dd');
    skillDd.append(skillText);
    skillDd.prev('dt').text(skillArray[i].name);
    skillDd.find('.circle-chart-circle').css({'stroke-dasharray':skillArray[i].per});
    skillDd.find('.circle-chart-percent').text(skillArray[i].per+'%');
    skillDd.find('.circle-chart-subline').text(skillArray[i].name);

  }

  var element =  aboutBox.find('.circle-chart-circle');
  var chartInfo = aboutBox.find('.circle-chart-info');

  var aboutOffset = $('#aboutBox').offset().top;
  chartInfo.addClass('circle_appear');

  $(window).on('scroll',function(){
    var thisScroll = $(this).scrollTop();
    // console.log(thisScroll);
    element.removeClass('circle_fill');
    chartInfo.removeClass('circle_appear');

    if(thisScroll>=aboutOffset){
      element.addClass('circle_fill');
      chartInfo.addClass('circle_appear');
    }
  });


})(jQuery);