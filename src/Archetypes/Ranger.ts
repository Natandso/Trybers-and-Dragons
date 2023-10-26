import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  static archeTypeInstances = 0;
  _energyType: EnergyType = 'stamina';

  constructor(
    name: string,
    special = 0,
    cost = 0,
  ) {
    super(name, special, cost);
    Ranger.archeTypeInstances += 1;
  }

  static createdArchetypeInstances():number {
    return Ranger.archeTypeInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}