# email-sender

Patterns used:

Data Origin Authentication (jwt authentication, when client app logs in, server app generates a jwt token that client app will use further to define an authentication header for all further requests. This token is checked for validity at server level when a new request comes up, and if it's not valid anymore the request is reject with 401 Unauthorized.

Microservice Deployment and Containerization (the system is composed of 3 microservices, server (which communicate with mongoDb, generate token and validate requests sent from the client), email-server (which send emails thorough a tcp connection established with the server) and client (which connects to the server). All 3 microservices were deployed to its separate docker container.
