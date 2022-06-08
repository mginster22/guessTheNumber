// function Cat(name, age, color, breed) {
//   this.name = name;
//   this.age = age;
//   this.color = color;
//   this.breed = breed;
//   this.say = function () {
//     return "meow";
//   };
//   this.run = function () {
//     return this.name + " " + "i'm run";
//   };
// }
// const cat1 = new Cat("Mucha", "gray", 2, "false");
// console.log(cat1);

// function Country(name, population, area) {
//   this.name = name;
//   this.population = population;
//   this.area = area;
//   this.getDencity = function () {
//     return this.population / this.area;
//   };
// }
// const country = new Country("Ukraine", 44300000, 603548);

// console.log(country.getDencity());
// function Kettle(maxVolume = 1000) {
//   this.maxVolume = maxVolume;
//   this.volume = 0;

//   this.addWater = function (value) {
//     if (this.volume + value <= this.maxVolume) {
//       this.volume += value;
//     } else {
//       console.log("rest:", value - (this.maxVolume - this.volume));
//       this.volume = this.maxVolume;
//     }
//     return this.volume;
//   };
//   this.drainWater = function (value) {
//     if (this.volume - value <= this.maxVolume) {
//       this.volume += value;
//     } else {
//       console.log("stop:", value - (this.maxVolume - this.volume));
//       this.volume = this.maxVolume;
//     }
//     return this.volume;
//   };
// }
// const pot = new Kettle(200);
// console.log(pot.drainWater(-10));
const secterNumber = 22;
let attempt = 0;
const guessTheNumber = function () {
  for (i = 1; i++; ) {
    let user = prompt("Enter Number");
    if (isNaN(user)) {
      console.log("ERROR-You loose,only number");
      break;
    } else if (user < secterNumber) {
      console.log("cold:-<");
    } else if (user > secterNumber) {
      console.log("hot:)");
    } else {
      console.log("LUCKYY!");
      console.log("how many attempts???" + " " + attempt++);
      break;
    }
    attempt++;
  }
};
guessTheNumber();
