// 국토교통부_(TAGO)_공유 퍼스널모빌리티정보 서비스 - 지역별 운영사기반 공유전동킥보드 목록 조회
// refer from : https://www.data.go.kr/tcs/dss/selectApiDataDetailView.do?publicDataPk=15117668#/
// learning after object
// const mobility_array = [      // const : 변수 선언(한번 선언되면 변경 불가)
//     {battery: "25", citycode: "12", cityname: "세종특별시", latitude: "36.09207", longitude: "128.445125", providername: "SWING", vehicleid: "cl6bj0mr3018ub6pkecix9bd8"}
//     , {battery: "99",citycode: "12",cityname: "세종특별시",latitude: "36.291605",longitude: "127.339351666667",providername: "SWING",vehicleid: "cl6a26rq900i4uipkg7o181xn"}
//     , {battery: "60",citycode: "12",cityname: "세종특별시",latitude: "36.469165",longitude: "127.273525",providername: "SWING",vehicleid: "cl5hqncir005qfgpkbyj869gr"}
//     , {battery: "77",citycode: "12",cityname: "세종특별시",latitude: "36.471605",longitude: "127.271645",providername: "SWING",vehicleid: "cl6a26p0p00e4uipk1jl3d9u2"}
//     , {battery: "88",citycode: "12",cityname: "세종특별시",latitude: "36.474795",longitude: "127.280535",providername: "SWING",vehicleid: "cl6a26npr00cfuipkf8ie41h2"}
// ]       // dict 선언하고 object로 돌림


// fetch
let service_list = document.querySelector("#check");
service_list.addEventListener('click', async (event) => {
  let url = `https://apis.data.go.kr/1613000/PersonalMobilityInfoService/getPMListByProvider?serviceKey=wnv1AZgzQFIwUkVk8jaEll6P%2F89YW%2Bsft7aQQXNYv1WLsP8xAuc%2FnMAy9YAJu7MGgqYtTYOuyqCXl5YKKeVQAg%3D%3D&pageNo=1&numOfRows=10&_type=json&providerName=SWING&cityCode=12`;
  let options = {}; // options - python dict과 유사
  try {
    let response = await fetch(url, options);  // # send

    let result = await response.json(); // # 응답  // 내부에 있는 내용이 json으로 바뀌는 자바스크립트 역할

    console.log(`response result : ${result}`)
    const mobility_array = result['response']['body']['items']['item'];
    let mobility_info_list = "";   // "" : str
    for (let mobility_object of mobility_array) {
      mobility_info_list = `${mobility_info_list}<tr><td>${mobility_object["battery"]}</td>
    <td>${mobility_object["citycode"]}</td><td>${mobility_object["cityname"]}</td>
    <td>${mobility_object["latitude"]}</td><td>${mobility_object["longitude"]}</td>
    <td>${mobility_object["providername"]}</td><td>${mobility_object["vehicleid"]}</td></tr>`;
    }

    let mobility_element = document.querySelector('#mobility_array_id')
    mobility_element.innerHTML = mobility_info_list;
  } catch (error) {
    console.log(`Error Message : ${error.message}`)
  }
});
