

class Fighter {
  constructor(name, weapon, superPowers, armor, sloganSaying) {
    this.name = name;
    this.weapon = weapon;
    this.superPowers = superPowers;
    this.armor = armor;
    this.sloganSaying = sloganSaying;
    this.health = 100;
  }

  slogan () {
    console.log (this.sloganSaying);
  }

  strike() {

  }
}


var fighter1 = new Fighter("Rex", "sword", ["speed", "fire"], "steel", "Prepare to Die");
var fighter2 = new Fighter("Asher Dasher", "arrow", ["cutness", 'song'], 'diamond', 'Diamonds are forever' );
