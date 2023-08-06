# Simple bookstore CRUD boilerplate


### Technologies Used

|   |   |
|---|---|
| Frontend | React, Recoil, Tailwind CSS, TypeScript |
| Backend | Node.js, Express, PostgreSQL, TypeScript |

### Features
- [x] Display a list of books
- [x] Implement infinite scroll to load more books
- [x] Ability to create a new book
- [x] Ability to update an existing book
- [x] Ability to delete a book
- [x] Implement input validation for creating/updating books
- [x] Linting using ESLint(use `yarn lint` to run linting)

### Getting Started
- Clone the repository
- Install dependencies both for the frontend and backend
- Create a `.env` file in the backend folder and add the following environment variables:
```
DATABASE_URL="postgresql://DB_USER:DB_PASSWORD@DB_HOST:DB_PORT/DA_NAME"
```

### Running the app
- Before you run the app, make sure you have a PostgreSQL database running
- Seed the database to get the dummyData by running `yarn seed` in the backend folder
- Run the backend by running `yarn dev` in the backend folder
- Run the frontend by running `yarn dev` in the frontend folder

### To Do
- [ ] Add unit tests
- [ ] Add authentication
- [ ] Add authorization
- [ ] Add pagination
- [ ] Add search functionality
- [ ] Add sorting functionality
- [ ] Dockerize the app
- [ ] Add CI/CD
- [ ] Add logging
- [ ] Add caching and more ...