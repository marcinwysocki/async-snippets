/**
 * Promise - operacje bezpośrednio na przyszłych wartościach,
 * brak zagnieżdżeń, prostsza obsługa błędów
 */

readFile('./users.csv')
    .then(users => getDetails(parse(data)))
    .then(withDetails => writeFile('withDetails.csv', toCSV(withDetails)))
    .then(() => console.log('The file has been saved!'))
    .catch(err => console.error('Error: ', err));
