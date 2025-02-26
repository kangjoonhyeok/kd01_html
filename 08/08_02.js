document.addEventListener("DOMContentLoaded",()=>{
    bt = document.querySelector('button');
    img = document.querySelector('img');

    bt.addEventListener('click',()=>{
        let rd = Math.floor(Math.random() * 6) + 1;
        img.setAttribute('src',`../img/${rd}.png`);
    })
})