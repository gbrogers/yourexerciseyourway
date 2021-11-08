export default function handler(req, res) {
  console.log("in handler");
  res.status(200).json({ name: "John Doe" });
}
