import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { Input } from './components/Input';

const minPasswordLength = 8;

const getEmailError = (email: string): string => {
  // see https://emailregex.com/, emails are weird and we may prefer a more specific definition than the strictly spec-compliant one
  const validEmailRegexp =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return validEmailRegexp.test(email)
    ? ''
    : `Please enter a valid email address`;
};

const getPasswordError = (password: string): string => {
  return password.length >= 8
    ? ''
    : `Password must be at least ${minPasswordLength} characters`; //Note: highly recommend stricter complexity requirement
};

const HeaderDiv = styled.div`
  margin-top: -25px;
  padding: 15px 10px 1px 20px;
  background-color: black;
  color: white;
`;
const CenteringDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const FlexColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 370px;
  margin-top: 100px;
`;

function App() {
  const [showDialog, setShowDialog] = useState(false);
  const [areFieldsValid, setAreFieldsValid] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // while inefficient, this can be handy when fields have validation interdependencies, can be easily optimized if performance is crucial
  useEffect(() => {
    const localEmailError = getEmailError(email);
    const localPasswordError = getPasswordError(password);
    setEmailError(localEmailError);
    setPasswordError(localPasswordError);
    setAreFieldsValid(
      !localEmailError &&
        !localPasswordError &&
        !!firstName.length &&
        !!lastName.length
    );
  }, [email, password, firstName, lastName]);

  const onSubmit = () => {
    console.log('submitClicked');
    setShowDialog(true);
  };
  const dialogClose = () => {
    console.log('submitClicked');
    setShowDialog(false);
  };

  console.log({ areFieldsValid });
  return (
    <>
      <HeaderDiv>
        <h1>AUTODESK</h1>
      </HeaderDiv>
      <CenteringDiv>
        <dialog id="successModal" open={showDialog}>
          <p>
            Thanks for registering {firstName} {lastName}
          </p>
          <form method="dialog">
            <button onClick={dialogClose}>OK</button>
          </form>
        </dialog>
        <FlexColumnWrapper>
          <form>
            <Input id="firstName" label="first name:" onChange={setFirstName} />
            <Input id="lastName" label="last name:" onChange={setLastName} />
            <Input
              id="email"
              label="email:"
              type="email"
              error={emailError}
              onChange={setEmail}
            />
            <Input
              id="password"
              label="password:"
              type="password"
              error={passwordError}
              minLength={minPasswordLength}
              onChange={setPassword}
            />
            <button onClick={onSubmit} type="button" disabled={!areFieldsValid}>
              Submit
            </button>
          </form>
        </FlexColumnWrapper>
      </CenteringDiv>
    </>
  );
}

export default App;

/*
First Challenge: User Registration

Build a user registration form using React and TypeScript. The form should have the following fields: first name, last name, email, and password. Implement the following features.

    Input validation for email and password fields (e.g., valid email format, minimum password length).
    Display error messages for invalid inputs.
    Disable the submit button until all inputs are valid.
    After successful registration, display a confirmation message with the user's full name.
*/
