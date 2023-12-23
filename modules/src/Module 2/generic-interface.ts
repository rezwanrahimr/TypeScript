// // Generic Interface

// interface CrushInterface<T, U = null> {
//     name: string,
//     husband: T,
//     marred?: U
// }


// const crush1: CrushInterface<boolean, { isMarred: boolean }> = {
//     name: 'Kate Winslet',
//     husband: true,
//     marred: {
//         isMarred: true
//     }
// }

// const crush2: CrushInterface<string, boolean> = {
//     name: 'kate winslet',
//     husband: 'sofik',
//     marred: true

// }

// interface HusbandInterface {
//     name: string,
//     age: number
// }

// const crush3: CrushInterface<HusbandInterface> = {
//     name: 'kate winslet',
//     husband: {
//         name: 'sofik',
//         age: 30
//     }
// }