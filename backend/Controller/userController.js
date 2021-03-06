import asyncHandler from "express-async-handler";

import User from "../Model/userModel.js";
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: null,
    });
  } else {
    res.status(401);
    throw new Error("invalid email or password");
  }
});

export { authUser };
