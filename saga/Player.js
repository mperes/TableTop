//*---------------------------------------------------------------------
//* Player
//* By Miguel Peres (m.peres@gmail.com)
//*---------------------------------------------------------------------
class Player {
  constructor(isDM, deck, handSize, handContainer) {
    this.isDM = isDM;
    this._container = {hand: $(handContainer)};
    this._hand = [];
    this._deck = deck;
    this._maxHandSize = (isNaN(handSize)) ? 1 : handSize;
    this._handSize = this._maxHandSize;
    this._playing = false;
    this._trumped = false;
    this._numberOfCardsUsed = 0;
    this._maxNumberOfCardsPerAction = 1;
    this._resolvingDamage = false;
    this._damageCountStartAt = 0;

    const context = this;
    document.addEventListener('cardClickCallback', function (event) {
      let card = event.detail.card;
      let view = event.detail.view;
      switch(card._state) {
        case ON_PILE:
          if(!context._playing) return;
          if(context._numberOfCardsUsed === 0) return;
          context._deck.trump();
          context._trumped = true;
          break;
        case ON_HAND:
          if(context._resolvingDamage) {
            context._deck.play(context, card);
            context._handSize--;
          } else {
            if(context._numberOfCardsUsed < context._maxNumberOfCardsPerAction && context._playing) {
              context._deck.play(context, card);
              context._numberOfCardsUsed++;
            } else {
              card.flip();
            }
          }
          break;
        case ON_TABLE:
          if(context._resolvingDamage) {
            let index = context._deck.getCardIndex(context._deck._table, card._id);
            if(index >= context._damageCountStartAt) {
              context._deck.getBack(context, card);
              context._handSize++;
            }
          } else {
            if(!context._playing) return;
            if(!context._trumped) {
              context._deck.getBack(context, card);
              context._numberOfCardsUsed--;
            }
          }
          break;
        default:
      }
    }, false);

    //this._deck.draw(this._hand, this._container.hand, this._handSize);

    this.setupTurnButton();
  }
  heal(amount) {
    let healFor = Math.min(amount, this._maxHandSize-this._handSize);
    this._handSize += healFor;
    this._deck.draw(this._hand, this._container.hand, healFor, true);
    let percentage = this._handSize / this._maxHandSize * 100;
    this._deck._gameSession.sendMultiplayerAction(ACTION_NOTIFY_HEALTH, percentage.toString());
    this._deck._gameSession._playerList.updateHealth(this._deck._gameSession._sessionID, percentage);
  }
  setupTurnButton() {
    const context = this;
    $('#player-turn-begin').click((e) => {
      $('#player-turn').toggleClass('playing');
      this.beginTurn();
    });
    $('#player-turn-end').click((e) => {
      $('#player-turn').toggleClass('playing');
      this.endTurn();
    });
  }
  toggleTurn() {
    if(this._playing) {
      console.log('Your turn has finished');
      this.endTurn();
    } else {
      console.log('It is your turn!');
      this.beginTurn();
    }
  }
  beginTurn() {
    this._playing = true;
  }
  draw(hand, view, amount, propagate) {
    this._deck.draw(this._hand, this._container.hand, amount, true);
  }
  giveInitialHand() {
    this.draw(this._hand, this._container.hand, this._handSize, true);
  }
  endTurn() {
    this._deck.draw(this._hand, this._container.hand, this._numberOfCardsUsed, true);
    this._deck.sendCardFromTableToGraveyard(true);
    this._playing = false;
    this._trumped = false;
    this._numberOfCardsUsed = 0;
    if(this._resolvingDamage && this._handSize < this._maxHandSize) {
      this._resolvingDamage = false;
      let percentage = this._handSize / this._maxHandSize * 100;
      this._deck._gameSession.sendMultiplayerAction(ACTION_NOTIFY_HEALTH, percentage.toString());
      this._deck._gameSession._playerList.updateHealth(this._deck._gameSession._sessionID, percentage);
    }
  }
  receiveDamage() {
    this._damageCountStartAt = this._deck._table.length;
    this._resolvingDamage = true;
  }
}
