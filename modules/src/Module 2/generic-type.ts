// TypeScript Generic Type
type GenericArray<T> = Array<T>;
type GenericArray2<x, y> = [x, y];


const rollNumbers: number[] = [2, 3, 4];
const rollNumbers2: GenericArray<number> = [2, 3, 4];

const rollNumberString: string[] = ['22', '23'];
const rollNumberString2: GenericArray<string> = ['22', '23'];

const isRollNumbers: boolean[] = [true, false];
const isRollNumbers2: GenericArray<boolean> = [true, false];

const students: object[] = [{ name: 'rezwan rahim', roll: 1 }, { name: 'rezwan rahim rupak', roll: 2 }];

const students2: GenericArray<{ name: string, roll: number }> = [{ name: 'rezwan rahim', roll: 23 }];

const relationWithSalary: GenericArray2<{ name: string, salary: number }, string> = [{ name: 'Rezwan Rahim', salary: 200000 }, 'Toma'];

