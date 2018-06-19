/**
 * Testy bez false positives
 */

it('resolves with "Hello CodeMeetings!"', done => {
    asyncFunc().then(value => {
        expect(value).toBe('Hello CodeMeetings!');
        done();
    });
});

it('resolves with "Hello CodeMeetings!"', () => {
    return asyncFunc().then(value => {
        expect(value).toBe('Hello CodeMeetings!');
    });
});
