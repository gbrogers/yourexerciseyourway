import prisma from "../../../db/index";

export default async function (req, res) {
  console.log(req.body);
  const { fname, lname, email, password } = req.body;

  const user = await prisma.user
    .create({
      data: {
        email,
        fname,
        lname,
        password,
      },
    })
    .then((res) => {
      res.status(200).json({ user });
    })
    .catch(async (error) => {
      console.log(error);
    });
}
