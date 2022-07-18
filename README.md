# STORE MANAGER 🏬

Project developed in the Back-end Module at the [Trybe](https://www.betrybe.com/) course.

### 🎯
This project goal was developt a RESTful API to manage sales with the MSC software architecture and test it.
The API presents all the CRUD operations.
The tests were made with Mocha, Chai and Sinon.

<br>

## ✨**Features**

Feature | Route
------- | ------
List all products | GET /products
Register and validate product | POST /products
Update product | PUT /products/:id
Delete product | DELETE /products/:id
Search for title or content using a query string | GET /products/search
List all sales | GET /sales
Register and validate sales | POST /sales
Update sale | PUT /sales/:id
Delete sale | DELETE /sales/:id
<br/>

## 📜Documentation
Access the route `/api-docs` to see the documentation.

Ex.: `http://localhost:3000/api-docs`

<br>

---

🛠️ **Used tools:**
* [MySQL](https://www.mysql.com/)
* [Express](https://expressjs.com/)
* [Node](https://nodejs.org/en/)
* [Mocha](https://mochajs.org/)
* [Chai](https://www.chaijs.com/)
* [Sinon](https://sinonjs.org/)
* [Joi](https://joi.dev/api/?v=17.6.0)
* [Swagger](https://swagger.io/)
* [dotenv](https://www.npmjs.com/package/dotenv)
* [express-async-errors](https://www.npmjs.com/package/express-async-errors)
* [nodemon](https://www.npmjs.com/package/nodemon)

---

## How to install the application:
Download the code:
```
git clone git@github.com:queite/store-manager.git
```
Enter the root folder:
```
cd store-manager
```
Install dependencies:
```
npm install
```
Run database service on docker:
```
docker compose up -d db
```
Start the API:
```
npm start
```
---
All [Trybe](https://www.betrybe.com/) projects use `linters`, `Git` and `GitHub`.<br/>
