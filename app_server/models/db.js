// ADD A MONGOOSE MODULE, DEFINE & CONNECT TO A URI
var mongoose = require("mongoose");

var dbURI = "mongodb://localhost:3000/work4rs";

if (process.env.NODE_ENV === "production"){
    dbURI = "mongodb://jonathan:wilkinson14@ds159696.mlab.com:59696/employees";
}


mongoose.connect(dbURI);

//CREATE MONGO CONNECTION EVENT TRACKERS FOR CONNECTED, DISCONNECTED & ERROR


mongoose.connection.on("connected", function() {
    console.log("Connected to mongoose");
});

mongoose.connection.on("disconnected", function() {
    console.log("Disconnected from the database");
});

mongoose.connection.on("error", function(err) {
    console.log("Error when connecting: " + err);
});

//CREATE A FUNCTION CLOSING MONGODB CONNECTION WHEN NODE EVENT TRACKERS SIGINT(Node termination?), 
//SIGUSR2(node restart ?), SIGTERM(Heroku node event) ARE FIRED

var gracefulShutdown = function(msg, callback){
    mongoose.connection.close(function(){
        console.log("Mongoose disconnected due to : " + msg);
        callback();
    });
};

process.on("SIGINT", function(){
    gracefulShutdown("App termination", function(){
    process.exit(0);
    });
});

process.once("SIGUSR2", function(){
    gracefulShutdown("Nodemon Restart", function(){
        process.kill(process.pid, "SIGUSR2");
    });
});

process.on("SIGTERM", function(){
    gracefulShutdown("Heroku App termination", function(){
        process.exit(0);
    });
});

require("./employees");