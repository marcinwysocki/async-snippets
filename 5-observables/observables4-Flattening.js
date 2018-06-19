/**
 * Spłaszczanie strumieni
 */

const buttonClicks = Observable.fromEvent(fetchDataButton, 'click');

const fetchedUsers = buttonClicks.map(() =>
    Observable.fromPromise(ajaxService.fetchData())
        .map(({ data: { fullName, id, age } }) => ({
            id,
            fullName,
            age,
        }))
        .retry(2),
);
// fetchedUsers: Observable<Observable<User>>

/**
 * Użycie jednej ze strategii
 */

buttonClicks
    .map(() =>
        Observable.fromPromise(ajaxService.fetchData())
            .map(({ data: { fullName, id, age } }) => ({
                id,
                fullName,
                age,
            }))
            .retry(2),
    )
    .exhaust()
    .subscribe(user => {
        console.log(`${user.fullName} is ${age} years old!`);
    });

/**
 * Skrót
 */

buttonClicks
    .exhaustMap(() =>
        Observable.fromPromise(ajaxService.fetchData())
            .map(({ data: { fullName, id, age } }) => ({
                id,
                fullName,
                age,
            }))
            .retry(2),
    )
    .subscribe(user => {
        console.log(`${user.fullName} is ${age} years old!`);
    });
