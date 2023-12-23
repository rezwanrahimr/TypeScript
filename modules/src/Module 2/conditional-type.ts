// A type is dependent on another type

type a1 = null;
type a3 = null;


type a2 = a1 extends string ? string : null;

//  nested conditional type
type a4 = a1 extends number ? number : a3 extends undefined ? string : null