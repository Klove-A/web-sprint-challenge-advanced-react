import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

//the checkout h2
test("form header renders", () => {
    render(<CheckoutForm/>);

    const header = screen.queryByText(/checkout form/i);

    expect(header).toBeInTheDocument();
    expect(header).toBeTruthy();
    expect(header).toHaveTextContent(/checkout form/i);
});



test("form shows success message on submit with form details", () => {
    render(<CheckoutForm/>);

    const firstName = screen.getByLabelText(/first name:/i);
    // console.log(firstName);
    const lastName = screen.getByLabelText(/last Name:/i);
    // console.log(lastName);
    const address = screen.getByLabelText(/address:/i);
    // console.log(address);
    const city = screen.getByLabelText(/city:/i);
    // console.log(city);
    const state = screen.getByLabelText(/state:/i);
    // console.log(state);
    const zip = screen.getByLabelText(/zip:/i);
    // console.log(zip);

    userEvent.type(firstName, "Greg");
    userEvent.type(lastName, "Gregson");
    userEvent.type(address, "123 abc street");
    userEvent.type(city, "Philly");
    userEvent.type(state, "PA");
    userEvent.type(zip, "19123");
    
    expect(firstName).toHaveValue("Greg");
    expect(lastName).toHaveValue("Gregson");
    expect(address).toHaveValue ("123 abc street");
    expect(city).toHaveValue("Philly");
    expect(state).toHaveValue("PA")
    expect(zip).toHaveValue("19123")
});
