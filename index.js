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
        skills: ['boxing','taekwondo']
    },
    {
        name: 'user3',
        balance: 1237,
        friends: ['Roma', 'Max', 'Vika'],
        skills: ['paint']
    },
]

// №1
let sumBalance = 0;
users.map(object => object.balance).forEach(balance => sumBalance += balance);
console.log(sumBalance);

// №2
const chooseFriend = 'Max';
const arrayNamesOfFriend = users.filter(object => object.friends.some(friendName => friendName === chooseFriend)).map(object => object.name);
console.log(arrayNamesOfFriend);

// №3
const sortFriends = [...users].sort((currentEl, nextEl) => currentEl.friends.length - nextEl.friends.length)
console.log('Посортовано в порядку зростання', sortFriends);

// №4
const allSkills = [...users.map(object => object.skills).flat()].sort();
console.log(allSkills);