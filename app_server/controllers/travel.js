var fs = require('fs');

console.log("Loading JSON from:", __dirname);
var trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));
console.log("Trips loaded:", trips);

const travel = (req, res) => {
    res.render('travel', { 
        title: 'Travlr Getaways',
        trips
    });
};

module.exports = {
    travel
};
