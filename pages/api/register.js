// pages/api/register.js
import bcrypt from "bcrypt";
import mysql from "mysql2/promise";

// Membuat koneksi ke database
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "cvxpress",
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { username, email, password, role } = req.body;

    try {
      // Cek apakah pengguna sudah terdaftar
      const [existingUser] = await db.query(
        "SELECT * FROM users WHERE email = ?",
        [email]
      );
      if (existingUser.length > 0) {
        return res.status(400).json({ message: "User already exists" });
      }

      // Hash password sebelum disimpan
      const hashedPassword = await bcrypt.hash(password, 10);

      // Simpan user ke database
      await db.query(
        "INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)",
        [username, email, hashedPassword, role]
      );

      res.status(200).json({ message: "Registration successful" });
    } catch (error) {
      res.status(500).json({ message: "Database error", error });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
