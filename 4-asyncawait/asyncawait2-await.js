/**
 * Przykład z awaitem
 */

async function writeUsersWithDetails() {
    try {
        const users = await readFile('./users.csv');
        const withDetails = await getDetails(parse(data));

        await writeFile('withDetails.csv', toCSV(withDetails));
    } catch (error) {
        console.error('Error: ', error);
    }
}

writeUsersWithDetails().then(() => console.log('The file has been saved!'));
