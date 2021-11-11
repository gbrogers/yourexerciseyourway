export default async function (req, res) {
  console.log(req.body);
  const { fname, lname, email, password } = req.body;
}
