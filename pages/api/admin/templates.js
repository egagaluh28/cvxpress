// pages/api/admin/templates.js
import jwt from "jsonwebtoken";
import mysql from "mysql2/promise";
import multer from "multer";
import nextConnect from "next-connect";
import path from "path";
import fs from "fs";

const JWT_SECRET =
  "02dd7175f8e35db07e032b9cabff9c29c141a6c85eee55bafe5bbf7f0c333db026aafa8173e3cca4d80a771f4be5881e6bff76db2b3ea1664cc67da50027261d"; // Ganti dengan secret key kamu

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "cvxpress",
});

// Setup multer untuk upload file
const upload = multer({
  storage: multer.diskStorage({
    destination: "./public/templates/", // Pastikan folder ini ada
    filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
  }),
});

// Membuat handler dengan nextConnect untuk mendukung multipart/form-data
const handler = nextConnect({
  onError(error, req, res) {
    console.error(error);
    res
      .status(501)
      .json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

handler.use(upload.single("template_file"));

handler.get(async (req, res) => {
  // Otentikasi dan verifikasi admin
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  let decoded;
  try {
    decoded = jwt.verify(token, JWT_SECRET);
    if (decoded.role !== "admin") {
      return res
        .status(403)
        .json({ message: "Access denied. You are not an admin." });
    }
  } catch (error) {
    console.error("Error verifying token:", error);
    return res.status(401).json({ message: "Invalid token" });
  }

  try {
    const [templates] = await db.query("SELECT * FROM templates");
    res.status(200).json({ templates });
  } catch (error) {
    console.error("Error fetching templates:", error);
    res.status(500).json({ message: "Database error" });
  }
});

handler.post(async (req, res) => {
  // Otentikasi dan verifikasi admin
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  let decoded;
  try {
    decoded = jwt.verify(token, JWT_SECRET);
    if (decoded.role !== "admin") {
      return res
        .status(403)
        .json({ message: "Access denied. You are not an admin." });
    }
  } catch (error) {
    console.error("Error verifying token:", error);
    return res.status(401).json({ message: "Invalid token" });
  }

  const { template_name } = req.body;
  const template_file = req.file ? `/templates/${req.file.filename}` : null;

  if (!template_name || !template_file) {
    return res
      .status(400)
      .json({ message: "Template name and file are required" });
  }

  try {
    const [result] = await db.query(
      "INSERT INTO templates (template_name, template_file) VALUES (?, ?)",
      [template_name, template_file]
    );
    res.status(200).json({
      message: "Template added successfully",
      template: {
        id_template: result.insertId,
        template_name,
        template_file,
      },
    });
  } catch (error) {
    console.error("Error adding template:", error);
    res.status(500).json({ message: "Database error" });
  }
});

export const config = {
  api: {
    bodyParser: false, // Mendukung multipart/form-data
  },
};

export default handler;
