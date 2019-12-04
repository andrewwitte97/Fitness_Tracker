const users = {
    awitte97: {
        authentication: {
            username: 'awitte97',
            password: 'password',
        },
        profile: {
            firstname: 'Andrew',
            lastname: 'Witte',
            gender: 'male',
            age: 22
        },
        log: [
            {
                date: new Date('2019-12-5'),
                activity: 'Push-ups',
                description: '20 reps'

            },
            {
                date: new Date('2019-12-2'),
                activity: 'Run',
                description: '1 mile'
            }
        ]
    },
    test1: {
        authentication: {
            username: 'test1',
            password: 'password1',
        },
        profile: {
            firstname: 'test',
            lastname: 'test',
            gender: 'female',
            age: 25
        },
        log: [
            {
                date: new Date('2019-11-25'),
                activity: 'Sit-Ups',
                description: '50 reps'

            },
            {
                date: new Date('2019-11-20'),
                activity: 'Sprint',
                description: '1 mile'
            }
        ]
    }
};

module.exports = users;