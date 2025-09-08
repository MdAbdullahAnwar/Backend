const fs = require('fs');
const path = require('path');

const readingDataFromFile = () => {
    const filePath = path.join(__dirname, '../data/user.json');
    const data = fs.readFileSync(filePath, 'utf-8');
    let users = JSON.parse(data);

    return users;
}

const sortingValuesUsingParams = (req, users) => {
    if(req.age){
        const age = parseInt(req.age);
        users = users.filter(user => user.age === age);
    }

    // Sort users by username if required
    if(req.sortBy === 'username'){
        users.sort((a,b) => a.username.localeCompare(b.username));
    }

    return users;
}

module.exports = {
    readingDataFromFile,
    sortingValuesUsingParams
}