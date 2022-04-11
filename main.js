// ამ დავალებაში ცოტა ვერ გავარკვიე
// დავალება 1
const currentDay = new Date().getDay();

switch (currentDay) {
  case 0:
    console.log("კვირა");
    break;
  case 1:
    console.log("ორშაბათი");
    break;
  case 2:
    console.log("სამშაბათი");
    break;
  case 3:
    console.log("ოთხშაბათი");
    break;
  case 4:
    console.log("ხუთშაბათი");
    break;
  case 5:
    console.log("პარასკევი");
    break;
  case 6:
    console.log("შაბათი");
    break;
  default:
    console.log("შეცდომა");
    break;
}
// დავალება #2
for (var i = 0; i < 100; i++) {
  console.log(i);
}
// დავალება 3
var i = 0;
while (i < 50) {
  console.log(i);
  i++;
}
// დავალება 4
do {
  console.log(i);
  i++;
} while (i < 150);
// დავალება 5
let myArray = [];

for (let i = 1; i <= 1000; i++) {
    myArray.push(i*i)
}
console.log(myArray)

do {
    i++
    myArray.push(i*i)
} while (i < 1000);

console.log(myArray);

while (i < 1000){
    i++
    myArray.push(i*i)
}

console.log(myArray);