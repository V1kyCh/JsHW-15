const users = [
    {
        name: 'user1',
        balance: 2344,
        friends: ['Max', 'Anton', 'Alina', 'Gosha'],
        skills: ['sing', 'dance']
    },
    {
        name: 'user2',
        balance: 6666,
        friends: ['Roxa', 'Roma'],
        skills: ['boxing', 'taekwondo']
    },
    {
        name: 'user3',
        balance: 1237,
        friends: ['Roma', 'Max', 'Vika'],
        skills: ['paint']
    },
]

// №1
const sumBalance = users.reduce((sum, obj) => sum + obj.balance, 0)
console.log(sumBalance);

// №2
const chooseFriend = 'Max';
const arrayNamesOfFriends = users.reduce((arr, obj) => {
    if (obj.friends.includes(chooseFriend)) {
        arr.push(obj.name);
    }
    return arr
}, [])
console.log(arrayNamesOfFriends);

// №3
const sortFriends = [...users].sort((currentEl, nextEl) => currentEl.friends.length - nextEl.friends.length)
console.log('Посортовано в порядку зростання', sortFriends);

// №4
const allSkills = [...users.reduce((arr, obj) => {
    arr.push(obj.skills)
    return arr
}, []).flat()].sort()
console.log(allSkills);