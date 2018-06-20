/**
 * await vs Promise.all
 */

function promise() {
    return Promise.all([promise1, promise2]);
}

// to NIE to samo co

async function asyncAwait() {
    const a = await promise1;
    const b = await promise2;

    return [a, b];
}
