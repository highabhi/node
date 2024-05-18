const num1 = 20;
const num2 = 20;

function selfInvokingFunction() {
    console.log(`The sum of two numbers is: ${num1 + num1}`);
};

selfInvokingFunction();