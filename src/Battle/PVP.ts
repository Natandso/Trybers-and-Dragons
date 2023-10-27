import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(
    readonly player1: Fighter,
    readonly player2: Fighter,
  ) {
    super(player1);
    this.player1 = player1;
    this.player2 = player2;
  }

  fight(): number {
    let yourTurn = Math.random() > 0.5;  

    while (this.areYouALive()) {
      const attacking = yourTurn ? this.player1 : this.player2;
      const defensing = yourTurn ? this.player2 : this.player1;

      attacking.attack(defensing);
      yourTurn = !yourTurn;
    }

    return super.fight();
  }

  areYouALive(): boolean {
    return this.player1.lifePoints > 0
    && this.player2.lifePoints > 0;
  }
}