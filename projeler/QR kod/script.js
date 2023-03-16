const data  =document.querySelector("#text");
const qrcode  =document.querySelector("#qrcode");
const qrgenerator  =document.querySelector("#qrgenerator");

const Url = "https://api.qrserver.com/v1/create-qr-code/";

qrgenerator.addEventListener("click", ()=>{
    const size =`350x350`;
    qrcode.src = `${Url}?/size=${size}&data=${data.value}`;
    if(data.value == ""){
        qrcode.src ="/qrkod.jpg";   
    }
})