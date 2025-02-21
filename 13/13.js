//영화진흥위원회
const mvApi = 'b2de8d2086e4712724ce826185cd9d21';
//영화진흥위원회
const baseMvUrl = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?`;

//TMDB
const rmdbApi = '063d383d56921ac223f1e3a619c101f3';
const baseTMDBUrl = 'https://api.themoviedb.org/3/search/movie?';

//영화포스터 저장 배열
let posterArr = [];

const BoxofficeList() =>

const getFetch = async (dt, ul) => {
    let apiKey = 'b2de8d2086e4712724ce826185cd9d21';
    let baseUrl = 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?';
    let url = `${baseUrl}key=${apiKey}&targetDt=${dt}`;
    const mvType = document.querySelector('[type=radio]:checked').value;
    //
    try {
        if(mvType == 'k'){
            url += `&repNationCd=${mvType}`;

        }
        const rasp = await fetch(url);
        const data = await rasp.json();
        let tags = '';
        for (let item of data.boxOfficeResult.dailyBoxOfficeList) {
            tags = tags +
                `<li class="fetchLi">
                <span class="sp">${item.rank}</span>
                ${item.movieNm}
            </li>`;
        }
        ul.innerHTML = tags;
        console.log(data.boxOfficeResult.dailyBoxOfficeList)
    } catch (err) {

        console.log(err);
    }
    console.log(dt);
}

//포스터 가져오기
const getPoster = async (movieNm) => {
    let url = `${baseTMDBUrl}api_key=${rmdbApi}&query=${movieNm}`;

    const resp = await fetch(url);
    const data = await resp.json();

    // console.log('baseTMDBUrl',url, data.results[0].poster_path)
    if (data == undefined)
        posterArr.push('');
    else
        posterArr.push(data.results[0].poster_path);
}

//박스오피스 가져오기
const getBoxOfficeList = async () => {
    const mvType = document.querySelector('[type=radio]:checked').value;
    const dt = document.querySelector('[type=date]').value.replaceAll('-', '');
    console.log("mvType", mvType, dt)

    //포스터 배열 초기화
    posterArr = [];
    let url = `${baseMvUrl}&key=${mvApi}&targetDt=${dt}`;
    if (mvType == 'K' || mvType == 'F') {
        url = `${url}&repNationCd=${mvType}`;
    }

    //fetch
    const resp = await fetch(url);
    const data = await resp.json();
    const dailyBoxOfficeList = data.boxOfficeResult.dailyBoxOfficeList;

    let tags = '';
    for (let boxoffice of dailyBoxOfficeList) {

        await getPoster(boxoffice.movieNm);
    }


    console.log("posterArr", posterArr);
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
    const radios = document.querySelectorAll('[type=radio]');
    const bt = document.querySelector('button');
    const ul = document.querySelector('ul');

    //어제 날짜 
    const yesterday = getYesterday();
    inputDate.max = yesterday;
    inputDate.value = yesterday;


    //박스오피스 가져오기
    getBoxOfficeList();

    bt.addEventListener('click', (e) => {
        e.preventDefault();

        getBoxOfficeList();
        getFetch(inputDate.value.replaceAll('-', ''), ul);
        console.log(radios[0].value);

  });

    console.log(yesterday);
});