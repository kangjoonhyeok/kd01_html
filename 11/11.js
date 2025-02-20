document.addEventListener("DOMContentLoaded", (e) => {
    const bt = document.querySelector('button');
    const img = document.querySelector('img');
    const txt = document.querySelector('.unitDiv input');
    let n;
    let isFlag = false;
    
    bt.addEventListener('click', (e)=>{
        e.preventDefault();
        
        if(!isFlag){
            n = Math.floor(Math.random() * 100) + 1;
            isFlag = true;
            txt.value = '';
            txt.style.display = 'inline';
            img.setAttribute("src", `../img/what.png`);
            bt.innerHTML = '확인';
            return;
        }
        console.log(n);
        if(n > txt.value){
            img.setAttribute("src", `../img/up.png`);

        }
        else if(n == txt.value){
            img.setAttribute("src", `../img/good.png`);
            txt.style.display = 'none';
            bt.innerHTML = '다시하기';
            isFlag = false;
        }
        else if(n < txt.value){
            
            img.setAttribute("src", `../img/down.png`);

        }
 
    });
})