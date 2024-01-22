# CORS => Cross Origin Resource Sharing

Domain A ===================================> Domain B
A sends a request to B to access its data, which contains headers info, such as status, methods, type pf request(GET, POST etc..)
This is not possible initially because they are 2 different domains

when you get CORS error, browser doesn't send actual request, it send a preflight request to B
Headers consists of 2 important information:
- Access-Control-Allow-Origin
- Access-Control-Allow-Method

So, B has to allow the access by => Access-Control-Allow-Origin:*

Can be avoided using certain browser extensions. Also by using POSTMAN, there preflight request is not sent