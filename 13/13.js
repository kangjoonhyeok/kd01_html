//영화진흥위원회
const baseMvUrl = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?`;
const mvApi = 'b2de8d2086e4712724ce826185cd9d21';
                    
//TMDB
const baseTMDBUrl = 'https://api.themoviedb.org/3/search/movie?';
const rmdbApi = '063d383d56921ac223f1e3a619c101f3';

//영화포스터 저장 배열
let posterArr = [];


//포스터 가져오기
const getPoster = async (movieNm) => {
    let url = `${baseTMDBUrl}api_key=${rmdbApi}&query=${movieNm}`;

    const resp = await fetch(url);
    const data = await resp.json();

    if (data == undefined)
        posterArr.push('');
    else
        posterArr.push(data.results[0].poster_path);
}

//박스오피스 가져오기
const getBoxOfficeList = async () => {
    const ul = document.querySelector('ul');
    const mvPoster = document.querySelector('#mvPost');
    const mvType = document.querySelector('[type=radio]:checked').value;
    const dt = document.querySelector('[type=date]').value.replaceAll('-', '');

    //포스터 배열 초기화
    posterArr = [];
    let url = `${baseMvUrl}&key=${mvApi}&targetDt=${dt}`;
    if(mvType == 'K' || mvType == 'F'){
        url = `${url}&repNationCd=${mvType}`;
    }
    //fetch
    const resp = await fetch(url);
    const data = await resp.json();
    const dailyBoxOfficeList = data.boxOfficeResult.dailyBoxOfficeList;

    let tags = '';
    for (let boxoffice of dailyBoxOfficeList) {
        tags = tags + 
          `<li>
            <span class="sp">${boxoffice.rank}</span>
            ${boxoffice.movieNm}
          </li>` ;
        await getPoster(boxoffice.movieNm);
    }

    ul.innerHTML = tags;

    const lis = document.querySelectorAll('li');
    for(let [i, li] of lis.entries()){
        li.addEventListener('mouseover', () => {
            posterArr[i] == ''
            ? mvPoster.innerHTML = "자료없음"
            : mvPoster.innerHTML =  `<img src="https://image.tmdb.org/t/p/w500${posterArr[i]}">`;
        })
    }
    
}



//어제날짜가져오기 
const getYesterday = () => {
    let dt = new Date();
    dt.setDate(dt.getDate() - 1);

    //년도
    let year = dt.getFullYear();

    //월
    let month = String(dt.getMonth() + 1).padStart(2, '0');
    // month = month < 10 ? '0' + month : month ;

    //일 
    let day = String(dt.getDate()).padStart(2, '0');

    return (year + '-' + month + '-' + day);
}

document.addEventListener('DOMContentLoaded', () => {
    const inputDate = document.querySelector('[type=date]');
    const bt = document.querySelector('button');

    //어제 날짜 
    const yesterday = getYesterday();
    inputDate.max = yesterday;
    inputDate.value = yesterday;


    //박스오피스 가져오기
    getBoxOfficeList();

    bt.addEventListener('click', (e) => {
        e.preventDefault();

        getBoxOfficeList();

  });

    console.log(yesterday);
});