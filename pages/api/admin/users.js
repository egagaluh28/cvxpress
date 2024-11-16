// pages/api/admin/users.js
import mysql from "mysql2/promise";
import adminMiddleware from "../../../middleware/admin";

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "cvxpress",
});

export default async function handler(req, res) {
  // Menggunakan middleware untuk memverifikasi admin
  await new Promise((resolve, reject) => {
    adminMiddleware(req, res, (err) => {
      if (err) return reject(err); // Menangani kesalahan middleware
      resolve();
    });
  });

  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const [users] = await db.query(
          "SELECT id_user, username, email, role, created_at FROM users"
        );
        res.status(200).json({ users });
      } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ message: "Database error" });
      }
      break;
    case "POST":
      // Implement Create user jika diperlukan
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
