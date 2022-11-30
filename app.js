const express = require("express");

// express app
const app = express();

// register view engine
app.set("view engine", "ejs");

// listen for request
app.listen(3000);

app.get("/", (req, res) => {
    const blogs = [
        {title: "Yoshi finds eggs", snippet: "Lorem ipsum"},
        {title: "Mario finds stars", snippet: "Lorem ipsum"},
        {title: "How to defeat Bowser", snippet: "Lorem ipsum"},
    ];
    res.render("index", { title: "Home" });
});

app.get("/about", (req, res) => {
    res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
    res.render("create", { title: "Create a new Blog" });
});

// 404
app.use((req, res) => {
    res.status(404).render("404", { title: "404" });
});
