const Cafe = require('../src/index');

const c = new Cafe.Client('', {log: false});

const profile = c.prices('287400303941124096', 3);

profile.then(user => {
    console.log();
});




