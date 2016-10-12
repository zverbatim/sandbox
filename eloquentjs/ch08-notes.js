function divide(a, b) {
    if (b === 0)
        throw new Error("Cannot divide by 0");
    return a / b;
}

try {
    divide(123, 0);
} catch (error) {
    console.error(error)
}