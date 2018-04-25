function change(){
    var btn=document.getElementsByClassName("btn")[0];
    var span=document.getElementsByClassName("span")[0];
    var spantwo=document.getElementsByClassName("spantwo")[0];
    var tag=btn.getAttribute("data-checked");
    if(tag==="false"){
        spantwo.style="transform: scaleX(1);";
        span.style="color:#1ca1ef;";
        btn.setAttribute("data-checked","true");
    }else {
        btn.setAttribute("data-checked","false");
        spantwo.style="transform: scaleX(0);";
        span.style="color:#000;";
    }
}