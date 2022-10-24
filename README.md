# chronic-homelessness-project
Project for City of Orlando Florida to collect, store and deliver information about local resourceses for people in need.

The project has a three tier architecture:
1. The presentation layer consisting of web-ui
2. The Application layer consisting of rest-api
3. The Data layer consisting of a MongoDb NoSQL database

## Getting Started
See instructions in both "web-ui" and "rest-api" folders to run each component of the project.

Once each component is running navigate to http://localhost:4200/ to access the web-ui. 

## Some things to note

Simply click login button when prompted as authentication has not been implemented yet.

Additionally, following items have not been implemented yet:
- email scheduling using sundial
- simple username/password login mechanism for city users
- magic link authentication for agency users

Once both rest-api and web-ui are up and running you can insert some test data by clicking "Add Test Data" button on the "List" page in web-ui.

In order to use Address Autocomplete function on Agency form sign up for a free tier of [Google maps API](https://developers.google.com/maps) and enter your API key in `src/environment/environment.ts` file. This is an optional step. The form will still work without it but the console will show some errors on Agency form page as google maps api fails to load.

If rest-api project is running on a port other than 8080, make sure you update `src/data/api.ts` with the port its running on