import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  static archeTypeInstances = 0;
  _energyType: EnergyType = 'stamina';

  constructor(
    name: string,
    special = 0,
    cost = 0,
  ) {
    super(name, special, cost);
    Warrior.archeTypeInstances += 1;
  }

  static createdArchetypeInstances():number {
    return Warrior.archeTypeInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}