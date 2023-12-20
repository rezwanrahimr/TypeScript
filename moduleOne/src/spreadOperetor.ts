// ts spread operator
const myFriends = ['rezwan', 'rahim', 'rupak'];
const newFriends = ['fahim', 'karim'];
myFriends.push(...newFriends);
console.log(myFriends);



// ts rest parameter
function friends(...friends: string[]): void {
    return friends.forEach((friend) => console.log(`Hi ${friend}`))
}

friends('rezwan', 'rahim', 'rupak');