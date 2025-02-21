const getFetch = async(dt, ul) => {
    let apiKey = 'b2de8d2086e4712724ce826185cd9d21';
    let baseUrl='http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?';
    let url = `${baseUrl}key=${apiKey}&targetDt=${dt}`;

    
    try{
        const rasp = await fetch(url);
        const data = await rasp.json();
        let tags = '';
        for(let item of data.boxOfficeResult.dailyBoxOfficeList){
            tags = tags +
            `<li class="fetchLi">
                <span class="sp">${item.rank}</span>
                ${item.movieNm}
            </li>`;
        }
        ul.innerHTML =tags;
        console.log(data.boxOfficeResult.dailyBoxOfficeList)
    }catch(err){

        console.log(err);
    }
    console.log(dt);
}

document.addEventListener('DOMContentLoaded',()=>{
    // 필요한 요소 가지고 오기
    const dt = document.querySelector('input');
    const ul = document.querySelector('ul');

    dt.addEventListener('change', () => {
        console.log(dt.value);
        getFetch(dt.value.replaceAll('-',''), ul);
        for(let i = 0; i < 10; i++){

        }
    });

    
});