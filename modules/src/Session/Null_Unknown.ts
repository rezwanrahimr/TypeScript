// TypeScript Null
const nullCheck = (data: string | null) => {
    if (typeof data === 'string') {
        console.log("success");
    }
    else {
        console.log("somthing went wrong")
    }
}

nullCheck('hello world');


// TypeScript Unknown
const checkUnknown = (data:unknown)=>{
    console.log(data);
}

checkUnknown("hi");
checkUnknown(41);