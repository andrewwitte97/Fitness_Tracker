const users = {
    awitte: {
        profile: {
        username: 'awitte',
        password: 'password',
        firstname: 'Andrew',
        lastname: 'Witte',
        gender: 'Male',
        age: 22,
        log: [
            {
                date: new Date('2019-11-6'),
                excersize: 'Push-ups',
                reps: 30

            },
            {
                date: new Date('2019-11-6'),
                excersize: 'Run',
                distanceInMiles: 4
            },
        ]
    }
    },
    bob1: {
        profile: {
        username: 'bob',
        password: 'passwordbob',
        firstname: 'Bob',
        lastname: 'Bo',
        gender: 'Male',
        age: 21,
        log: [
            {
                date: new Date('2019-11-2'),
                excersize: 'Sit-ups',
                reps: 50
            },
            {
                date: new Date('2019-11-2'),
                excersize: 'Shoulder press',
                weightInLbs: 20
            }
        ]
    }
    }
};

module.exports = users;