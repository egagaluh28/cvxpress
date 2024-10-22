// /server/server.js
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("./db");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const server = express();

// Middleware untuk parsing JSON
server.use(express.json());

// Secret key untuk JWT
const JWT_SECRET = "supersecretkey";

// Route login user dan admin
server.post("/api/login", (req, res) => {
  const { username, password, role } = req.body;

  // Query ke database untuk mencari user berdasarkan role
  const query = `SELECT * FROM users WHERE username = ? AND role = ?`;
  db.query(query, [username, role], async (err, results) => {
    if (err || results.length === 0) {
      return res
        .status(401)
        .json({ message: "Username atau role tidak ditemukan" });
    }

    const user = results[0];

    // Bandingkan password
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ message: "Password salah" });
    }

    // Jika login sukses, buat token JWT
    const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, {
      expiresIn: "1h",
    });

    // Redirect ke halaman berdasarkan role
    if (role === "admin") {
      res.json({
        message: "Login berhasil",
        token,
        redirect: "/admin/dashboard",
      });
    } else {
      res.json({
        message: "Login berhasil",
        token,
        redirect: "/user/dashboard",
      });
    }
  });
});

server.post("/api/register", async (req, res) => {
  const { username, email, password, role } = req.body;

  // Cek apakah user sudah ada
  const userExists = await db.query("SELECT * FROM users WHERE email = ?", [
    email,
  ]);
  if (userExists.length > 0) {
    return res
      .status(400)
      .json({ success: false, message: "User already exists" });
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Insert ke database
  const query = `INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)`;
  db.query(query, [username, email, hashedPassword, role], (err) => {
    if (err) {
      return res
        .status(500)
        .json({ success: false, message: "Database error" });
    }
    res.json({ success: true, message: "Registration successful" });
  });
});

// Menangani semua request Next.js
server.all("*", (req, res) => {
  return handle(req, res);
});

// Jalankan server
const port = process.env.PORT || 3000;
server.listen(port, (err) => {
  if (err) throw err;
  console.log(`Server running on http://localhost:${port}`);
});
