const { Router } = require("express");
const { User } = require("../Models/userModel");

const userRouter = Router();


userRouter.get("/", async (req, res)=>{
     
  try {
      const usersData = await User.find()
      res.send({ allUsers: usersData });
    
  } catch (error) {
    res.send({ msg: "something went wrong" });
  }
})


userRouter.get("/:skips", async (req, res) => {
  const { skips } = req.params;
  //const payload = req.body
  const { gender } = req.query;
  //console.log(gender)

  //console.log(payload)
  try {
    if (gender) {
      const usersData = await User.find({ gender: gender })
        .skip(skips)
        .limit(10);
      res.send({ allUsers: usersData });
    } else {
      const usersData = await User.find().skip(skips).limit(10);
      res.send({ allUsers: usersData });
    }
  } catch (error) {
    res.send({ msg: "something went wrong" });
  }
});

userRouter.post("/add", async (req, res) => {
  const userData = req.body;

  try {
    const newUser = new User(userData);
    await newUser.save();
    res.send({ msg: "data added", data: userData });
  } catch (error) {
    res.send({ msg: "something went wrong" });
  }
});

userRouter.delete("/remove", async (req, res) => {
  //console.log(id);
  try {
    const removedUser = await User.deleteMany();
    res.send({ msg: "user data removed" });
  } catch (error) {
    //console.log(error);
    res.send({ msg: "something went wrong" });
  }
});

module.exports = { userRouter };
