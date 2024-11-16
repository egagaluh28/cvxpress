// pages/api/login.js
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import mysql from "mysql2/promise";

// Membuat koneksi ke database
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "cvxpress",
});

// Secret key untuk JWT
const JWT_SECRET = "your_jwt_secret"; // Ganti dengan secret key yang aman

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { username, password } = req.body;

    try {
      // Cek apakah user ada berdasarkan username
      const [user] = await db.query("SELECT * FROM users WHERE username = ?", [
        username,
      ]);
      if (user.length === 0) {
        return res
          .status(401)
          .json({ message: "Invalid username or password" });
      }

      // Verifikasi password
      const validPassword = await bcrypt.compare(password, user[0].password);
      if (!validPassword) {
        return res
          .status(401)
          .json({ message: "Invalid username or password" });
      }

      // Generate JWT token
      const token = jwt.sign(
        { id: user[0].id, role: user[0].role },
        JWT_SECRET,
        { expiresIn: "1h" }
      );

      // Redirect sesuai dengan role
      const redirect =
        user[0].role === "admin" ? "/admin/dashboard" : "/";

      res.status(200).json({ token, redirect });
    } catch (error) {
      res.status(500).json({ message: "Database error", error });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
