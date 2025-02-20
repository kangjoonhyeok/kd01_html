document.addEventListener('DOMContentLoaded', ()=>{
    const bts = document.querySelectorAll('button');
    
     // 1~45까지
    //bts[0] = n;

    for(let bt of bts){
        bt.addEventListener('click', ()=>{
            console.log(bt.innerHTML);
            let n = Math.floor(Math.random() * 6) + 1;
            document.querySelector('img').setAttribute("src", `../img/${n}.png`);
        });
    }
});