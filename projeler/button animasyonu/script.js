var button=document.querySelectorAll("a");
button.forEach(btn=>{
    btn.addEventListener("click",function(s){
        var y=s.clientX - s.target.offsetLeft;
        var z=s.clientY - s.target.offsetTop;
        var tıkla=document.createElement("span");
        tıkla.style.left = y + "px";
        tıkla.style.top = z + "px";
        this.appendChild(tıkla);
        setTimeout(() => {
            tıkla.remove();
        }, 800);
    })
})