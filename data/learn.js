export const LEARN_COPY = {
  id: {
    pageTitle: "Catatan Belajar & Progres /learn",
    pageIntro:
      "Log belajar terbuka yang mencatat tiga fokus utama saya: sertifikasi CPTS, audit keamanan smart contract Rust/Solana, dan persiapan Red Teaming AWS.",
    sidebarTitle: "Notebook",
    expandAll: "Buka semua",
    collapseAll: "Tutup semua",
    overviewLabel: "Ringkasan",
    tracksLabel: "Jalur Aktif",
    externalLabel: "Repositori & Rujukan",
    backHome: "Kembali ke Portofolio",
    tabsAria: "Filter jalur pembelajaran",
    tabs: [
      { id: "all", label: "Semua Jalur" },
      { id: "solana", label: "Solana Audit" },
      { id: "cpts", label: "CPTS (50%)" },
      { id: "aws", label: "AWS Red Team (0%)" },
    ],
    statusLabels: {
      done: "Selesai",
      in_progress: "Berjalan",
      todo: "Terjadwal",
      planned: "Direncanakan",
    },
    moduleFilters: [
      { id: "all", label: "Semua (24)" },
      { id: "done", label: "Selesai (5)" },
      { id: "in_progress", label: "Berjalan (3)" },
      { id: "todo", label: "Berikutnya (16)" },
      { id: "high", label: "Kritis Auditor (10)" },
    ],
    emptyFilterTitle: "Tidak ada modul yang cocok dengan filter ini",
    emptyFilterHint: "Pilih filter lain atau reset ke Semua (24).",
    resetFilter: "Tampilkan semua modul",
    verifiedNote:
      "Data progres Solana Smart Contract Audit diambil langsung dari repositori lokal Rust-Smart-Contract-Security-Audit per 26 November 2026.",
    cptsTitle: "CPTS (Certified Penetration Testing Specialist)",
    cptsBadge: "50% Berjalan",
    cptsSyncNotice:
      "Status 50% dilaporkan langsung. Rincian catatan per modul lokal belum dipulihkan pasca-reset SSD sehingga hanya domain kurikulum resmi yang dicantumkan tanpa angka palsu per sub-topik.",
    solanaTitle: "Solana Smart Contract Security Audit",
    solanaBadge: "Aktif: Phase 1 (5 Selesai, 3 Berjalan)",
    solanaRepoCta: "Buka repo Rust-Smart-Contract-Security-Audit",
    solanaPhasesTitle: "Peta Jalan 5 Fase",
    solanaPhase1Title: "Phase 1: Rust Programming Fundamentals (24 Modul)",
    solanaPrereqTitle: "3 Materi Prasyarat Kritis Sebelum Phase 2",
    awsTitle: "Red Teaming / Certified AWS Red Team Specialist",
    awsBadge: "0% - Akan Dilanjutkan",
    awsQueueNotice:
      "Jalur ini saat ini berada di 0% dan dijadwalkan untuk dilanjutkan setelah target CPTS dan Phase 1 Rust/Solana rampung. Daftar di bawah adalah ruang lingkup rencana studi.",
    filesLabel: "Berkas latihan terverifikasi",
    auditorFocusLabel: "Fokus auditor",
    tableHeaders: {
      track: "Jalur Belajar",
      focus: "Fokus Materi",
      progress: "Progres",
    },
  },
  en: {
    pageTitle: "Learning Log & Progress /learn",
    pageIntro:
      "Public study notebook tracking three security tracks: Hack The Box CPTS, Rust and Solana smart contract auditing, and Certified AWS Red Team Specialist.",
    sidebarTitle: "Notebook",
    expandAll: "Expand all",
    collapseAll: "Collapse all",
    overviewLabel: "Overview",
    tracksLabel: "Study Tracks",
    externalLabel: "Repositories & Links",
    backHome: "Back to Portfolio",
    tabsAria: "Learning track filter",
    tabs: [
      { id: "all", label: "All Tracks" },
      { id: "solana", label: "Solana Audit" },
      { id: "cpts", label: "CPTS (50%)" },
      { id: "aws", label: "AWS Red Team (0%)" },
    ],
    statusLabels: {
      done: "Done",
      in_progress: "In Progress",
      todo: "Todo",
      planned: "Planned",
    },
    moduleFilters: [
      { id: "all", label: "All (24)" },
      { id: "done", label: "Done (5)" },
      { id: "in_progress", label: "In Progress (3)" },
      { id: "todo", label: "Todo (16)" },
      { id: "high", label: "Auditor Critical (10)" },
    ],
    emptyFilterTitle: "No modules match this filter",
    emptyFilterHint: "Switch filter or reset to show all 24 Rust modules.",
    resetFilter: "Show all modules",
    verifiedNote:
      "Solana Smart Contract Audit progress is synced directly from the local Rust-Smart-Contract-Security-Audit repository as of November 26, 2026.",
    cptsTitle: "CPTS (Certified Penetration Testing Specialist)",
    cptsBadge: "50% In Progress",
    cptsSyncNotice:
      "Overall progress is 50%. Granular local notes have not been restored since the SSD failure, so core track domains are listed without fabricated sub-module numbers.",
    solanaTitle: "Solana Smart Contract Security Audit",
    solanaBadge: "Active: Phase 1 (5 Done, 3 In Progress)",
    solanaRepoCta: "Open Rust-Smart-Contract-Security-Audit repo",
    solanaPhasesTitle: "5-Phase Roadmap",
    solanaPhase1Title: "Phase 1: Rust Programming Fundamentals (24 Modules)",
    solanaPrereqTitle: "3 Critical Web3 Prerequisites Before Phase 2",
    awsTitle: "Red Teaming / Certified AWS Red Team Specialist",
    awsBadge: "0% - Queued Next",
    awsQueueNotice:
      "Currently at 0% and queued to resume after current CPTS and Rust/Solana milestones. Items below represent the planned study scope.",
    filesLabel: "Verified exercise files",
    auditorFocusLabel: "Auditor focus",
    tableHeaders: {
      track: "Track",
      focus: "Scope",
      progress: "Progress",
    },
  },
};

export const TRACK_OVERVIEW = [
  {
    id: "solana",
    anchor: "#track-solana",
    name: "Solana Smart Contract Security Audit",
    metric: "Phase 1: 5 Done, 3 In Progress / 24",
    shortMetric: { id: "5/24 (+3 aktif)", en: "5/24 (+3 active)" },
    pct: 21,
    status: "in_progress",
    updated: { id: "Diperbarui 2026-11-26", en: "Updated 2026-11-26" },
    summary: {
      id: "Fokus aktif pada fondasi Rust (Rust By Example) dengan catatan kerentanan auditor Web3.",
      en: "Active focus on Rust fundamentals (Rust By Example) mapped to Web3 security audit pitfalls.",
    },
  },
  {
    id: "cpts",
    anchor: "#track-cpts",
    name: "Hack The Box CPTS",
    metric: "50%",
    shortMetric: { id: "50%", en: "50%" },
    pct: 50,
    status: "in_progress",
    updated: { id: "Jalur aktif", en: "Active track" },
    summary: {
      id: "Jalur penetration testing ofensif (web, jaringan, Active Directory, dan pelaporan).",
      en: "Offensive penetration testing path covering web, network, Active Directory, and reporting.",
    },
  },
  {
    id: "aws",
    anchor: "#track-aws",
    name: "Certified AWS Red Team Specialist",
    metric: "0%",
    shortMetric: { id: "0%", en: "0%" },
    pct: 0,
    status: "planned",
    updated: { id: "Akan dilanjutkan", en: "Queued next" },
    summary: {
      id: "Jalur cloud red teaming AWS yang akan dilanjutkan setelah milestone CPTS dan Phase 1 Rust.",
      en: "AWS cloud red teaming track queued to continue after current CPTS and Rust milestones.",
    },
  },
];

export const CPTS_TRACK = {
  id: "cpts",
  provider: "Hack The Box Academy",
  progress: 50,
  status: "in_progress",
  domains: [
    {
      name: { id: "Information Gathering & Network Enumeration", en: "Information Gathering & Network Enumeration" },
      detail: {
        id: "Pemetaan permukaan serangan, enumerasi layanan, serta pengumpulan informasi infrastruktur.",
        en: "Attack surface mapping, service enumeration, and infrastructure reconnaissance.",
      },
    },
    {
      name: { id: "Web Application Exploitation", en: "Web Application Exploitation" },
      detail: {
        id: "Injeksi, bypass autentikasi, manipulasi otorisasi, dan pengujian API.",
        en: "Injection flaws, authentication bypass, authorization testing, and API attacks.",
      },
    },
    {
      name: { id: "Active Directory & Lateral Movement", en: "Active Directory & Lateral Movement" },
      detail: {
        id: "Enumerasi domain AD, serangan Kerberos, eskalasi hak akses, dan pivoting jaringan.",
        en: "AD enumeration, Kerberos attacks, privilege escalation, and network pivoting.",
      },
    },
    {
      name: { id: "Vulnerability Assessment & Reporting", en: "Vulnerability Assessment & Reporting" },
      detail: {
        id: "Dokumentasi PoC, penilaian dampak, serta penyusunan laporan teknis siap tindak.",
        en: "PoC documentation, impact scoping, and actionable penetration testing reports.",
      },
    },
  ],
};

export const RUST_MODULES = [
  {
    num: "01",
    slug: "01-Hello-World",
    title: "Hello World",
    status: "done",
    priority: "medium",
    topics: "Formatted print, Debug, Display, Formatting",
    files: ["1-Hello-World.rs"],
    auditorFocus: {
      id: "Dasar output debug dan pemformatan log diagnostik.",
      en: "Diagnostic formatting and Debug vs Display traits.",
    },
  },
  {
    num: "02",
    slug: "02-Primitives",
    title: "Primitives",
    status: "done",
    priority: "medium",
    topics: "Literals & Operators, Tuples, Arrays & Slices",
    files: ["primitives_intro.rs", "1-Literals-and-Operators.rs", "tuples.rs", "array.rs"],
    auditorFocus: {
      id: "Batas tipe primitif integer, slice indexing aman, dan layout tuple.",
      en: "Primitive integer bounds, safe slice indexing, and tuple structures.",
    },
  },
  {
    num: "03",
    slug: "03-Custom-Types",
    title: "Custom Types",
    status: "done",
    priority: "high",
    topics: "Structures (struct), Enums, Constants (const, static)",
    files: ["custom_types_intro.rs", "structures.rs", "enum.rs", "constants.rs"],
    auditorFocus: {
      id: "State akun smart contract direpresentasikan sebagai struct dan enum; wajib ketat agar status tidak bisa di-bypass.",
      en: "On-chain account state relies on structs and enums; improper state variants lead to authorization bypass.",
    },
  },
  {
    num: "04",
    slug: "04-Variable-Bindings",
    title: "Variable Bindings",
    status: "done",
    priority: "medium",
    topics: "Mutability, Scope, Shadowing, Freezing",
    files: ["variable_bindings_intro.rs", "mutability.rs", "scope_and_shadowing.rs", "declare_first.rs", "freezing.rs"],
    auditorFocus: {
      id: "Mendeteksi variable shadowing yang tidak sengaja menimpa nilai validasi atau saldo.",
      en: "Spotting unintended variable shadowing that masks validated state or balances.",
    },
  },
  {
    num: "05",
    slug: "05-Types",
    title: "Types",
    status: "done",
    priority: "high",
    topics: "Casting (as), Literals, Inference, Aliasing",
    files: ["types_intro.rs", "casting.rs", "literals.rs", "inference.rs", "aliasing.rs"],
    auditorFocus: {
      id: "Kerentanan Type Casting: penggunaan `as` (misal u64 as u32) memotong bit secara diam-diam (silent truncation).",
      en: "Type Casting Vulnerability: `as` downcasting (e.g. u64 as u32) causes silent bit truncation.",
    },
  },
  {
    num: "06",
    slug: "06-Conversion",
    title: "Conversion",
    status: "in_progress",
    priority: "high",
    topics: "From & Into, TryFrom & TryInto, String parsing",
    files: ["conversion_intro.rs", "from_into.rs", "try_from_try_into.rs"],
    auditorFocus: {
      id: "Mengganti `as` dengan TryFrom/TryInto agar overflow mengembalikan Result::Err, bukan korupsi saldo atau panic di From.",
      en: "Replacing `as` with TryFrom/TryInto so overflows return Result::Err instead of truncating balances.",
    },
  },
  {
    num: "07",
    slug: "07-Expressions",
    title: "Expressions",
    status: "in_progress",
    priority: "medium",
    topics: "Statement vs Expression blocks, Semicolon effect, Unit ()",
    files: ["expressions_intro.rs", "statements_expressions.rs", "block_expressions.rs"],
    auditorFocus: {
      id: "Menghindari silent check bypass akibat penempatan titik koma yang menekan nilai balik menjadi unit type ().",
      en: "Preventing accidental unit () returns from stray semicolons and enforcing CEI evaluation order.",
    },
  },
  {
    num: "08",
    slug: "08-Flow-of-Control",
    title: "Flow of Control",
    status: "in_progress",
    priority: "high",
    topics: "if/else, loop, while, for, match, if let, let-else",
    files: ["flow_control_intro.rs", "if_else.rs", "loops.rs"],
    auditorFocus: {
      id: "Larangan wildcard `_` pada match status akun, mitigasi DoS via unbounded loop (Compute Units), dan guard clause `let-else`.",
      en: "Banning wildcard `_` on account status matches, preventing unbounded-loop CU exhaustion, and `let-else` signer guards.",
    },
  },
  { num: "09", slug: "09-Functions", title: "Functions", status: "todo", priority: "medium", topics: "Methods, Closures, Higher-Order Functions, Diverging functions", files: [] },
  { num: "10", slug: "10-Modules", title: "Modules", status: "todo", priority: "medium", topics: "Visibility (pub), use, super and self", files: [] },
  { num: "11", slug: "11-Crates", title: "Crates", status: "todo", priority: "medium", topics: "Libraries & linkage", files: [] },
  { num: "12", slug: "12-Cargo", title: "Cargo", status: "todo", priority: "medium", topics: "Dependencies, build conventions, testing", files: [] },
  { num: "13", slug: "13-Attributes", title: "Attributes", status: "todo", priority: "medium", topics: "Dead code, conditional compilation (cfg)", files: [] },
  {
    num: "14",
    slug: "14-Generics",
    title: "Generics",
    status: "todo",
    priority: "high",
    topics: "Functions, Traits, Bounds, Where clauses, Phantom types",
    files: [],
    auditorFocus: {
      id: "Memahami abstraksi generik dan trait bounds yang mendasari konteks akun di framework Anchor.",
      en: "Understanding generic bounds and phantom types behind Anchor account wrappers.",
    },
  },
  {
    num: "15",
    slug: "15-Scoping-Rules",
    title: "Scoping Rules",
    status: "todo",
    priority: "high",
    topics: "RAII, Ownership & Move, Borrowing, Lifetimes",
    files: [],
    auditorFocus: {
      id: "Manajemen borrowing & mutabilitas `&mut` untuk mencegah Account Aliasing (Duplicate Mutable Accounts) di Solana.",
      en: "Ownership and `&mut` borrowing rules critical to spotting Account Aliasing bugs in Solana.",
    },
  },
  {
    num: "16",
    slug: "16-Traits",
    title: "Traits",
    status: "todo",
    priority: "high",
    topics: "Derive, Trait objects (dyn), Supertraits, Overlapping",
    files: [],
    auditorFocus: {
      id: "Membaca trait inti Anchor seperti AccountDeserialize, ToAccountInfo, dan Signer.",
      en: "Reading core Anchor traits such as AccountDeserialize, ToAccountInfo, and Signer.",
    },
  },
  {
    num: "17",
    slug: "17-Macros",
    title: "Macros",
    status: "todo",
    priority: "high",
    topics: "Macro rules (macro_rules!), designators, DSLs",
    files: [],
    auditorFocus: {
      id: "Memahami ekspansi procedural macro (`#[account]`, `#[program]`) yang menyusun sebagian besar program Anchor.",
      en: "Understanding procedural macro expansions (`#[account]`, `#[program]`) in Anchor codebases.",
    },
  },
  {
    num: "18",
    slug: "18-Error-Handling",
    title: "Error Handling",
    status: "todo",
    priority: "high",
    topics: "panic!, Option, Result, operator ?, custom errors",
    files: [],
    auditorFocus: {
      id: "Mencegah celah DoS akibat panic/unwrap dan mengaudit penanganan Result<T, E> dengan `?`.",
      en: "Eliminating panic/unwrap DoS vectors and auditing Result<T, E> error propagation.",
    },
  },
  { num: "19", slug: "19-Std-Library-Types", title: "Std Library Types", status: "todo", priority: "medium", topics: "Box, Vec, String, HashMap, Rc, Arc", files: [] },
  { num: "20", slug: "20-Std-Misc", title: "Std Misc", status: "todo", priority: "low", topics: "Threads, Channels, File I/O, Child process, FFI (Low priority on SBF/WASM)", files: [] },
  { num: "21", slug: "21-Testing", title: "Testing", status: "todo", priority: "medium", topics: "Unit tests, Integration tests, Documentation tests", files: [] },
  {
    num: "22",
    slug: "22-Unsafe-Operations",
    title: "Unsafe Operations",
    status: "todo",
    priority: "high",
    topics: "Raw pointers, Unsafe functions, Memory transmute",
    files: [],
    auditorFocus: {
      id: "Mengaudit blok `unsafe` dan `std::mem::transmute` yang sering dipakai untuk optimasi Compute Units (CU).",
      en: "Auditing `unsafe` blocks and `std::mem::transmute` used in low-level CU optimization.",
    },
  },
  { num: "23", slug: "23-Compatibility", title: "Compatibility", status: "todo", priority: "medium", topics: "Rust editions and version checks", files: [] },
  { num: "24", slug: "24-Meta", title: "Meta", status: "todo", priority: "medium", topics: "Documentation & Benchmarking", files: [] },
];

export const WEB3_PREREQUISITES = [
  {
    title: "Borsh & Binary Serialization / Deserialization",
    detail: {
      id: "Konversi array byte mentah akun Solana (&mut [u8]) ke struct Rust secara deterministik; deteksi data incomplete deserialization dan length mismatch.",
      en: "Deterministic serialization of raw Solana account byte arrays (&mut [u8]) into structs; detecting incomplete deserialization and length mismatches.",
    },
  },
  {
    title: "Arithmetic Safety (Checked, Saturating, & Wrapping Math)",
    detail: {
      id: "Pencegahan silent two's-complement wrap-around pada mode --release menggunakan .checked_add/sub/mul/div(), .saturating_*(), dan overflow-checks = true.",
      en: "Preventing silent wrap-around in --release builds with .checked_*(), .saturating_*(), and Cargo overflow-checks = true.",
    },
  },
  {
    title: "Fixed-Point Math & Eliminasi Floating Point (f32 / f64)",
    detail: {
      id: "Menghindari non-deterministik IEEE 754 di validator blockchain dengan scaled integers (Lamports 10^9, Basis Points) serta perkalian sebelum pembagian (A * B) / C.",
      en: "Eliminating non-deterministic IEEE 754 floats via scaled integers (Lamports, BPS) and multiply-before-divide ordering.",
    },
  },
];

export const SOLANA_ROADMAP_PHASES = [
  {
    phase: "Phase 1",
    title: "Rust Programming Fundamentals",
    status: "in_progress",
    progressLabel: "5 Done, 3 In Progress / 24 Modules",
    items: [
      "01-05: Hello World, Primitives, Custom Types, Variable Bindings, Types (DONE)",
      "06-08: Conversion, Expressions, Flow of Control (IN PROGRESS)",
      "09-24: Functions, Generics, Scoping Rules, Traits, Macros, Error Handling, Unsafe (TODO)",
    ],
  },
  {
    phase: "Phase 2",
    title: "Solana Smart Contract Development",
    status: "todo",
    progressLabel: "Queued",
    items: [
      "Solana Core Primitives: Stateless programs, AccountInfo, rent exemption, compute budget (CU)",
      "Program Derived Addresses (PDA): Deterministic derivation, seeds, canonical bumps",
      "Cross-Program Invocation (CPI): Invoking external programs, signed CPI via PDA",
      "The Anchor Framework: #[program], #[derive(Accounts)], constraints (has_one, signer, mut)",
      "Hands-on: Simple Vault & Escrow, Staking Pool, SPL-Token Mint & Transfer Controller",
    ],
  },
  {
    phase: "Phase 3",
    title: "Smart Contract Vulnerabilities Lab",
    status: "todo",
    progressLabel: "Queued",
    items: [
      "Missing Signer / Owner Check",
      "Account Aliasing (Duplicate Mutable Accounts)",
      "Type Cosplay (Discriminator Confusion)",
      "Arbitrary CPI (program_id injection)",
      "Precision Loss & Rounding Bugs",
      "Bump Seed Collision & Closing Account Revival",
    ],
  },
  {
    phase: "Phase 4",
    title: "Audit Tooling & Fuzzing",
    status: "todo",
    progressLabel: "Queued",
    items: [
      "Static Analysis: clippy, cargo-audit, cargo-geiger, soteria",
      "Property-Based Testing: proptest, quickcheck",
      "Advanced Fuzzing: Trident Fuzzing Framework for Anchor",
      "Standalone Exploit Proof-of-Concept (PoC) tests",
    ],
  },
  {
    phase: "Phase 5",
    title: "Competitive Auditing & Bug Bounties",
    status: "todo",
    progressLabel: "Queued",
    items: [
      "CTF Challenges: Neodyme Solana CTF, OtterSec CTF",
      "Post-Mortem Reconstruction: Wormhole, Cashio, Crema Finance",
      "Bug Bounty Platforms: Immunefi, Cantina, Code4rena",
    ],
  },
];

export const AWS_RED_TEAM_TRACK = {
  id: "aws-red-team",
  provider: "CyberWarfare Labs (CARTS) / AWS Red Teaming",
  progress: 0,
  status: "planned",
  plannedAreas: [
    {
      title: "AWS Reconnaissance & IAM Enumeration",
      detail: {
        id: "Pemetaan akun AWS, kebijakan IAM, trust relationship, dan identifikasi permission boundary.",
        en: "AWS account mapping, IAM policy analysis, trust relationships, and permission boundary inspection.",
      },
    },
    {
      title: "Privilege Escalation & STS Role Chaining",
      detail: {
        id: "Eksploitasi kombinasi izin IAM yang keliru, AssumeRole chaining, dan penyalahgunaan kredensial sementara.",
        en: "Exploiting misconfigured IAM permission combinations, AssumeRole chains, and temporary STS tokens.",
      },
    },
    {
      title: "Compute, Storage & Serverless Pivoting",
      detail: {
        id: "Pengujian metadata EC2 (IMDSv1/v2), bucket S3, fungsi Lambda, dan celah SSRF ke layanan internal.",
        en: "EC2 metadata (IMDSv1/v2), S3 permissions, Lambda execution context, and SSRF pivoting.",
      },
    },
    {
      title: "Detection Engineering & CloudTrail Gaps",
      detail: {
        id: "Memahami jejak CloudTrail dan GuardDuty untuk meningkatkan visibilitas deteksi dari sisi red team.",
        en: "Analyzing CloudTrail logging coverage and GuardDuty telemetry from an adversary simulation lens.",
      },
    },
  ],
};
