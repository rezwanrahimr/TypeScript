{

    const addToCourse = <T extends { id: number, name: string, email: string }>(student: T) => {
        const course = 'Data Structure and Algorithm';

        return {
            ...student,
            course
        }
    }

    const student1 = addToCourse({
        id: 1,
        name: 'Rezwan Rahim Rupak',
        email: 'rezwanrahim99@gmail.com',
        age: 24,
        location: 'Dhaka,Bangladesh'
    })

    const student2 = addToCourse({
        id: 2,
        name: 'Pulok Hasan',
        email: 'pulokhasan@gmail.com',
        age: 25,
        location: 'Feni,Bangladesh'
    })

    console.log([student1, student2]);
}