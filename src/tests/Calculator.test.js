import React from "react";
import Calculator from "../containers/Calculator";
import { render, fireEvent } from "@testing-library/react";
import { run } from "cypress";
import App from "../containers/Calculator";

describe("Calculator", () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator />);
  });

  it("should change running total on number enter", () => {
    const button4 = container.getByTestId("number4");
    const runningTotal = container.getByTestId("running-total");
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual("4");
  });
  it("should add two numbers, 1 and 4 to get 5", () => {
    const button4 = container.getByTestId("number4");
    fireEvent.click(button4);
    const buttonAdd = container.getByTestId("operator-add");
    fireEvent.click(buttonAdd);
    const button1 = container.getByTestId("number1");
    fireEvent.click(button1);
    const buttonEquals = container.getByTestId("operator-equals");
    fireEvent.click(buttonEquals);

    const runningTotal = container.getByTestId("running-total");
    expect(runningTotal.textContent).toEqual("5");
  });
  it("should subtract numbers, 4 from 7 to get 3", () => {
    const button7 = container.getByTestId("number7");
    fireEvent.click(button7);
    const buttonSubtract = container.getByTestId("operator-subtract");
    fireEvent.click(buttonSubtract);
    const button3 = container.getByTestId("number3");
    fireEvent.click(button3);
    const buttonEquals = container.getByTestId("operator-equals");
    fireEvent.click(buttonEquals);
    const runningTotal = container.getByTestId("running-total");
    expect(runningTotal.textContent).toEqual("4");
  });
  it("should multiply numbers, 3 x 5 to get 15", () => {
    const button3 = container.getByTestId("number3");
    fireEvent.click(button3);
    const buttonMultiply = container.getByTestId("operator-multiply");
    fireEvent.click(buttonMultiply);
    const button5 = container.getByTestId("number5");
    fireEvent.click(button5);
    const buttonEqual = container.getByTestId("operator-equals");
    fireEvent.click(buttonEqual);
    const runningTotal = container.getByTestId("running-total");
    expect(runningTotal.textContent).toEqual("15");
  });
  it("should divide two numbers, 21 / 7 to get 3", () => {
    const button2 = container.getByTestId("number2");
    fireEvent.click(button2);
    const button1 = container.getByTestId("number1");
    fireEvent.click(button1);
    const buttonDivide = container.getByTestId("operator-divide");
    fireEvent.click(buttonDivide);
    const button7 = container.getByTestId("number7");
    fireEvent.click(button7);
    const buttonEquals = container.getByTestId("operator-equals");
    fireEvent.click(buttonEquals);
    const runningTotal = container.getByTestId("running-total");
    expect(runningTotal.textContent).toEqual("3");
  });
  it("should concatenate multiple number button click", () => {
    const button5 = container.getByTestId("number5");
    fireEvent.click(button5);
    fireEvent.click(button5);
    const button8 = container.getByTestId("number8");
    fireEvent.click(button8);
    const runningTotal = container.getByTestId("running-total");
    expect(runningTotal.textContent).toEqual("558");
  });
  it("should chain multiple operation, 8-4*8 to get 32", () => {
    const button8 = container.getByTestId('number8');
    fireEvent.click(button8);
    const buttonSubtract = container.getByTestId('operator-subtract');
    fireEvent.click(buttonSubtract);
    const button4 = container.getByTestId('number4');
    fireEvent.click(button4);
    const buttonMutlitply = container.getByTestId('operator-multiply');
    fireEvent.click(buttonMutlitply);
    fireEvent.click(button8);
    const buttonEquals = container.getByTestId('operator-equals');
    fireEvent.click(buttonEquals);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('32');
  });
  it("should clear running total without affecting the calculation", () => {
    const button6 = container.getByTestId('number6');
    fireEvent.click(button6);
    const buttonMultiply = container.getByTestId('operator-multiply');
    fireEvent.click(buttonMultiply);
    const button3 = container.getByTestId('number3');
    fireEvent.click(button3);
    const buttonEqual = container.getByTestId('operator-equals');
    fireEvent.click(buttonEqual);
    const buttonClear = container.getByTestId('clear');
    fireEvent.click(buttonClear);
    const calculatedTotal = container.getByTestId('calculated-total');
    expect(calculatedTotal.textContent).toEqual('18');
})

});
