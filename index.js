
import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get ("/", (req, res) => {
    res.render("index.ejs");
});


app.post("/submit", (req, res) => {
  const headline = req.body["headline"];
  const blogPost = req.body["blogPost"];
    res.render("post.ejs", { 
      publishedPost: blogPost,
      yourHeadline: headline,
    });
  });


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
