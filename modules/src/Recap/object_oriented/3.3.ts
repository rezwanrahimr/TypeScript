{
    // type guard

    // typeof --> type guard

    type Alphanewmeric = string | number;

    const add = (param1: Alphanewmeric, param2: Alphanewmeric): Alphanewmeric => {

        if (typeof param1 === 'number' && typeof param2 === 'number') {
            return param1 + param2;
        } else {
            return param1.toString() + param2.toString()
        }
    }

    const result = add(5, 5);
    console.log(result);


    // is guard

    type NormalUser = {
        name: string
    }

    type AdminUser = {
        name: string;
        role: 'admin'
    }

    const getUser = (user: NormalUser | AdminUser) => {
        if ("role" in user) {
            console.log(`my name is ${user.name} and my role is ${user.role}`);
        } else {
            console.log(`my name is ${user.name}`);
        }
    }

    const user1 = getUser({name:"Rezwan"});
    const user2 = getUser({name:"Rezwan",role:"admin"});
}