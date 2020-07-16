// browser_resize.js
var deviceName, deviceWidth;

(function($){
  // resize -------------------------------------------------------

  deviceName = ['mobile','tablet','laptop','pcfull'];
  deviceWidth = [
    {'size' : 640, "title" : deviceName[0]},
    {'size' : 1024, "title" : deviceName[1]},
    {'size' : 1440, "title" : deviceName[2]},
    {'size' : 1920, "title" : deviceName[3]}
  ];


  var win = $(window);
  var ww = win.outerWidth(true);
  var beforeDevice, afterDevice;

   // 디바이스 환경이 바뀔때마다 1번만 실행시키게 하기 위해서 nowDevice에 기기 title을 저장하여 리턴해줌
   var DeviceAction = function(widthSize){
    var nowDevice;
    if(widthSize < deviceWidth[0].size){
      nowDevice = deviceWidth[0].title;
    }else if(widthSize < deviceWidth[1].size){
      nowDevice = deviceWidth[1].title;
    }else if(widthSize < deviceWidth[2].size){
      nowDevice = deviceWidth[2].title;
    }else{
      nowDevice = deviceWidth[3].title;
    }
    return nowDevice;
  };
  // 처음 새로고침 된 디바이스의 이름 값을 beforeDevice에 저장해줌
  beforeDevice = DeviceAction(ww);
  console.log('beforeDevice : ' + DeviceAction(ww));

  // ------------------------------------------------------
  win.on('resize',function(){
    var nw = win.outerWidth(true);
    // 현재 리사이즈 된 디바이스 가로 길이의 범위값을 가이용해서 title을 afterDevice에 저장함
    afterDevice = DeviceAction(nw);
    
    // 최초 디바이스 title과 리사이즈 된 디바이스 title 이 다르다면 if조건문이 true가 되어 다음을 수행함
		if(beforeDevice !== afterDevice){
			// 변경된 디바이스 명의 index값을 i에 저장함
			var i = deviceName.indexOf(afterDevice);
      // console.log(deviceName[i]);
			// ActiveStyle(deviceWidth[i].size);
      location.reload(); 
			beforeDevice = afterDevice;
			console.log( 'changed : ' + beforeDevice);
    }
  });


})(jQuery);