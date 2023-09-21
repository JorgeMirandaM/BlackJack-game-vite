import _ from 'underscore';


/**
 * This function creates a new deck
 * @param {Array<String>} typesOfCards Example: ['C','D','H','S']
 * @param {Array<String>} SpeciaTypes Example: ['A','J','Q','K']
 * @returns {Array<String>} return a new card deck
 */
export const createDeck = (typesOfCards,SpeciaTypes) => {

    if( !typesOfCards || typesOfCards.length===0) throw new Error('tiposDeCarta is required as a string array');

    if( !SpeciaTypes || SpeciaTypes.length===0) throw new Error('tiposEspeciales is required as a string array');

    let deck=[];

    for( let i = 2; i <= 10; i++ ) {
        for( let type of typesOfCards ) {
            deck.push( i + type);
        }
    }

    for( let type of typesOfCards ) {
        for( let esp of SpeciaTypes ) {
            deck.push( esp + type);
        }
    }
    deck = _.shuffle( deck );
    return deck;
}