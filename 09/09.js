document.addEventListener('DOMContentLoaded', ()=>{
    const bts = document.querySelectorAll('button');
    const imgs = document.querySelectorAll('img');
    const msg = document.querySelector('#msg');
    for(let bt of bts){
        bt.addEventListener('click', ()=>{
            let com = Math.floor(Math.random() * 6) + 1;
            imgs[0].setAttribute("src", `../img/${com}.png`);
            imgs[0].setAttribute("alt", `${com}`);
            
            let user = bt.textContent.slice(0,1);           
            imgs[1].setAttribute("src", `../img/${user}.png`);
            imgs[1].setAttribute("alt", `${user}`);

            if(com == user) msg.innerHTML = '맞음';
            else msg.innerHTML = '틀림'
        });
    }
});