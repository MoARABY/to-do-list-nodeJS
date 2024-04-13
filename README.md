<h1>toDoList - Backend</h1>  
This repository contains the backend code for a toDoList built using Node.js, Express, and MongoDB.

<h2>Features</h2> 
CRUD operations for managing tasks
Middleware for request validation and error handling
Separation of concerns using controllers, models, and routes

<h2>Technologies Used</h2> 
<ul>
  <li>Node.js</li>
  <li>Express.js</li>
  <li>Docker</li>
  <li>MongoDB</li>
  <li>dotenv</li>
  <li>express-async-handler</li>
  <li>mongoose</li>
  <li>nodemon</li>
</ul>

<h2>Setup Instructions</h2>

<ul>
  <li> >Clone the repository:</li>
  <li> >> bash</li>
  <li> >> git clone https://github.com/your-username/to-do-list-nodeJS.git</li>
</ul>

Install dependencies:
<ul>
  <li> > bash</li>
  <li> > cd contact-management-backend</li>
  <li> > npm install</li>
</ul>

<ul>
  <li> > Create a .env file in the root directory.</li>
  <li> > Add the following environment variables:</li>
  <li> >> makefile</li>
  <li> >> PORT=3000</li>
  <li> >> MONGODB_URI=your-mongodb-connection-string</li>
</ul>
Configure environment variables:
<ul>
  <li> > Start the server:</li>
  <li> >> bash</li>
  <li> >> npm start</li>
</ul>

<h2>API Endpoints</h2>
<ul>
  <li>GET /api/tasks: Get all tasks</li>
  <li>POST /api/tasks: Create a new task</li>
  <li>GET /api/tasks/:id: Get a task by ID.</li>
  <li>PUT /api/tasks/:id: Update a task by ID.</li>
  <liDELETE /api/tasks/:id: Delete a task by ID.></li>
</ul>

<h2>Folder Structure</h2>
<ul>
  <li>middlewares/: Custom middleware functions.</li>
  <li>controllers/: Request handlers for each route.</li>
  <li>models/: Mongoose schemas and models.</li>
  <li>routes/: Express routes for different endpoints.</li>
</ul>

<h2>Contributing</h2> 
Contributions are welcome! Please fork the repository and submit a pull request.

<h2>License</h2> 
This project is licensed under the MIT License.
