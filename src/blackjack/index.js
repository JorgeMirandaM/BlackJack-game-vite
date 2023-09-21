import _ from 'underscore';

import {cardValue,createDeck,requestCard,computerTurn,createCardHTML} from './usecases';


/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

let deck         = [];
const typesOfCards  = ['C','D','H','S'];
const SpeciaTypes = ['A','J','Q','K'];

let playerPoints = 0,
    pcPoints = 0;

// Referencias del HTML
const btnRequests   = document.querySelector('#btnRequests');
const btnStop = document.querySelector('#btnStop');
const btnNew   = document.querySelector('#btnNew');

const divCartasJugador     = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');

const HTMLPoints = document.querySelectorAll('small');



deck=createDeck(typesOfCards,SpeciaTypes);







// Eventos
btnRequests.addEventListener('click', () => {

    const carta = requestCard(deck);
    
    playerPoints = playerPoints + cardValue( carta );
    HTMLPoints[0].innerText = playerPoints;
    
    const imgCarta=createCardHTML(carta);
    divCartasJugador.append( imgCarta );

    if ( playerPoints > 21 ) {
        console.warn('Lo siento mucho, perdiste');
        btnRequests.disabled   = true;
        btnStop.disabled = true;
        computerTurn( playerPoints, HTMLPoints, divCartasComputadora,deck);

    } else if ( playerPoints === 21 ) {
        console.warn('21, genial!');
        btnRequests.disabled   = true;
        btnStop.disabled = true;
        computerTurn( playerPoints, HTMLPoints, divCartasComputadora,deck);
    }

});


btnStop.addEventListener('click', () => {
    btnRequests.disabled   = true;
    btnStop.disabled = true;

    computerTurn( playerPoints, HTMLPoints, divCartasComputadora,deck);
});

btnNew.addEventListener('click', () => {

    console.clear();
    deck = [];
    deck=createDeck(typesOfCards,SpeciaTypes);

    playerPoints     = 0;
    pcPoints = 0;
    
    HTMLPoints[0].innerText = 0;
    HTMLPoints[1].innerText = 0;

    divCartasComputadora.innerHTML = '';
    divCartasJugador.innerHTML = '';

    btnRequests.disabled   = false;
    btnStop.disabled = false;

});

