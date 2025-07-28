import db from "../config/db.js";

export const getSecrets = async (req, res) => {
    try{
        const result = await db.query(
          `SELECT secret FROM users WHERE email = $1`,
          [req.user.email]
        );
        //console.log(result);
        const secret = result.rows[0].secret;
        if (secret) {
          res.render("secrets.ejs", { secret: secret });
        } else {
          res.render("secrets.ejs", { secret: "Jack Bauer is my hero." });
        }
      
      }
      catch(err){
        console.log(err);
      } 
}

export const renderSubmitPage = (req, res) => {
    res.render("submit.ejs");
  };

export const submitSecret = async (req, res) => {
    const {secret } = req.body;
    //console.log(req.user);
    try{
        await db.query("UPDATE users SET secret = $1 WHERE email = $2", 
          [secret,
           req.user.email,]);
           res.redirect("/secrets");
    }
    catch(err){
      console.log(err);
    }
  };