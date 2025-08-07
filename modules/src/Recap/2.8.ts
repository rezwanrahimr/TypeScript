{

    // promise
    const createPromise = ():Promise<string> => {
        return new Promise<string>((resolve, reject) => {
            const data: string = "Hello, World!";
            if (data) {
                resolve(data);
            } else {
                reject("No data found");
            }
        })
    }



    // calling create promise function
    const showData = async () => {
        const data = await createPromise();
        return data;
    }

    showData();

}