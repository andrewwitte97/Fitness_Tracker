const users = {
    awitte97: {
        profile: {
        username: 'awitte97',
        password: 'password',
        firstname: 'Andrew',
        lastname: 'Witte',
        gender: 'Male',
        age: 22,
        log: [
            {
                date: new Date('2019-11-6'),
                exercize: 'Push-ups',
                reps: 30

            },
            {
                date: new Date('2019-11-6'),
                exercize: 'Run',
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
                exercize: 'Sit-ups',
                reps: 50
            },
            {
                date: new Date('2019-11-2'),
                exercize: 'Shoulder press',
                weightInLbs: 20
            }
        ]
    }
    }
};

module.exports = users;