// �Ա��Ŵ�  �����ֲ�


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
        // ����ƶ� �ı��ͼ ͼƬλ��    �������ƶ�
        //  �����Сͼ���ƶ�����/ Сͼ���  =    ��ͼ��Ժ��Ӿ���/��ͼͼƬ���

        // �����ֲ�  ��֤���λ�������ֲ��м�
        var mouseL = e.clientX-oSamll.offsetLeft-oMark.offsetWidth/2;
        var mouseT = e.clientY-oSamll.offsetTop-oMark.offsetHeight/2;


        var markL=mouseL;
        var markT=mouseT;
        // ���ֲ��ƶ�  ��Ҫ�����߽�
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




        // ��ͼƬ�ƶ�
        oImg.style.left = (-mouseL/oSamll.offsetWidth)*oBig.offsetWidth+'px';
        oImg.style.top = (-mouseT/oSamll.offsetHeight)*oBig.offsetHeight+'px';

    };
    oSamll.onmouseleave = function (e) {
        oBig.style.display ='none';
        oMark.style.display ='none';
    };
}()