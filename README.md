# Fetching JSON Data with Angular $http.get() function.

Angular has built-in support for communication with remote HTTP servers and includes some low-level methods of fetching and posting the data. Angular comes with the $http service which includes a few methods we can utilize with all verbs of the REST protocol.

We'll look at a example using the .$http.get() request. The $http.get() method accepts two parameters: URL and config object.

The first parameter URL is always required and the config is optional, the shortcut $http.get() method initiates a GET request to the server to retrieve data from the server. This example has the following files:

books.js: it contains the data in JSON format.
app.js: it contains the functional logic for the example
getexample.html: contains the front for the example
Fig.1. The source code for the JSON file



Fig 2. The source code for the app.js



In the previous example the controller defines a dependency to the $scope and the $http module. An HTTP GET request to the data “books.json” endpoint is carried out with the get method. It returns a $promise object with a success and error method.

Fig 3. The code for the web page



Fig 4. Running the example



If you open the web page up in your browser, you'll see a standard HTML button created, when you press the button the $http service makes an ajax call and set response to the scope's property books. Thus books can be used to draw a list in the HTML page.

Download the project for Visual Studio
