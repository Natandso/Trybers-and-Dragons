import Energy from '../Energy';

export interface SimpleFighter {
  lifePoints: number;
  strength: number;

  attack(enemy: SimpleFighter): void;
  receiveDamage(attackPoints: number): number
}

export interface Fighter extends SimpleFighter {
  defense: number;
  energy?: Energy;

  levelUp(): void;
  special?(enemy: Fighter): void;
}