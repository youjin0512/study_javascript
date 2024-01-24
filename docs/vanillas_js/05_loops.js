// for문 (요즘은 안쓰는 옛날 방식)
for (let i=0; i<10; i++){  
}
// i<10 : i가 10 이전이 될때까지 돌린다,   i++ : i가 하나씩 증가


// 리터럴(literal) 방식(리스트 사용) 기본 구문
let list = []
for (let param of list) {  // ~의 ~.

}

// learning after object
const animals_array = [                      // const : 변수 선언(한번 선언되면 변경 불가)
    { name: "dog", species: "canine" },     // dict 선언하고 object로 돌림
    { name: "cat", species: "feline" },
    { name: "bird", species: "avian" },
    { name: "fish", species: "aquatic" },
    { name: "lizard", species: "reptile" },
  ];

for (let animal_object of animals_array) {
    console.log(animal_object);
}