function lotto(){
    //1. 로또번호 생성
    //1-1. 로또배열
    let arrLotto = [];

    //1-2. 6개 + 1개 번호 추출
    while(arrLotto.length < 6){
        let n = Math.floor(Math.random() * 45) + 1; // 1~45까지

        if(!arrLotto.includes(n)){
            arrLotto.push(n);
        }
    }
    //1-2. 6개 번호 정렬
    arrLotto.sort((a, b)=>
        a - b
    );

    //1-3. +1개 번호
    while(arrLotto.length < 7){
        let n = Math.floor(Math.random() * 45) + 1; // 1~45까지

        if(!arrLotto.includes(n)){
            arrLotto.push(n);
        }
    }
    
    arrLotto.splice(6,0,'+');
    console.log(arrLotto);
    let spanTgs = arrLotto.map(item => 
        item == '+' ? `<span class='spplus'>${item}</span>` : `<span class='sp${Math.floor(item / 10)}'>${item}</span>`).join('');
    console.log(spanTgs);

    document.getElementById("msgLotto").innerHTML = spanTgs;

}