{
    type TUser = {
        name: string;
        location: string;
    }

    type phoneNumber = TUser & { phoneNumber: string[] };

    interface User {
        name: string;
        location: string;
    }

    interface UpdatedUser extends User {
        age: number;
    }

    // typescript intersection
    const user: UpdatedUser = {
        name: "Rezwan Rahim",
        location: "Dhaka, Bangladesh",
        age: 30
    }

}