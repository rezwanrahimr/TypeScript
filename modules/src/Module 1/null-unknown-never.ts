/* // ts null
const messageSender = (message: unknown) => {
  if (message === null) {
    return console.log("Message Was Null");
  } else {
    return console.log(message);
  }
};

messageSender(null);

// unKnown
const speedTest = (speed: unknown) => {
  if (typeof speed === "number") {
    return (speed * 1000) / 36;
  }
  if (typeof speed === "string") {
    const [value, designation] = speed.split(" ");
    return (parseFloat(value) * 1000) / 36;
  }
};
console.log(`speed is : ${speedTest("10 km")}`);

// never
function neverReturn(message: string): never {
  throw new Error(message);
}

neverReturn("Tor kono somossa ?");
 */