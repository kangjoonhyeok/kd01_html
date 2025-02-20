//object
let obj = { '사과':'🍎',
            '바나나': '🍌',
            '오이' : '🥒',
};

console.log(obj);
console.log(obj['사과']);


//추가
obj['당근'] = '🥕';
console.log(obj);

//수정
obj['사과'] = '🍏'
console.log(obj);

//삭제
delete obj['오이'];
console.log(obj);

//순회
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

for(let i = 0; i < Object.keys(obj).length; i++){
    console.log(Object.keys(obj)[i],Object.values(obj)[i],obj[Object.keys(obj)[i]]);
}

for(let i in Object.keys(obj)){
    console.log(Object.keys(obj)[i],Object.values(obj)[i],obj[Object.keys(obj)[i]]);
}

for(let item of Object.keys(obj)){
    console.log(item, obj[item]);
}
// 구조 분해
for(let [k, v] of Object.entries(obj)){
    console.log(k, v);
}

// 전개 연산자
let obj2 = {'수박' : "🍉"};
let obj3 = {...obj, ...obj2};
console.log(obj3);

// 기타
let obj4 = {
    '과일' : {'사과' : '🍎', '바나나': '🍌'},
    '채소' : {'당근' : '🥕'}
}

console.log(obj4['과일']['사과']);
console.log(obj4['과일'].바나나);
console.log(obj4.채소.당근);

