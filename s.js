function starts(){
    const count = 500;
    const element = document.querySelector("section");
    var i = 0;

    while(i < count){
        const star = document.createElement("i");
        const x = Math.floor(Math.random() * window.innerWidth);
        const y = Math.floor(Math.random() * window.innerHeight);

        const size = Math.random() * 1;
        star.style.left = x+'px';
        star.style.top = y+'px';
        star.style.width = 2+size+'px';
        star.style.height = 2+size+'px';
        star.style.animationDuration = 2+size+'s';
        element.appendChild(star);
        i++;
    }
}
starts();