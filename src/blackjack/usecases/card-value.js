


/**
 * This function allows you the value card
 * @param {String} carta is a card (string)
 * @returns {number} return the value card
 */
export const cardValue = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}