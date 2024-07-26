import * as React from 'react';
import App, { Sum } from "../App";
import { screen, render } from "@testing-library/react";
describe("banner", () => {
  // it("test banner", () => {
  //   render(<App text ="bhemesh"/>);
  //   expect(screen.getByText("bhemesh")).toBeTruthy();
  // });
  it("add",()=>{
    expect(Sum(2,7)).toBe(9);
  })
});

