import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";
// import { db } from "./dbConnection.js"; //destructure db variable

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();

const PORT = process.env.MY_PORT; //starting with 8081 to make sure I still remember how to set this up ..

app.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`);
});

const db = new pg.Pool({
  connectionString: process.env.DB_STRING,
});
//do I need a GET for every table.. ?

app.get("/english", async (req, res) => {
  try {
    const query = await db.query(`SELECT * FROM english;`);
    res.json(query.rows);
    console.log(query.rows);
  } catch {
    console.log("ERR check ENGLISH");
    res.json(false);
  }
});

app.get("/irish", async (req, res) => {
  try {
    const query = await db.query(`SELECT * FROM irish;`);
    res.json(query.rows);
    console.log(query.rows);
  } catch {
    console.log("ERR check IRISH");
    res.json(false);
  }
});

app.get("/images", async (req, res) => {
  try {
    const query = await db.query(`SELECT * FROM images;`);
    res.json(query.rows);
    console.log(query.rows);
  } catch {
    console.log("ERR check IMAGES");
    res.json(false);
  }
});

/* app.get("/post", async (req, res) => {
  try {
    const query = await db.query(`SELECT * FROM post;`);
    res.json(query.rows);
  } catch {
    console.log("ERR check POST");
    res.json(false);
  }
}); taking this out to make it a little easier on myself.. for now */

app.get("/profile", async (req, res) => {
  try {
    const query = await db.query(`SELECT * FROM profile;`);
    res.json(query.rows);
    console.log(query.rows);
  } catch {
    console.log("ERR check PROFILE");
    res.json({ get: false });
  }
});

app.post("/newpost", async (req, res) => {
  try {
    const body = await req.body;
    console.log(body); //this works, telling me that the submit is correct, it's the following that is not working as expected
    const query = await db.query(
      `INSERT INTO profile (username, first_name, icon, message) VALUES ($1, $2, $3, $4)`,
      [body.username, body.first_name, body.icon, body.message]
    );
    res.json(query);
    // console.log(query);
  } catch {
    console.log("CHECK NEW POST");
    res.json({ added: false });
  }
});

//the post gave me some problems, especiallly once I added in the 2nd route to fill information in on the 2nd table - for simplicity sake I instead changed the "bio" column in the profile table to serve as the message the user would post instead
