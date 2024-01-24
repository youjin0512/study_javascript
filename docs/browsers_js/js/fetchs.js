// fecth() 기본 문법
// async (params) => {
//     try {
//         let response = await fetch(url, options)
//     } catch (error) {
//         console.log(`Error Message : ${error.message}`)
//     }
// }
// # await 비동기방식, 하나의 코드가 모든 시간을 잡아먹는것을 방지하는 기능

// from data.go.kr with loan rate
let rate_list = document.querySelector("#rent-loan-rate-info_rate-list");
rate_list.addEventListener('click', async (event) => {
    let url = `https://apis.data.go.kr/B551408/rent-loan-rate-info/rate-list?serviceKey=BoygPZjC27pxm92hSposjnSob2u36vziS1rzIzxkrL9QxmlhB0SMARwLfNlBE3wrE7nnw34zLmmv0a6amvW4xg%3D%3D&pageNo=1&numOfRows=30&dataType=JSON`;
    let options = {}; // options - python dict과 유사
    try {
        let response = await fetch(url, options);  // # send

        let result = await response.json(); // # 응답  // json으로 바꾸는 자바스크립트 역할

        console.log(`response result : ${result}`)

        let contents = document.querySelector("#rent-loan-rate-info_rate-list_contents")
        contents.innerHTML = result['header']['resultMsg'];  // 포스트맨의 resultMsg 값 가져오기
    } catch (error) {
        console.log(`Error Message : ${error.message}`)
    }
});

// datalab_shoppinginsite from naver api
let shopping_insite = document.querySelector("#datalab_shopping_insite");
shopping_insite.addEventListener('click', async (event) => {
    let url = `https://openapi.naver.com/v1/datalab/shopping/categories`;
    let data = {
        "startDate": "2023-08-01",
        "endDate": "2023-09-30",
        "timeUnit": "month",
        "category": [
            {"name": "패션의류", "param": [ "50000000"]},
            {"name": "화장품/미용", "param": [ "50000002"]}
        ],
        "device": "pc",
        "gender": "f",
        "ages": [ "20",  "30"]
      }
    let options = {
        method : "POST"
        , headers : {
            "X-Naver-Client-Id" : "lyeZsQLthDvwuAFBTYjP"
            , "X-Naver-Client-Secret" : "jqdYaPCJiX"
            , "Content-Type" : "application/json"
        }
        , body : JSON.stringify(data)  // POST, PUT, DEL, GET 중 하나일 때 이렇게 쓴다
    }; // options - python dict과 유사
    try {
        let response = await fetch(url, options);  // # send

        let result = await response.json(); // # 응답  // json으로 바꾸는 자바스크립트 역할

        console.log(`response result : ${result}`)

        let contents = document.querySelector("#datalab_shoppinginsite_contents")
        contents.innerHTML = result['endDate'];  // 포스트맨의 resultMsg 값 가져오기
    } catch (error) {
        console.log(`Error Message : ${error.message}`)
    }
});