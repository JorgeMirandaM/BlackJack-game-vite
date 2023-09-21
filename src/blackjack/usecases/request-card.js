
/**
 * This function allows you to take a card
 * @param {Array<String>} deck is a string array
 * @returns {String} return the card deck
 */
export const requestCard = (deck) => {

    if (!deck || deck.length === 0 ) {
        throw 'There are not cards in the deck';
    }
    const card = deck.pop();
    return card;
}