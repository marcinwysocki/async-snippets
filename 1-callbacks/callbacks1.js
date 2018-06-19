/**
 * Podstawowy przykład z dokumentacji Node.js,
 * operacja jednorazowa
 */

fs.readFile('/etc/passwd', (err, data) => {
    if (err) throw err;
    console.log(data);
});

/**
 * Obsługa powtarzających się zdarzeń
 */

setInterval(() => {
    console.log('tick-tock');
}, 1000);
