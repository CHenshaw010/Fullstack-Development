# CS465-Fullstack-Development
### Full Stack Development with MongoDB, Express, Angular, and Node.js (MEAN)
- Code
  - [Application Backend](https://github.com/CHenshaw010/CS465-Fullstack/tree/main/app_server)
  - [Application API](https://github.com/CHenshaw010/CS465-Fullstack/tree/main/app_api)
  - [Single Page Application (SPA)](https://github.com/CHenshaw010/CS465-Fullstack/tree/main/app_admin)
- Documentation
  - [Travlr Getaways Software Design Document](https://github.com/CHenshaw010/CS465-Fullstack/blob/main/Documentation/Software%20Design%20Document.pdf)
- Postman Testing
  - [Authorized Tests](https://github.com/CHenshaw010/CS465-Fullstack/blob/main/Documentation/Authorized%20Tests.postman_collection.json)
  - [Unauthorized Tests](https://github.com/CHenshaw010/CS465-Fullstack/blob/main/Documentation/Unauthorized%20Tests.postman_collection.json)

### Architecture
**Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the SPA.**

The Travlr Getaways customer site utilized Express, HyperText Markup Language (HTML), and JavaScript to dynamically display pages using the model-view-controlller (MVC) architecture. User requests from actions or navigation are routed to the appropriate controller. The controller communicates with the model on the backend server and dynamically updates handlebars view templates with the applicable data. This view is then displayed to the user. These tools all served a specific purpose to appropriately handle user requests from the browser, retrieve data from the backend server, and dynamically update the frontend view. While this solution can more easily congest servers, users will experience a quicker initial load and security can be abstracted to the backend.

Alternatively, the Travlr Getaways admin site utilized Angular to create an SPA which also used the MVC architecture. As the admin site is an SPA, all of the application logic is sent to the user during the initial load. Subsequently, user requests can be handled by the application logic in the user's browser. The SPA will only have to interact with the Application Programming Interface (API) to request data from the backend which is then used to update the view. While this solution reduces server load by leveraging user resources, users will experience a slower initial load but faster loads thereafter. Additionally, users must download patches or restart their SPAs to obtain updated data due to the nature of an SPA.

**Why did the backend use a NoSQL MongoDB database?**

The backend server utilized MongoDB as it is extremely fast and scalable. Documents are stored as binary JavaScript Serialized Object Notation (JSON) enabling the entire stack to utilize JavaScript which increases development efficiency and consistency. Furthermore, Mongoose is used as the intermediary between the application logic and MongoDB to define the data structure, the API, and input validation within the application itself.

### Functionality
**How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?**

JSON is a file and data transfer format that sstores information in key-value pairs. While it can be used by any programming language, it is derived from JavaScript. JavaScript is a programming language primarily for controlling the behavior of webpages and uses JSON to transport data between components. For the Travlr Getaways sites, JSON ties the frontend and backend development pieces by defining how data is transferred between them. The frontend makes requests to the backend through the Representational State Transfer (RESTful) APIs which returns data in JSON responses.
    
**Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.**

This full stack development process had multiple instances of refactoring code to improve functionality and efficiency. The initial iteration of the Travlr Getaways customer site had static HTML mockups imported into Node.js and Express in [Module One](https://github.com/CHenshaw010/CS465-Fullstack/tree/module1). This code was refactored in [Module Three](https://github.com/CHenshaw010/CS465-Fullstack/tree/module3) to utilize handlebars templates to dynamically update views with JSON. This strategy enabled webpage templates to be reused while enhancing maintainability and scalability by abstracting data to an outside file. This code was further refactored in [Module Five](https://github.com/CHenshaw010/CS465-Fullstack/tree/module5) to leverage an API to request data to be populated from the database model. This strategy enables create, read, update, and delete (CRUD) operations to be requested through the use of an API. In doing so, the information in the database and the model can more efficiently evolve based on the needs of the organization.

### Testing
**Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.**

Hypertext Transfer Protocol (HTTP) methods define a certain action the server should take during an HTTP request. As the RESTful API will use the same Uniform Resource Locator (URL) for many tasks, the HTTP method will describe the specific operation to perform. A Travlr Getaways example is a GET or POST HTTP request to `/api/trips` which either retrieve all trip instances or create a new trip instance depending on the HTTP method. The four commmonly used HTTP methods utilized in this application are GET, POST, PUT, and DELETE. The API endpoints enable the frontend to communicate with the backend server to perform these HTTP requests. The previous HTTP GET request `/api/trips` communicates with the API endpoint to call the `tripsController.tripsList` function which queries MongoDB and returns status code and a list of trips as a JSON response. Security is critical to ensure only authorized users can perform these HTTP requests and interact with the backend server. For Travlr Getaways, security was implemented with user account validation and JSON Web Tokens (JWTs). The user would register an account which would save their data (the password as a Secure Hash Algorithm (SHA)-512 hash) in the Users database. When the user submits login data, the username and computed password hash would be compared to the database information. If the user was properly authenticated, they would be provided a JWT with a specified expiration date. This enabled the API to perform an authentication check on the JWT prior to handling an HTTP request and acting depending on the outcome of authentication.

### Reflection
**How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?**

This course has helped expand my capabilities as a software developer and expanding my understanding of full stack development practices. In doing so, this course has exposed me to many new tools that I had not previous used such as Express, Angular, Node.js, Handlebars, Mongoose, and JWT. Furthermore, it reinforced key programming concepts such as MVC architecture, abstraction, security, and RESTful APIs while improving my expertise with tools such as Git, MongoDB, queries, JavaScript, and HTTP requests. The project improved my understading of the entire development process for a web application. Additionally, I learned how to create multiple forms of web applications such as Express HTML, static or templated webpages, or SPAs. Moreover, I learned the intricacies of each application and which to use depending on the requirements. This significantly improves my marketability as a developer, allowing me to work on a wider range of projects. These skills are extremely valuable for my portfolio given the increasing prevalence of technology and web-based services combined with a demand for full stack developers.
