"use";
var _buttonlar=document.getElementsByTagName("button");
var _uzunluk=_buttonlar.length;
var _sonuc=document.getElementById("sonuc");
for(var i=0;i<_uzunluk;i++){
    _buttonlar[i].onclick=hesapla;
}
function hesapla(){
    var _deger=this.innerHTML;
    if(_deger=="="){
        try {
            _sonuc.value=eval(_sonuc.value);
        } catch (e) {
            _sonuc.value="0";
        }
        return;
    }
    _sonuc.value +=_deger;
}