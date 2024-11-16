// pages/admin/templates.js
import { useEffect, useState } from "react";

const TemplateManagement = () => {
  const [templates, setTemplates] = useState([]);
  const [templateName, setTemplateName] = useState("");
  const [templateFile, setTemplateFile] = useState(null);

  useEffect(() => {
    // Fetch daftar template dari backend
    const fetchTemplates = async () => {
      try {
        const res = await fetch("/api/admin/templates", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = await res.json();
        if (res.ok) {
          setTemplates(data.templates);
        } else {
          alert(data.message);
        }
      } catch (error) {
        console.error("Error fetching templates:", error);
      }
    };

    fetchTemplates();
  }, []);

  const handleAddTemplate = async (e) => {
    e.preventDefault();
    if (!templateName || !templateFile) {
      alert("Please provide both template name and file.");
      return;
    }

    const formData = new FormData();
    formData.append("template_name", templateName);
    formData.append("template_file", templateFile);

    try {
      const res = await fetch("/api/admin/templates", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: formData,
      });
      const data = await res.json();
      if (res.ok) {
        setTemplates([...templates, data.template]);
        setTemplateName("");
        setTemplateFile(null);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error adding template:", error);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this template?")) return;

    try {
      const res = await fetch(`/api/admin/templates/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await res.json();
      if (res.ok) {
        setTemplates(
          templates.filter((template) => template.id_template !== id)
        );
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error deleting template:", error);
    }
  };

  return (
    <div>
      <h1>Template Management</h1>

      {/* Form Tambah Template */}
      <form onSubmit={handleAddTemplate} className="mb-4">
        <div className="form-group">
          <label>Template Name</label>
          <input
            type="text"
            className="form-control"
            value={templateName}
            onChange={(e) => setTemplateName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Template File</label>
          <input
            type="file"
            className="form-control-file"
            onChange={(e) => setTemplateFile(e.target.files[0])}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Template
        </button>
      </form>

      {/* Daftar Template */}
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Template Name</th>
            <th>Template File</th>
            <th>Created At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {templates.map((template) => (
            <tr key={template.id_template}>
              <td>{template.id_template}</td>
              <td>{template.template_name}</td>
              <td>{template.template_file}</td>
              <td>{new Date(template.created_at).toLocaleDateString()}</td>
              <td>
                {/* Tambahkan tombol edit jika diperlukan */}
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(template.id_template)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
  );
};

export default TemplateManagement;
