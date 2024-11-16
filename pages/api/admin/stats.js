import jwt from "jsonwebtoken";
import mysql from "mysql2/promise";

const JWT_SECRET =
  "02dd7175f8e35db07e032b9cabff9c29c141a6c85eee55bafe5bbf7f0c333db026aafa8173e3cca4d80a771f4be5881e6bff76db2b3ea1664cc67da50027261d"; // Ganti dengan secret key kamu

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "cvxpress",
});

export default async function handler(req, res) {
  if (req.method === "GET") {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      if (decoded.role !== "admin") {
        return res
          .status(403)
          .json({ message: "Access denied. You are not an admin." });
      }

      // Fetch statistik
      const [usersResult] = await db.execute(
        "SELECT COUNT(*) as count FROM users"
      );
      const [cvResult] = await db.execute("SELECT COUNT(*) as count FROM cv");
      const [templatesResult] = await db.execute(
        "SELECT COUNT(*) as count FROM templates"
      );

      res.status(200).json({
        totalUsers: usersResult[0].count,
        totalCVs: cvResult[0].count,
        totalTemplates: templatesResult[0].count,
      });
    } catch (error) {
      console.error("Error verifying token:", error);
      res.status(401).json({ message: "Invalid token" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
