FizzBuzz = (num) => {
    if (num <= 1) {
        console.log("number cannot be smaller or equal to 1")
    } else {
        let arr = [];
        for (let i = 0; i < num; i++) {
            if (Number.isInteger(i / 3)) {
                arr.push("Fizz");
                console.log(arr[i]);
            } else if (Number.isInteger(i / 5)) {
                arr.push("Buzz");
                console.log(arr[i]);

            } else if (Number.isInteger(i / 5) && (Number.isInteger(i / 3))) {
                arr.push("FizzBuzz");
                console.log(arr[i]);


            } else {
                arr.push(i);
                console.log(arr[i]);
            }
        }
        return arr;

    }
}

console.log("------------ End of Run 1 ------------", FizzBuzz(5));
console.log("------------ End of Run 2 ------------", FizzBuzz(15));
console.log("------------ End of Run 3 ------------", FizzBuzz(30));