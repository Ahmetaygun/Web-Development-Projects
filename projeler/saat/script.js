var _saat=document.getElementById("saat");
var _dakika=document.getElementById("dakika");
var _saniye=document.getElementById("saniye");
var _pmam=document.getElementById("pmam");

function updatesaat(){
    let h =Date().getHours();
    let m=Date().getMinutes();
    let s=Date().getSeconds();
    let pmam="AM";
    if(h>12){
        h=h-12;
        pmam="PM";
    }
    h=h < 10 ? "0" + h : h;
    m=m < 10 ? "0" + m : m;
    s=s < 10 ? "0" + s : s;
    _saat.innerText = h;
    _dakika.innerText = m;
    _saniye.innerText = s;
    _pmam.innerText = pmam;
    setTimeout(() => {
        updatesaat();
    }, 1000);


} 

updatesaat();
