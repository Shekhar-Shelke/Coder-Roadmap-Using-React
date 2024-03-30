const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const salt = 10;

const app = express();

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET"],
    credentials: true
  })
);
app.use(cookieParser());

const con = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "signup",
});

const verifyUser= (req,res,next)=>{
  const token= req.cookies.token;
 if(!token){
     return res.json({Message:"You are not autenticated"})
 }else{
      jwt.verify(token,"jwt-secret-key",(err,decoded)=>{
         if(err){
         return res.json({Error:"Token is not okey"})
     }else{
         req.name=decoded.name;
         next();
     }
      })
 }
}
app.get('/',verifyUser,(req,res)=>{
 return res.json({Status:"Success",name:req.name});

})

app.post("/signup", (req, res) => {
  bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
    if (err) return res.json({ Error: "Error for hassing password" });

    const fname = req.body.fname;
    const lname = req.body.lname;
    const mobno = req.body.mobno;
    const email = req.body.email;
    const Level = req.body.Level;
    const username = req.body.username;
    const password = hash;

    con.query(
      "INSERT INTO signup (fname,lname,mobno,email,Level, username, password) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [fname, lname, mobno, email, Level, username, password],
      (err, data) => {
        if (data) {
          res.send(data);
        } else {
          res.send(err);
        }
      }
    );
  });
});
app.post("/Carddetails", (req, res) => {
  bcrypt.hash(req.body.cardnumber.toString(), salt, (err, cardnum) => {
    if (err)return res.json({ Error: "Error for hassing password" });

    const cardname = req.body.cardname;
    const customer_id = req.body.customer_id;
    const cardnumber = cardnum;
    const expiration = req.body.expiration;
    const cvvnum = req.body.cvvnum;

   

    con.query(
      "INSERT INTO buycourse (customer_id,cardname,cardnumber,expiration,cvvnum) VALUES (?, ?, ?, ?, ?)",
      [customer_id,cardname, cardnumber, expiration, cvvnum],
      (err, data) => {
        if (data) {
          res.send(data);
        } else {
          res.send(err);
        }
      }
    );
  });
});

app.post("/login", (req, res) => {
  con.query(
    "SELECT * FROM signup WHERE username = ?",
    [req.body.username],
    (err, data) => {
      if (err) {
        return res.json({Error:"Login error in server"});
      }
      if (data.length > 0) {
        bcrypt.compare(req.body.password.toString(),data[0].password,(err, response) => {
            if (err) return res.json({ Error: "Password compare Error" });
            if (response) {
              const name = data[0].username;
              const token = jwt.sign({ name }, "jwt-secret-key", {expiresIn: "1d"});
              res.cookie("token", token);
              
              // console.log({ name });
              return res.json({Status:"Success"});
            } else {
              return res.json({Error:"Password Not Match"});
            }
          }
        );
        // return res.send(data);
      } else {
        return res.send({ message: "WRONG USERNAME OR PASSWORD!" });
      }
    }
  );
});

app.get('/logout',(req,res)=>{
  res.clearCookie('token');
  return res.json({Status:"Success"});
})



app.listen(8081, () => {
  console.log("running backend server");
});
con.connect(function (err) {
  if (err) {
    console.log("Error in Connection");
  } else {
    console.log("Connected");
  }
});
