function showMessage(message: string): void {
  console.log(message);
}
showMessage("Function with void");

function calc(num1: number, num2: number): number {
  return num1 + num2;
}
calc(10, 5);

function customError(): never {
  throw new Error("Error");
}
customError();
