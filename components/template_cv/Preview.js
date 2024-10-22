import React from "react";

const Preview = ({ data }) => {
  return (
    <div id="cv-preview" className="p-4 bg-white text-dark rounded shadow-sm">
      {/* Nama dan Data Diri */}
      <h1 className="h3 h-lg-1 font-weight-bold text-center mb-2">
        {data.name || "Nama Lengkap"}
      </h1>
      <p className="text-center text-muted mb-3">
        {data.address || "Alamat, Kota, Negara"} | {data.phone || "+62xxxxxxx"}{" "}
        | {data.email || "email@example.com"}
      </p>
      <div className="d-flex justify-content-center gap-2 mb-4 flex-wrap">
        {data.socialMedia?.map((media, index) => (
          <a
            key={index}
            href={media.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark text-decoration-underline">
            {media.platform}
          </a>
        ))}
      </div>

      {/* Deskripsi Diri */}
      <section className="mb-4">
        <h2 className="h5 h-lg-4 border-bottom pb-2 mb-3">Deskripsi Diri</h2>
        <p>{data.summary || "Deskripsi singkat tentang diri Anda..."}</p>
      </section>

      {/* Pendidikan */}
      <section className="mb-4">
        <h2 className="h5 h-lg-4 border-bottom pb-2 mb-3">Pendidikan</h2>
        {data.education.map((edu, index) => (
          <div key={index} className="mb-3">
            <h3 className="font-weight-bold">
              {edu.institution || "Institusi"}
            </h3>
            <p>
              {edu.major || "Jurusan"} | {edu.startDate} - {edu.endDate}
            </p>
            <p>{edu.location || "Lokasi"}</p>
            <p>{edu.description || "Deskripsi tentang pendidikan..."}</p>
          </div>
        ))}
      </section>

      {/* Pengalaman Kerja */}
      <section className="mb-4">
        <h2 className="h5 h-lg-4 border-bottom pb-2 mb-3">Pengalaman Kerja</h2>
        {data.workExperience.map((work, index) => (
          <div key={index} className="mb-3">
            <h3 className="font-weight-bold">{work.position || "Posisi"}</h3>
            <p>
              {work.company || "Nama Perusahaan"} | {work.startDate} -{" "}
              {work.endDate}
            </p>
            <p>{work.location || "Lokasi"}</p>
            <p>Tugas: {work.tasks.join(", ") || "Deskripsi tugas..."}</p>
          </div>
        ))}
      </section>

      {/* Pengalaman Organisasi */}
      <section className="mb-4">
        <h2 className="h5 h-lg-4 border-bottom pb-2 mb-3">
          Pengalaman Organisasi
        </h2>
        {data.organizationExperience.map((org, index) => (
          <div key={index} className="mb-3">
            <h3 className="font-weight-bold">{org.role || "Peran"}</h3>
            <p>
              {org.organization || "Nama Organisasi"} | {org.startDate} -{" "}
              {org.endDate}
            </p>
            <p>{org.location || "Lokasi"}</p>
            <p>{org.description || "Deskripsi organisasi..."}</p>
          </div>
        ))}
      </section>

      {/* Keterampilan dan Prestasi */}
      <section className="mb-4">
        <h2 className="h5 h-lg-4 border-bottom pb-2 mb-3">
          Keterampilan, Proyek, dan Prestasi
        </h2>
        {data.skillsAchievements.map((item, index) => (
          <div key={index} className="mb-3">
            <h3 className="font-weight-bold">{item.title || "Judul"}</h3>
            <p>
              {item.category || "Kategori"} | {item.date} |{" "}
              {item.institution || "Institusi"}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Preview;
