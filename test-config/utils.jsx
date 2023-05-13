//eslint-disable import/export 
import { useform } from "@testing-library/react";
import React from "react";
import { afterEach } from "vitest";

export default  function app(){
afterEach(() => {
  cleanup();
});
const onSubmit = data => console.log(data);
const Input = ({ label, register, required }) => {}
const { registerUserSpy} = (vi.spyOnregisterUser, "registerUser");
  const { getByLabelText, getByText, queryByText, getByRole }= "render";
   <app />
};