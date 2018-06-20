/**
 * Pyramid of Doom
 */

fs.readFile('./users.csv', (err, users) => {
    if (err) {
        throw err;
    }

    const parsed = parse(users);
    getDetails(parsed, (err, usersWithDetails) => {
        if (err) {
            throw err;
        }

        const csv = toCSV(usersWithDetails);
        fs.writeFile('withDetails.csv', csv, err => {
            if (err) {
                throw err;
            }

            console.log('The file has been saved!');
        });
    });
});
