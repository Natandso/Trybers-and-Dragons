import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  static archeTypeInstances = 0;
  _energyType: EnergyType = 'mana';

  constructor(
    name: string,
    special = 0,
    cost = 0,
  ) {
    super(name, special, cost);
    Necromancer.archeTypeInstances += 1;
  }

  static createdArchetypeInstances():number {
    return Necromancer.archeTypeInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}