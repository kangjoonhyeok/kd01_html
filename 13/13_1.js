/*  .then
const getFetch = () => {
    let apiKey = 'b2de8d2086e4712724ce826185cd9d21';
    let baseUrl='http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?';
    let url = `${baseUrl}key=${apiKey}&targetDt=20250219`;


    //fetch API
    fetch(url)
        .then(rasp => rasp.json())
        .then(data => console.log(data.boxOfficeResult.dailyBoxOfficeList))
        .catch(err => console.log(err));


    console.log('getFetch',url);

}
*/

const getFetch = async() => {
    let apiKey = 'b2de8d2086e4712724ce826185cd9d21';
    let baseUrl='http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?';
    let url = `${baseUrl}key=${apiKey}&targetDt=20250219`;


    //fetch API
    try{
        const rasp = await fetch(url);
        const data = await rasp.json();
        console.log(data.boxOfficeResult.dailyBoxOfficeList)
    }catch(err){

        console.log(err);
    }

    console.log('getFetch',url);

}


document.addEventListener("DOMContentLoaded", () => {
    const bt = document.querySelector('button');

    bt.addEventListener('click', () => {
        getFetch();
    });
});