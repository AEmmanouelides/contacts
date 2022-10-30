# Contact List

It's a **React** single webpage that displays a list of contacts.

This project was bootstrapped with [Create React App with TypeScript](https://create-react-app.dev/docs/adding-typescript/).

[****Specifications****] 
- Fetch Contacts by calling an AWS endpoint using the `AXIOS` library. 
- Populate fetched data with specific format `{avatar} | {first_name last_name} | {checkbox}` using <a href="https://mui.com/material-ui/react-grid/" rel="nofollow" target='_blank'>MUI React Grid component.</a> 
- The `MUI Grid` component is designed for use-cases that are focused around handling a large amounts of tabular data. While it comes with a more rigid structure, in exchange, you gain more powerful features like:
    - **Sorting**
    - **Filtering**   
    - **Pagination**
    - **Exports**
    - ...more

[****Notes****] 
- The app is responsive.
- <a href="https://www.npmjs.com/package/react-intl" rel="nofollow" target='_blank'>React Intl</a> was used for internationalization and localization purposes.
- `Config` json file contains applications' configurations for **locale** and **grid** options.

## Running the App

From the root folder, install all the needed packages with:

```bash
`npm i`
```

Run the application on its own with the command:

```bash
`npm run start`
```

The application will run on port 3000.

`Screenshots` of the running App can be found at `/screenshots`