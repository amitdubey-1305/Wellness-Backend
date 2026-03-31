const express= require("express");
const app= express();

app.get("/",(req, res) => {
res.send("Hello, World!");
});
//indexrout

app.get("/posts", (req, res) => {
  res.send("GEt for posts");
});
app.get("/posts/:id", (req, res) => {
  res.send("GEt for show post id ");
});
app.get("/post/:id", (req, res) => {
  res.send("post for delete posts");
});
app.get("/users", (req, res) => {
  res.send("GEt for users");
});
app.listen(3500, () => {
    console.log("Server is running on port 3500");
});