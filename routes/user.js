const express = require ("express");
const userRouter = express.Router();
const users = require ("./UserList")





// get user

userRouter.get("/" , (req, res) => 
    res.send({listuser : users}));

userRouter.post("/login" , (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    res.send(`my emaail is ${email} and my password is ${password}`);
}
);




// update user
userRouter.get("/boutique" , (req, res) => {
const date = new Date();
const hours = date.getHours();
if (hours > 9 && hours < 21){
    res.render("opened");
} 
else {
    res.render("closed");
}
}
);

// add user




module.exports = userRouter;