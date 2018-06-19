/**
 * Callback hell to nie tylko wcięcia
 */

fs.readFile('./users.csv', handleReadFile);

function handleReadFile(err, users) {
    if (err) {
        throw err;
    }

    const parsed = parse(data);
    getDetails(users, handleGetDetails);
}

function handleGetDetails(err, usersWithDetails) {
    if (err) {
        throw err;
    }

    const csv = toCSV(usersWithDetails);
    fs.writeFile('withDetails.csv', csv, handleWriteFile);
}

function handleWriteFile(err) {
    if (err) {
        throw err;
    }

    console.log('The file has been saved!');
}
