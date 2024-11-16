// middleware/admin.js
import jwt from "jsonwebtoken";

// Ganti dengan secret key kamu, sebaiknya simpan di variabel lingkungan
const JWT_SECRET = process.env.JWT_SECRET || "your_default_secret_key";

export default function adminMiddleware(req, res, next) {
  // Ambil token dari header Authorization
  const token = req.headers.authorization?.split(" ")[1];

  // Jika tidak ada token, kirim 401 Unauthorized
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    // Verifikasi token
    const decoded = jwt.verify(token, JWT_SECRET);

    // Periksa apakah pengguna adalah admin
    if (decoded.role !== "admin") {
      return res
        .status(403)
        .json({ message: "Access denied. You are not an admin." });
    }

    // Simpan informasi pengguna yang terdecoding di request untuk digunakan di handler berikutnya
    req.user = decoded;

    // Lanjutkan ke middleware berikutnya atau handler
    next();
  } catch (error) {
    // Jika token tidak valid, kirim 401 Unauthorized
    return res.status(401).json({ message: "Invalid token" });
  }
}
