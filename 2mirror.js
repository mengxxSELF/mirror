// 淘宝放大镜  有遮罩层


~function (){
    var oSamll = document.getElementsByClassName('small')[0];
    var oBig = document.getElementsByClassName('big')[0];
    var oImg = oBig.getElementsByTagName('img')[0];
    var oMark = oSamll.getElementsByTagName('span')[0];

    oSamll.onmouseenter = function () {
        oBig.style.display ='block';
        oMark.style.display ='block';
    };
    oSamll.onmousemove = function (e) {
        e=e||window.event;
        // 鼠标移动 改变大图 图片位置    按比例移动
        //  鼠标在小图上移动距离/ 小图宽度  =    大图相对盒子距离/大图图片宽度

        // 有遮罩层  保证鼠标位置在遮罩层中间
        var mouseL = e.clientX-oSamll.offsetLeft-oMark.offsetWidth/2;
        var mouseT = e.clientY-oSamll.offsetTop-oMark.offsetHeight/2;


        var markL=mouseL;
        var markT=mouseT;
        // 遮罩层移动  需要给定边界
        if(mouseL<=0){
            markL = 0;
        }else if(mouseL>= oSamll.offsetWidth-oMark.offsetWidth){
            markL=oSamll.offsetWidth-oMark.offsetWidth;
        }

        if(mouseT<=0){
            markT = 0;
        }else if(mouseT>=oSamll.offsetHeight-oMark.offsetHeight){
            markT=oSamll.offsetHeight-oMark.offsetHeight;
        }

        oMark.style.left =  markL+'px';
        oMark.style.top =  markT+'px';




        // 大图片移动
        oImg.style.left = (-mouseL/oSamll.offsetWidth)*oBig.offsetWidth+'px';
        oImg.style.top = (-mouseT/oSamll.offsetHeight)*oBig.offsetHeight+'px';

    };
    oSamll.onmouseleave = function (e) {
        oBig.style.display ='none';
        oMark.style.display ='none';
    };
}()