import Race from './Race';

export default class Halfling extends Race {
  static instanceCount = 0;
  _maxLifePoints = 60;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling.instanceCount += 1;
  }
  
  static createdRacesInstances(): number {
    return Halfling.instanceCount;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
