var express = require("express");
var app = express();
var bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");


var favMovies = [
    {name: "Frozen", image: "http://www.gstatic.com/tv/thumb/v22vodart/9991822/p9991822_v_v8_aa.jpg"},
    {name: "Harry Potter", image: "https://mvpo.us/img/P5159.jpg"},
    {name: "Mulan", image: "http://www.visitnarrabri.com.au/wp-content/uploads/2018/04/mulan-18.jpg"}
    ];
    
app.get("/", function(req, res){
    res.render("landing.ejs");
});
app.get("/movies", function(req, res){
    res.render("movies.ejs", {movies: favMovies});
});

app.post("/movies", function(req, res){
    var newName = req.body.movieName;
    var newImg = req.body.imgURL;
    var newMovie = {name: newName, image: newImg};
    favMovies.push(newMovie);
    res.redirect("/movies");
});

app.get("/movies/new", function(req, res){
    res.render("new.ejs");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp server started!");
});
