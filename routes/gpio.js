/**
 * Created by Administrator on 2014/5/19.
 */
var GPIO = require('../node_modules/gpio/gpio');

var LED = GPIO.PD0;
var status = 0;
GPIO.init();

GPIO.setcfg(LED, GPIO.OUT);

// 让led 一闪一闪
var charmyinblink = function(){
    if(status){
        GPIO.output(LED, GPIO.LOW);
        status = 0;
    } else {
        GPIO.output(LED, GPIO.HIGH);
        status = 1;
    }
}

//setInterval(blink, 1000);


exports.blink = function(req, res){
    charmyinblink();
    //var result = "Blink blink blink.....嘿嘿~ Status is " + (status==0?'关闭':'开启');
    res.json({'status':status});
    //res.send(status);
};
