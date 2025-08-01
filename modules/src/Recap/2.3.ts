{

    // generic type

    type GenericArray<T> = Array<T>

    // const rollNumbers : number[] = [1,2,3,4,5];
    const rollNumbers: GenericArray<number> = [1, 2, 3, 4, 5];

    // const mentors: string[] = ['Rezwan', 'John', 'Doe'];
    const mentors: GenericArray<string> = ['Rezwan', 'John', 'Doe'];

    // const boolArray: boolean[] = [true, false, true];
    const boolArray: GenericArray<boolean> = [true, false, true];

    const user: GenericArray<{ name: string, location: string }> = [{
        name: 'Rezwan Rahim',
        location: 'Mohammadpur,Dhaka'
    }]

    type GenericTuple<X, Y> = [X, Y];

    const manush: GenericTuple<number, { name: string, email: string }> = [1234, {
        name: 'Rezwan Rahim', email: 'Rezwanrahim99@gmail.com'
    }]

}