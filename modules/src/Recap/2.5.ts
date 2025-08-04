// function with generics

const createArray = (param: string) => {
    return [param];
}

const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
}

const resGeneric = createArrayWithGeneric<{ name: string, age: number }>({ name: 'rezwan', age: 23 });
console.log('output', resGeneric);


const addCourseToStudent = <T>(student: T) => {
    const course = 'Next Level Web Development';

    return {
        ...student,
        course
    }
}

const student1 = addCourseToStudent({
    name: 'Rezwan Rahim Rupak',
    email: 'rezwanrahim.rupak@gmail.com',
    isActive: true
})