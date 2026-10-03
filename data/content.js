// Edit semua isi portofolio di file ini. Angka dan nama masih contoh.
export const ME = {
  name: "Kartiko Damar Jati",
  location: "Yogyakarta, ID",
  roles: ["Security Engineer", "Penetration Tester", "Mahasiswa Sistem Informasi", "CTF Player"],
  bio: "Seorang mahasiswa S1 Program Studi Sistem Informasi di Universitas Pembangunan Nasional 'Veteran' Yogyakarta (UPNVYK) dengan fokus pada bidang Keamanan Siber.",
};

export const PROFILE = [
  ["Nama", "Kartiko Damar Jati"],
  ["Peran", "Security Engineer / Penetration Tester"],
  ["Kampus", "UPN Veteran Yogyakarta"],
  ["Prodi", "Sistem Informasi, Semester 5"],
  ["Fokus", "Web & Network Pentesting"],
  ["Bahasa", "Indonesia, English"],
];

export const STATS = [
  { v: 5, l: "Semester ditempuh" },
  { v: 5, l: "CTF diikuti", plus: true },
  { v: 3, l: "Writeup ditulis", plus: true },
  { v: 2, l: "Sertifikasi" },
];

export const SKILLS = [
  { level: "KUAT", items: [{ n: "Web Pentesting (OWASP Top 10)", v: 80 }, { n: "Burp Suite", v: 80 }, { n: "Nmap & Recon", v: 95 }] },
  { level: "MENENGAH", items: [{ n: "Linux & Bash", v: 75 }, { n: "Python Scripting", v: 80 }, { n: "Log Analysis", v: 85 }, { n: "Wazuh / SIEM", v: 90 }] },
  { level: "SEDANG DIPELAJARI", tags: ["Active Directory", "Cloud Security", "Reverse Engineering", "Binary Exploitation"] },
  { level: "SOFT SKILLS", tags: ["Berpikir kritis", "Dokumentasi", "Kolaborasi tim", "Belajar mandiri dan berkelanjutan", "Konsisten"] },
];

export const CERTS = [
  { name: "Certified Junior Web Application Penetration Tester (CJWAPT)", org: "Sturtle Security Pvt Ltd", year: "Maret 2026" },
  { name: "Google Cybersecurity Certified Professional (GCPC)", org: "Google", year: "Juli 2026" },
];

export const PROJECTS = [
  { file: "SMB_Enumeration_Tools.py", name: "SMB Enumeration Framework", desc: "Tool Python untuk memindai dan mengenumerasi protokol SMB", tech: ["Python", "Nmap"], link: "https://github.com/tikodjati/Penetration_Testing_Tools-By_Kierrr/tree/main/SMB_Enum_Tools" },
  { file: "WAZUH SIEM and Mod Security.pptx", name: "Home Lab SOC", desc: "Implementasi SIEM WAZUH & WAF Mod Security Dengan Integrasi Alert Telegram Secara Realtime dan WAZUH SOC AI Copilot Berbasis Local LLM", tech: ["Wazuh", "Python", "Linux"], link: "https://drive.google.com/drive/folders/1rrwqLBflwW7usMwBzj3772i2nd2fbShI" },
  { file: "seeker.py", name: "Google Dorking Framework", desc: "Sebuah framework untuk mengumpulkan informasi dari sumber terbuka dengan metode Google Dorking (OSINT)", tech: ["Python", "Search Engine (Google)", "OSINT"], link: "https://github.com/tikodjati/Penetration_Testing_Tools-By_Kierrr/tree/main/Google-Dorking_Tools" },
];

export const WRITEUPS = [
  // { title: "Will be Added Soon", ev: "", cat: "", date: "", link: "#" },
];

export const EXP = [
  { role: "Security Engineer", org: "PT Sydecode Indonesia", time: "Oktober 2026 - Sekarang", now: true, pts: ["Proses onboarding"] },
  {
    role: "Cyber Security Engineer (Intern)", org: "PT Teknologi Server Indonesia (XCODE)", time: "10 Juli 2026 - 30 Agustus 2026", pts: ["Melakukan pengujian penetrasi pada website forum komunitas XCODE", "Merancang dan mengonfigurasi SIEM Wazuh dengan integrasi Virustotal, Shodan, realtime Telegram alert, dan Wazuh AI Copilot berbasis local LLM.", "Melakukan simulasi pentesting terhadap endpoint input user untuk menguji efektivitas SIEM Wazuh yang dirancang"]
  },
  { role: "Community Representative", org: "Anon Cyber Team", time: "2025 - sekarang", pts: ["Menjadi anggota dari komunitas Keamanan Siber Anon Cyber Team (ACT) sebagai bentuk pengabdian sosial"] },
  { role: "Mahasiswa Sistem Informasi", org: "UPN Veteran Yogyakarta", time: "2024 - sekarang", pts: ["Semester 5, fokus pada keamanan informasi dan pengembangan sistem."] },
];

export const CONTACT = [
  { n: "LinkedIn", u: "https://www.linkedin.com/in/kartikodamarjati/" },
  { n: "Instagram", u: "https://www.instagram.com/tikodmrjt/" },
  { n: "GitHub", u: "https://github.com/tikodjati" },
  { n: "Email", u: "mailto:tikodjati08@gmail.com" },
];
