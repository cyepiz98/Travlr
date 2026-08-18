# cs465
CS465 Full Stack Development with MEAN
Architecture

Compare and contrast the types of frontend development you used in your full stack project, including Express HTML,
JavaScript, and the single-page application (SPA).
Why did the backend use a NoSQL MongoDB database?

The project used two different frontend approaches that served different purposes. The customer‑facing site used Express
with server‑rendered HTML templates. Each route returned a full page, and JavaScript was used only for simple
interactions. This approach kept the customer side lightweight and easy to load because the server handled most of the
work. The admin interface used Angular as a single‑page application. Instead of loading new pages from the server, the SPA
loaded once and updated the view dynamically through components, services, and client‑side routing. Angular relied heavily
on JavaScript for data binding, form handling, and API communication. Compared to Express HTML, the SPA was more
interactive, modular, and responsive, but it required more setup and structure. The backend used a NoSQL MongoDB database
because the project needed flexible document storage. Trips, users, and itinerary data fit naturally into JSON‑like
documents. MongoDB avoided the need for complex joins and rigid schemas, and it worked smoothly with Mongoose in a 
JavaScript environment. This made the data flow between the API and the Angular SPA
much simpler.

Functionality

How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?
Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name
the benefits that come from reusable user interface (UI) components.

JSON is different from JavaScript because JSON is only a data format. It cannot contain functions or logic. It stores
structured information using key‑value pairs. JavaScript is a programming language that can manipulate data, run logic,
and control the application. JSON ties the frontend and backend together because the Express API sends JSON responses and
the Angular SPA consumes those responses through services. Both sides share data in a consistent format. Throughout the
full stack process, I refactored several parts of the project to improve functionality. I cleaned up Angular services to
remove duplicate logic, fixed mismatched field names between the API and the SPA, and reorganized standalone component
imports to reduce errors. Reusable UI components, such as trip cards and form components, helped reduce repeated code and
made the SPA easier to maintain. When a component is reused, updates can be made in one place instead of many, which
improves consistency and efficiency.

Testing

Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties
of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack 
application.

Testing required verifying that API endpoints returned the correct data and that the SPA handled requests properly. I used
Postman to test GET, POST, PUT, and DELETE routes and confirmed that the API returned JSON in the correct format. Angular
services were tested by checking that trip lists loaded correctly, edit forms displayed existing data, and updates saved
to MongoDB. Security added another layer of testing because protected endpoints required authentication. I had to confirm
that JWT tokens were generated, stored, and sent correctly. Understanding methods, endpoints, and security means knowing
how HTTP verbs map to CRUD operations, how routes process requests, and how tokens protect sensitive operations. This
ensures that the full stack application handles data safely and consistently.

Reflection

How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered
in this course to help you become a more marketable candidate in your career field?

This course helped me move closer to my professional goal of becoming a software engineer. I learned how to build a
complete full stack application using the MEAN stack and how each layer communicates with the others. I developed stronger
skills in JavaScript, Express routing, Angular components, API design, and MongoDB data modeling. I also gained experience
debugging real issues such as missing routes, token errors, mismatched field names, and component rendering problems.
These skills make me a more marketable candidate because full stack development is used widely in modern web applications.
Building the Travlr project gave me confidence in working with both frontend and backend technologies and helped me
understand how to design, test, and maintain a complete application.
