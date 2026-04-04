import { Profile, Skill, Project } from './types';

export const PROFILE_DATA: Profile = {
  name: "Charles Eagan Effendy",
  tagline: "Menggunakan Analisis dan Teknologi untuk Menyelesaikan Masalah.",
  shortBio: "Saya seorang siswa SMAK Frateran Surabaya yang tertarik dalam analisis data dan pengembangan proyek teknologi. Saya memiliki pengalaman dalam mengembangkan proyek berbasis matematika dan teknologi, serta terus berusaha untuk meningkatkan keterampilan saya dalam dunia pemrograman dan analisis masalah.",
  aboutMe: "Saya masih bersekolah di SMAK Frateran Surabaya, kelas 12. Meskipun masih muda, saya sudah memiliki ketertarikan besar terhadap teknologi, analisis data, dan matematika. Saya percaya bahwa setiap masalah bisa dipecahkan dengan pendekatan yang tepat dan pemanfaatan teknologi yang maksimal.",
  mainSkills: "Analisis Data, Pengembangan Website, Matematika, Pemrograman (Python, JavaScript), GitHub.",
  passion: "Saya ingin terus mengembangkan keterampilan saya dalam dunia teknologi dan analisis data, dengan tujuan untuk berkontribusi dalam berbagai solusi berbasis teknologi yang dapat membantu banyak orang dan perusahaan.",
  email: "eagan.effendy.08@gmail.com",
  whatsapp: "082331993331",
  github: "https://github.com/EaganEffendy",
  profileImage: "/public/profilegen.jpeg",
};

export const SKILLS_DATA: Skill[] = [
  { id: '1', name: "Analisis Data" },
  { id: '2', name: "Matematika Terapan" },
  { id: '3', name: "Pemrograman (Python, JavaScript)" },
  { id: '4', name: "Pengembangan Web (HTML, CSS, Laravel)" },
  { id: '5', name: "Git & GitHub" },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: '1',
    name: "ANOMANI PROJECT",
    description: "Sebuah proyek di mana kami menganalisis masalah pada packaging Minuman Cincau NIKI ECHO dengan pendekatan matematis. Dalam proyek ini, saya fokus pada analisis data dan membantu menemukan solusi yang lebih efisien dan inovatif.",
    technologies: ["Matematika", "Improvisasi", "Pengolahan Data"],
    link: "https://github.com/EaganEffendy",
    image: "/public/anomanfoto.jpeg"
  },
];
