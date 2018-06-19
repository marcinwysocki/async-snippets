/**
 * Komponowanie Promisów - równoległe wykonanie
 */

Promise.all([getUsers(), getOffers(), getContacts()]).then(
    ([users, offers, contacts]) =>
        users.map(user => ({
            ...user,
            offers: offers[user.id],
            contacts: contacts[user.id],
        })),
);

Promise.race([getUsers(), timeout(500)]).catch(console.error); // Request has timed out!
