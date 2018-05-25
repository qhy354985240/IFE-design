/**
 * Created by Administrator on 2018/5/25.
 */

$(document).on("keyup","#email,#password", function () {

//    当input没有focus的时候且里面有内容的话就保留变化后的样式
    if ($("#email").val().length){
        $(".f1").css({"top":"-15px","transform":"scale(.7)","-webkit-transform":"scale(.7)"});
    }
    else {
        $(".f1").css({"top":"","transform":"","-webkit-transform":""});
    }
    if ($("#password").val().length){
        $(".f2").css({"top":"-15px","transform":"scale(.7)","-webkit-transform":"scale(.7)"});
    }
    else {
        $(".f2").css({"top":"","transform":"","-webkit-transform":""});
    }

//为button增加动画样式
    if($("#email").val().length&&$("#password").val().length) {
        $(".btn").css({"animation":"pulse 1s .7s infinite","-weblit-animation":"pulse 1s .7s infinite"});
    }
    else {
        $(".btn").css({"animation":"","-weblit-animation":""});
    }
});
