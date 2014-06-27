TODO
	read JavaScript: The Good Parts by Douglas Crockford

http://cwbuecheler.com/web/tutorials/2013/node-express-mongo/
A request response model using express and jade templating
views\layout.jade contains common template code
	set css and import js scripts here


nodetest1 module
	mkdir node && cd node
	npm install -g express
	npm install -g express-generator
	express nodetest1
	cd nodetest1
		npm install
		mkdir data
		npm start
		http://localhost:3000


	$MONGO_HOME/bin/mongod --dbpath /Users/paul/Dev/code/JS/NodeExpressMongoTutorial/nodetest1/data
	MONGO_HOME/bin/mongo
		use nodetest1
		db.usercollection.insert({ "username" : "testuser1", "email" : "testuser1@testdomain.com" })
		newstuff = [{ "username" : "testuser2", "email" : "testuser2@testdomain.com" }, { "username" : "testuser3", "email" : "testuser3@testdomain.com" }]
		db.usercollection.insert(newstuff);
		db.usercollection.find().pretty()


http://cwbuecheler.com/web/tutorials/2014/restful-web-app-node-express-mongodb/
Jade
	#Foo is a div
	//comments are output as <!-- xx -->
nodetest2
	a single-page app
	