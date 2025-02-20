
function check1(){
    let s = document.getElementById("txt1").value ;
    
    // 문자열 출력
    console.log(s);

    //한문자씩 출력
    for(let i=s.length - 1; i >= 0; i--){
        console.log(s[i]);
    }

    for(let c of s){
        console.log(c);
    }

    console.log(s.indexOf('ss'));
    console.log(s.includes('ss'));
    console.log(s.slice(0,2));
    //let s2 = document.getElementById("txt2").value

    //document.getElementById("msg").innerHTML = parseInt(s) + parseInt(s2)
    //document.getElementById("msg").innerHTML = s ;
    
    //document.getElementById("txt2").value = s[s.length - 1]
    //document.getElementById("txt2").value = s.charAt(s.length - 1)
    //document.getElementById("txt2").value = s.split(',')[1];

}


const check2 = (e) => {
    console.log("check2")
}