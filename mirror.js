// �Ա��Ŵ�

~function (){
    var oSamll = document.getElementsByClassName('small')[0];
    var oBig = document.getElementsByClassName('big')[0];
    var oImg = oBig.getElementsByTagName('img')[0];

    oSamll.onmouseenter = function () {
        oBig.style.display ='block';
    };
    oSamll.onmousemove = function (e) {
        e=e||window.event;
        // ����ƶ� �ı��ͼ ͼƬλ��    �������ƶ�
        //  �����Сͼ���ƶ�����/ Сͼ���  =    ��ͼ��Ժ��Ӿ���/��ͼͼƬ���
        var mouseL = e.clientX-oSamll.offsetLeft;
        var mouseT = e.clientY-oSamll.offsetTop;

        oImg.style.left = (-mouseL/oSamll.offsetWidth)*oBig.offsetWidth+'px';
        oImg.style.top = (-mouseT/oSamll.offsetHeight)*oBig.offsetHeight+'px';

    };
    oSamll.onmouseleave = function (e) {
        oBig.style.display ='none';
    };


}()