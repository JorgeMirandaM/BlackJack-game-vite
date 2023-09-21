
import {requestCard, cardValue, createCardHTML } from './';



/**
 * Computer Turn
 * @param {Number} minimumPoints minumum points tha the pc needs to win
 * @param {HTMLElement} HTMLPoints HTML element to show the points
 * @param {HTMLElement} divCartasComputadora HTML element to show the cards
 * @param {Array<String>} deck 
 */
export const computerTurn = ( minimumPoints,HTMLPoints,divCartasComputadora, deck ) => {

    if(!minimumPoints) throw new Error('Minimum points are required');
    if(!deck) throw new Error('HTMLPoints argument is required');

    let pcPoints=0;

    do {
        const carta = requestCard(deck);

        pcPoints = pcPoints + cardValue( carta );
        HTMLPoints[1].innerText = pcPoints;
        
        const imgCarta=createCardHTML(carta);
        divCartasComputadora.append( imgCarta );

        if( minimumPoints > 21 ) {
            break;
        }

    } while(  (pcPoints < minimumPoints)  && (minimumPoints <= 21 ) );

    setTimeout(() => {
        if( pcPoints === minimumPoints ) {
            alert('Nobody wins :(');
        } else if ( minimumPoints > 21 ) {
            alert('Pc wins')
        } else if( pcPoints > 21 ) {
            alert('Player wins');
        } else {
            alert('Pc wins')
        }
    }, 100 );
}
