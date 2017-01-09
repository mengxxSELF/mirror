// 淘宝放大镜

~function (){
    var oSamll = document.getElementsByClassName('small')[0];
    var oBig = document.getElementsByClassName('big')[0];
    var oImg = oBig.getElementsByTagName('img')[0];

    oSamll.onmouseenter = function () {
        oBig.style.display ='block';
    };
    oSamll.onmousemove = function (e) {
        e=e||window.event;
        // 鼠标移动 改变大图 图片位置    按比例移动
        //  鼠标在小图上移动距离/ 小图宽度  =    大图相对盒子距离/大图图片宽度
        var mouseL = e.clientX-oSamll.offsetLeft;
        var mouseT = e.clientY-oSamll.offsetTop;

        oImg.style.left = (-mouseL/oSamll.offsetWidth)*oBig.offsetWidth+'px';
        oImg.style.top = (-mouseT/oSamll.offsetHeight)*oBig.offsetHeight+'px';

    };
    oSamll.onmouseleave = function (e) {
        oBig.style.display ='none';
    };


}()