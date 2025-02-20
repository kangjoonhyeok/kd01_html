document.addEventListener('DOMContentLoaded', ()=>{
    const bts = document.querySelectorAll('button');
    console.log(bts);
    for(let bt of bts){
        bt.addEventListener('click', ()=>{
            bt.setAttribute("id", bt.textContent)
            console.log(bt.getAttribute);
        });
    }
});