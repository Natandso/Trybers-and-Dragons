import Race from './Race';

export default class Orc extends Race {
  static instanceCount = 0;
  _maxLifePoints = 74;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc.instanceCount += 1;
  }
  
  static createdRacesInstances(): number {
    return Orc.instanceCount;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
