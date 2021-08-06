import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

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
    const lastName = screen.getByLabelText(/last Name:/i);
    const address = screen.getByLabelText(/address:/i);
    const city = screen.getByLabelText(/city:/i);
    const state = screen.getByLabelText(/state:/i);
    const zip = screen.getByLabelText(/zip:/i);

    const submitButton = screen.getByRole("button");
    
    userEvent.type(firstName, "Greg");
    userEvent.type(lastName, "Gregson");
    userEvent.type(address, "123 abc street");
    userEvent.type(city, "Philadelphia");
    userEvent.type(state, "PA");
    userEvent.type(zip, "19123");
    
    userEvent.click(submitButton);

    const successMessage = screen.getByTestId("successMessage");
    expect(successMessage).toBeVisible();
    expect(successMessage).toHaveTextContent("Greg Gregson")
    expect(successMessage).toHaveTextContent("123 abc street")
    expect(successMessage).toHaveTextContent("Philadelphia, PA 19123")
});
