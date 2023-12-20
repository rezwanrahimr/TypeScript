// ts type alis

type UserType = {
  name: string;
  age?: number;
  location: string;
  profession: string;
};

const userOne: UserType = {
  name: "Rezwan Rahim",
  age: 23,
  location: "Dhaka",
  profession: "Jr Developer",
};

const userTwo: UserType = {
  name: "Rezwan Rahim Rupak",
  location: "Dhaka",
  profession: "Jr Developer",
};

console.log(userOne);
