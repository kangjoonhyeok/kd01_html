const getFetch = () => {
    let apiKey = '';
    let baseUrl='http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?';
    let url = `${baseUrl}key=${apiKey}&targetDt=20250219`;


    //fetch API
    fetch(url)
        .then(rasp => console.log(rasp))
        .catch(err => console.log(err));


    console.log('getFetch',url);

}

document.addEventListener("DOMContentLoaded", () => {
    const bt = document.querySelector('button');

    bt.addEventListener('click', () => {
        getFetch();
    });
});