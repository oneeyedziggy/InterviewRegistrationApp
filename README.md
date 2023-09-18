# First Challenge: User Registration

## Build a user registration form using React and TypeScript. The form should have the following fields: first name, last name, email, and password. Implement the following features.

    * Input validation for email and password fields (e.g., valid email format, minimum password length).
    * Display error messages for invalid inputs.
    * Disable the submit button until all inputs are valid.
    * After successful registration, display a confirmation message with the user's full name.

## caveats

- I started this project with create-react-app which uses react-scripts, and its latest version has the following known 'high' level vulnerability:

```
  ┌───────────────┬──────────────────────────────────────────────────────────────┐
  │ high          │ Inefficient Regular Expression Complexity in nth-check       │
  ├───────────────┼──────────────────────────────────────────────────────────────┤
  │ Package       │ nth-check                                                    │
  ├───────────────┼──────────────────────────────────────────────────────────────┤
  │ Patched in    │ >=2.0.1                                                      │
  ├───────────────┼──────────────────────────────────────────────────────────────┤
  │ Dependency of │ react-scripts                                                │
  ├───────────────┼──────────────────────────────────────────────────────────────┤
  │ Path          │ react-scripts > @svgr/webpack > @svgr/plugin-svgo > svgo >   │
  │               │ css-select > nth-check                                       │
  ├───────────────┼──────────────────────────────────────────────────────────────┤
  │ More info     │ https://www.npmjs.com/advisories/1093882                     │
  └───────────────┴──────────────────────────────────────────────────────────────┘
```

- Given more time I'd do some more cleanup of the leftovers and unused bits of the create-react-app template and do some more deliberate structuring of the app

## to start

npm start
