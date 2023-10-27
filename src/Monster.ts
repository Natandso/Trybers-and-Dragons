import { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  private _lifePoints = 85;
  readonly strength = 63;

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this.strength);
  }

  receiveDamage(attackPoints: number): number {
    if (this._lifePoints <= 0) {
      return -1;
    }
    this._lifePoints -= attackPoints;
    return this._lifePoints;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }
}