import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

type CharacterStats = {
  race: Race;
  archeType: Archetype;
  maxLifePoints: number;
  lifePoints: number;
  strength: number;
  defense: number;
  dexterity: number;
  energy: Energy
};

const randomDexterity = getRandomInt(1, 10);
const randomNumber = () => getRandomInt(1, 10);
const raceElf = new Elf('Elf', randomDexterity);
const mageClass = new Mage('Mage');

const statsDefault: CharacterStats = {
  archeType: new Mage('Mage'),
  race: new Elf('Elf', randomDexterity),
  maxLifePoints: raceElf.maxLifePoints / 2,
  lifePoints: raceElf.maxLifePoints / 2,
  defense: randomNumber(),
  dexterity: randomNumber(),
  strength: randomNumber(),
  energy: {
    type_: mageClass.energyType,
    amount: randomNumber(),
  },
};

export default class Character implements Fighter {
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  readonly race: Race;
  readonly archetype: Archetype;
  constructor(
    readonly name: string,
    stats: CharacterStats = statsDefault,
  ) {
    this._maxLifePoints = stats.maxLifePoints;
    this._lifePoints = stats.lifePoints;
    this._strength = stats.strength;
    this._defense = stats.defense;
    this._dexterity = stats.dexterity;
    this._energy = stats.energy;
    this.race = stats.race;
    this.archetype = stats.archeType;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get energy(): Energy {
    return { ...this._energy };
  }

  setLifePoints(value: number): void {
    this._lifePoints = Math.max(value, 0) || -1;
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  special?(enemy: Fighter): void {
    if (this.energy.amount < this.archetype.cost) {
      throw new Error('Not enough energy');
    }

    enemy.receiveDamage(this._strength + this.archetype.special);
    this._energy.amount -= this.archetype.cost;
  }

  levelUp(): void {
    this._maxLifePoints = Math.min(
      randomNumber() + this._maxLifePoints,
      this.race.maxLifePoints,
    );

    this._strength += randomNumber();
    this._defense += randomNumber();
    this._dexterity += randomNumber();
    this._lifePoints = this._maxLifePoints;
    this._energy.amount = 10;
  }

  receiveDamage(attackPoints: number): number {
    const damage = Math.max(attackPoints - this._defense, 0) || 1;
    const remainingLife = this._lifePoints - damage;

    this.setLifePoints(remainingLife);

    return this._lifePoints;
  }
}