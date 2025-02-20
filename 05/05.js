const showMsg = (m) => {
    document.getElementById("txt2").value = m;

}


function check1() {
    let s = document.getElementById("txt1").value;
    let isTrue = true;
    let sum = 0;
    for (let i = 0; i < s.length / 2; i++) {
        if (s[i] != s[s.length - 1 - i]) {
            isTrue = false;
            break;
        }
    }
    if (isTrue) {
        showMsg('회문입니다.');
    } else {
        showMsg('회문이 아닙니다.');

    }

    // for (let c of s) {
    //     if (parseInt(c) >= 0 && parseInt(c) <= 9) {
    //         sum += parseInt(c);
    //     }
    // }
    // document.getElementById("txt2").value = sum;
}


const check2 = () => {
    let s = document.getElementById("txt1").value;
    let sum = 0;

    for (let c of s) {
        if (!isNaN(c)) {
            sum += parseInt(c);
        }
    }
    showMsg(sum);
}
