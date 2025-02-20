let n = 0;
let rd = 0;
let boom = false;
let start = false;
document.addEventListener('DOMContentLoaded', (e) => {
    const cols = document.querySelectorAll('.col');
    const bt = document.querySelector('button');
    const msg = document.querySelector('#msg');
    for (let [idx, col] of cols.entries()) {
        col.innerHTML = idx + 1;
    }
   
        bt.addEventListener('click', () => {
            if(!start){
                n = 0;
                rd = Math.floor(Math.random() * 9);
                console.log(rd);
                boom = true;
                msg.innerHTML = '게임중...';
                start = true;
                for (let [idx, col] of cols.entries()) {
                    col.innerHTML = idx + 1;
                }

            }
        })
        
    

    for (let [idx, col] of cols.entries()) {
        col.addEventListener('click', () => {
            if(!start){
                msg.innerHTML = '폭탄 돌리기를 눌러주세요!';
                return;
            }
            const img = new Image();
            if (col.innerHTML < 10 && col.innerHTML > 0 && boom) {
                if (idx != rd) {
                    img.src = `../img/hart.png`;
                    col.innerHTML = '';
                    col.appendChild(img);
                    n++;
                    console.log(n);
                } else if (idx == rd && n == 8) {
                    img.src = `../img/hart.png`;
                    col.innerHTML = '';
                    msg.innerHTML = '성공';
                    col.appendChild(img);
                    start = false;
                }
                else {
                    img.src = `../img/boom.png`;
                    col.innerHTML = '';
                    msg.innerHTML = '실패';
                    col.appendChild(img);
                    boom = false;
                    start = false;
                    return;
                }

            }
        })
    }

});