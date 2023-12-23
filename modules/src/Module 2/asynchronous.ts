// const makePromise = (): Promise<string> => {
//     return new Promise<string>((resolve, reject) => {
//         const data: string = 'Data is fetch';
//         if (data) {
//             resolve(data);
//         }
//         else {
//             reject('fetch fail')
//         }
//     })
// }


// const getPromise = async (): Promise<string> => {
//     const data = await makePromise();
//     return data;
// }

// interface ITodo {
//     userId: number,
//     id: number,
//     title: string,
//     completed: boolean
// }

// // Load PlaceHolder data using async function 
// const getToDo = async (): Promise<ITodo> => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     return await response.json();
// }

// const getResult = async () => {
//     const result = await getToDo();
//     console.log(result)
// }
// getResult()