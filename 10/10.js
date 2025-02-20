// DOM 생성 후

function func(sel1,sel2,sps1,sps2,txt1,txt2) {
    if(sel1.value === "℃"){
        sel2.value = "℉";
        sps1.innerHTML = "℃";
        sps2.innerHTML = "℉";
    }else{
        sel2.value = "℃";
        sps1.innerHTML = "℉" ;        
        sps2.innerHTML = "℃" ;        
    }

    txt1.value = "";
    txt2.value = "";
}

document.addEventListener('DOMContentLoaded',()=>{
    // DOM 요소 가져오기
    const sel = document.querySelectorAll('select');
    const inp = document.querySelectorAll('input');
    const txt1 = document.querySelector('.unit input');
    const txt2 = document.querySelector('.unit input[readonly]');

    const sps = document.querySelectorAll('span');

    console.log(sel,inp,txt1,txt2,sps);

    // 첫번째 select 값이 변경이 되었을떄
    sel[0].addEventListener("change", ()=>{
        console.log(sel[0].value);
        func(sel[0],sel[1],sps[0],sps[1],txt1,txt2);
    });

    sel[1].addEventListener("change", ()=>{
        console.log(sel[1].value);
        func(sel[1],sel[0],sps[1],sps[0],txt1,txt2);
    });

    txt1.addEventListener("input", ()=>{
        
        if(sel[0].value === "℃"){
            txt2.value = txt1.value * ( 9 / 5) + 32;
        }else{
            txt2.value = (txt1.value - 32) * (5 / 9);
        }
    });

});