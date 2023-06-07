class Hamster {

    constructor(owner, name, price){
        this.owner = "";
        this.name = name;
        this.price = 15;
    }
    wheelRun(){
        console.log("squeak squeak")
    
    }

    eatFood(){
        console.log("nibble nibble");
    }

    getPrice(){
        return this.price;
    }

}


class Person{

constructor(name, age, height, weight, mood, hamsters, bankAccount) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.weight = weight;
    this.mood = mood;
    this.hamsters = hamsters;
    this.bankAccount = bankAccount;
}

getName(){
    return this.name;
}

getAge(){
    return this.age;

}
getWeight(){
    return this.weight;
}

greet(){
    console.log(`Hello ${this.name}`)
}

eat(){
    this.weight++;
    this.mood++;
}

exercise(){
    this.weight--;
}

ageUp(){
    this.age++;
    this.height++;
    this.weight++;
    this.mood--;
    this.bankAccount += 10;
}

buyHamster(hamster) {
    this.hamsters.push(hamster);
    this.mood += 10;
    this.bankAccount -= hamster.getPrice();
  }

}

const timmy = new Person("Timmy", 5, 100, 50, "Happy", [], 0);

for (let i = 0; i < 5; i++) {
    timmy.ageUp();
  }
  
  for (let i = 0; i < 5; i++) {
    timmy.eat();
  }
  
  for (let i = 0; i < 5; i++) {
    timmy.exercise();
  }
  
  for (let i = 0; i < 4; i++) {
    timmy.ageUp();
  }
  
  const gus = new Hamster("Gus");
  gus.owner = "Timmy";
  timmy.buyHamster(gus);
  
  for (let i = 0; i < 6; i++) {
    timmy.ageUp();
  }
  
  for (let i = 0; i < 2; i++) {
    timmy.eat();
  }
  
  for (let i = 0; i < 2; i++) {
    timmy.exercise();
  }
  
  console.log(timmy);