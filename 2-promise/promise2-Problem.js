/**
 * Dość częsty błąd - to nadal callbacki i operacje asynchroniczne!
 */

function asyncFunc() {
    return Promise.resolve(5);
}

it('resolves with "Hello CodeMeetings!"', () => {
    asyncFunc().then(value => {
        expect(value).toBe('Hello CodeMeetings!');
    });
});
