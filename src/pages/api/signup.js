const User = require("../../../server/db/models/user");
const { Op } = require("sequelize");
const bcrypt = require("bcryptjs");

export default function handler(req, res) {
  console.log("in handler");
  res.status(200).json({ name: "John Doe" });
}
