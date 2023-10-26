import Race from './Race';

export default class Dwarf extends Race {
  static instanceCount = 0;
  _maxLifePoints = 80;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf.instanceCount += 1;
  }
  
  static createdRacesInstances(): number {
    return Dwarf.instanceCount;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
