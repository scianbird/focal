import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { db } from "./dbConnection.js"; //destructure db variable
//console.log(db);

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();

const PORT = process.env.MY_PORT; //starting with 8081 to make sure I still remember how to set this up ..

app.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`);
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

app.get("/post", async (req, res) => {
  try {
    const query = await db.query(`SELECT * FROM post;`);
    res.json(query.rows);
    console.log(query.rows);
  } catch {
    console.log("ERR check POST");
    res.json(false);
  }
});

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

app.post("/newpost", (req, res) => {
  try {
    const body = req.body;
    const query = db.query(
      `INSERT INTO profile (username, first_name, icon, bio) VALUES ($1, $2, $3, $4)`,
      [body.name, body.message]`INSERT INTO post (text) VALUES ($5)`,
      [body.name, body.message]
    );
    res.json({ added: true });
  } catch {
    console.log("CHECK NEW POST");
    res.json({ added: false });
  }
});
