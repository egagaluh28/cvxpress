import { useState } from "react";
import axios from "axios";

const CVForm = ({ onPreview = () => {} }) => {
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    socialMedia: [{ platform: "", link: "" }],
    address: "",
    summary: "",
    education: [
      {
        institution: "",
        location: "",
        major: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ],
    workExperience: [
      {
        position: "",
        company: "",
        location: "",
        startDate: "",
        endDate: "",
        tasks: [""],
      },
    ],
    organizationExperience: [
      {
        role: "",
        organization: "",
        location: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ],
    skillsAchievements: [
      { category: "", title: "", date: "", institution: "" },
    ],
  });

  const handleChange = (e) => {
    const updatedData = { ...data, [e.target.name]: e.target.value };
    setData(updatedData);
    onPreview(updatedData);
  };

  const handleArrayChange = (index, e, field, section) => {
    const updatedSection = [...data[section]];
    updatedSection[index][field] = e.target.value;
    const updatedData = { ...data, [section]: updatedSection };
    setData(updatedData);
    onPreview(updatedData);
  };

  const addField = (section) => {
    const emptyField = {
      socialMedia: { platform: "", link: "" },
      education: {
        institution: "",
        location: "",
        major: "",
        startDate: "",
        endDate: "",
        description: "",
      },
      workExperience: {
        position: "",
        company: "",
        location: "",
        startDate: "",
        endDate: "",
        tasks: [""],
      },
      organizationExperience: {
        role: "",
        organization: "",
        location: "",
        startDate: "",
        endDate: "",
        description: "",
      },
      skillsAchievements: {
        category: "",
        title: "",
        date: "",
        institution: "",
      },
    }[section];

    setData({ ...data, [section]: [...data[section], emptyField] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8000/api/cvs", data);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow-lg rounded-3">
      {/* Informasi Pribadi */}
      <h2 className="text-2xl mb-3">Informasi Pribadi</h2>
      <input
        type="text"
        name="name"
        placeholder="Nama Lengkap"
        className="form-control mb-3"
        onChange={handleChange}
      />
      <input
        type="text"
        name="phone"
        placeholder="Nomor Telepon"
        className="form-control mb-3"
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="form-control mb-3"
        onChange={handleChange}
      />
      <textarea
        name="address"
        placeholder="Alamat"
        className="form-control mb-3"
        onChange={handleChange}
      />
      <textarea
        name="summary"
        placeholder="Ringkasan"
        className="form-control mb-3"
        onChange={handleChange}
      />

      {/* Media Sosial */}
      <h2 className="text-2xl mt-4">Media Sosial</h2>
      {data.socialMedia.map((item, index) => (
        <div key={index} className="mb-3">
          <input
            type="text"
            placeholder="Platform (LinkedIn, Instagram, etc)"
            className="form-control mb-2"
            value={item.platform}
            onChange={(e) =>
              handleArrayChange(index, e, "platform", "socialMedia")
            }
          />
          <input
            type="url"
            placeholder="Link"
            className="form-control mb-2"
            value={item.link}
            onChange={(e) => handleArrayChange(index, e, "link", "socialMedia")}
          />
        </div>
      ))}
      <button
        type="button"
        onClick={() => addField("socialMedia")}
        className="btn btn-primary mb-3">
        Tambah Media Sosial
      </button>

      {/* Pendidikan */}
      <h2 className="text-2xl mt-4">Pendidikan</h2>
      {data.education.map((item, index) => (
        <div key={index} className="mb-3">
          <input
            type="text"
            placeholder="Institusi"
            className="form-control mb-2"
            value={item.institution}
            onChange={(e) =>
              handleArrayChange(index, e, "institution", "education")
            }
          />
          <input
            type="text"
            placeholder="Lokasi"
            className="form-control mb-2"
            value={item.location}
            onChange={(e) =>
              handleArrayChange(index, e, "location", "education")
            }
          />
          <input
            type="text"
            placeholder="Jurusan"
            className="form-control mb-2"
            value={item.major}
            onChange={(e) => handleArrayChange(index, e, "major", "education")}
          />
          <input
            type="date"
            placeholder="Tanggal Mulai"
            className="form-control mb-2"
            value={item.startDate}
            onChange={(e) =>
              handleArrayChange(index, e, "startDate", "education")
            }
          />
          <input
            type="date"
            placeholder="Tanggal Selesai"
            className="form-control mb-2"
            value={item.endDate}
            onChange={(e) =>
              handleArrayChange(index, e, "endDate", "education")
            }
          />
          <textarea
            placeholder="Deskripsi"
            className="form-control mb-2"
            value={item.description}
            onChange={(e) =>
              handleArrayChange(index, e, "description", "education")
            }
          />
        </div>
      ))}
      <button
        type="button"
        onClick={() => addField("education")}
        className="btn btn-primary mb-3">
        Tambah Pendidikan
      </button>

      {/* Pengalaman Kerja */}
      <h2 className="text-2xl mt-4">Pengalaman Kerja</h2>
      {data.workExperience.map((item, index) => (
        <div key={index} className="mb-3">
          <input
            type="text"
            placeholder="Posisi/Jabatan"
            className="form-control mb-2"
            value={item.position}
            onChange={(e) =>
              handleArrayChange(index, e, "position", "workExperience")
            }
          />
          <input
            type="text"
            placeholder="Nama Perusahaan"
            className="form-control mb-2"
            value={item.company}
            onChange={(e) =>
              handleArrayChange(index, e, "company", "workExperience")
            }
          />
          <input
            type="text"
            placeholder="Lokasi"
            className="form-control mb-2"
            value={item.location}
            onChange={(e) =>
              handleArrayChange(index, e, "location", "workExperience")
            }
          />
          <input
            type="date"
            placeholder="Tanggal Mulai"
            className="form-control mb-2"
            value={item.startDate}
            onChange={(e) =>
              handleArrayChange(index, e, "startDate", "workExperience")
            }
          />
          <input
            type="date"
            placeholder="Tanggal Selesai"
            className="form-control mb-2"
            value={item.endDate}
            onChange={(e) =>
              handleArrayChange(index, e, "endDate", "workExperience")
            }
          />
          <textarea
            placeholder="Tugas"
            className="form-control mb-2"
            value={item.tasks.join(", ")}
            onChange={(e) =>
              handleArrayChange(index, e, "tasks", "workExperience")
            }
          />
        </div>
      ))}
      <button
        type="button"
        onClick={() => addField("workExperience")}
        className="btn btn-primary mb-3">
        Tambah Pengalaman Kerja
      </button>

      {/* Organisasi */}
      <h2 className="text-2xl mt-4">Pengalaman Organisasi</h2>
      {data.organizationExperience.map((item, index) => (
        <div key={index} className="mb-3">
          <input
            type="text"
            placeholder="Jabatan"
            className="form-control mb-2"
            value={item.role}
            onChange={(e) =>
              handleArrayChange(index, e, "role", "organizationExperience")
            }
          />
          <input
            type="text"
            placeholder="Nama Organisasi"
            className="form-control mb-2"
            value={item.organization}
            onChange={(e) =>
              handleArrayChange(
                index,
                e,
                "organization",
                "organizationExperience"
              )
            }
          />
          <input
            type="text"
            placeholder="Lokasi"
            className="form-control mb-2"
            value={item.location}
            onChange={(e) =>
              handleArrayChange(index, e, "location", "organizationExperience")
            }
          />
          <input
            type="date"
            placeholder="Tanggal Mulai"
            className="form-control mb-2"
            value={item.startDate}
            onChange={(e) =>
              handleArrayChange(index, e, "startDate", "organizationExperience")
            }
          />
          <input
            type="date"
            placeholder="Tanggal Selesai"
            className="form-control mb-2"
            value={item.endDate}
            onChange={(e) =>
              handleArrayChange(index, e, "endDate", "organizationExperience")
            }
          />
          <textarea
            placeholder="Deskripsi"
            className="form-control mb-2"
            value={item.description}
            onChange={(e) =>
              handleArrayChange(
                index,
                e,
                "description",
                "organizationExperience"
              )
            }
          />
        </div>
      ))}
      <button
        type="button"
        onClick={() => addField("organizationExperience")}
        className="btn btn-primary mb-3">
        Tambah Pengalaman Organisasi
      </button>

      <button type="submit" className="btn btn-success">
        Simpan CV
      </button>
    </form>
  );
};

export default CVForm;
