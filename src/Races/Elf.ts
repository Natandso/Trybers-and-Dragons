import Race from './Race';

export default class Elf extends Race {
  static instanceCount = 0;
  _maxLifePoints = 99;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf.instanceCount += 1;
  }
  
  static createdRacesInstances(): number {
    return Elf.instanceCount;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
