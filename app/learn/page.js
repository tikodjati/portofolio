"use client";
import { useMemo, useRef, useState } from "react";
import Link from "next/link";
import { SITE } from "../../data/content";
import {
  AWS_RED_TEAM_TRACK,
  CPTS_TRACK,
  LEARN_COPY,
  RUST_MODULES,
  SOLANA_ROADMAP_PHASES,
  WEB3_PREREQUISITES,
} from "../../data/learn";
import { useSite } from "../../components/SiteProvider";
import LearnProgressTable from "../../components/LearnProgressTable";

export default function LearnPage() {
  const { lang } = useSite();
  const lt = LEARN_COPY[lang];

  const [activeTab, setActiveTab] = useState("all");
  const [moduleFilter, setModuleFilter] = useState("all");
  const [sidebarOpenMobile, setSidebarOpenMobile] = useState(false);
  const [openGroups, setOpenGroups] = useState({
    tracks: true,
    solana: true,
    links: true,
  });

  const tabRefs = useRef([]);

  const allExpanded = Object.values(openGroups).every(Boolean);

  const toggleAllGroups = () => {
    const next = !allExpanded;
    setOpenGroups({ tracks: next, solana: next, links: next });
  };

  const doneCount = useMemo(
    () => RUST_MODULES.filter((m) => m.status === "done").length,
    []
  );
  const inProgressCount = useMemo(
    () => RUST_MODULES.filter((m) => m.status === "in_progress").length,
    []
  );
  const rustDonePct = Math.round((doneCount / RUST_MODULES.length) * 100);

  const filteredModules = useMemo(() => {
    if (moduleFilter === "all") return RUST_MODULES;
    if (moduleFilter === "high") return RUST_MODULES.filter((m) => m.priority === "high");
    return RUST_MODULES.filter((m) => m.status === moduleFilter);
  }, [moduleFilter]);

  const handleTabKeyDown = (e, idx) => {
    const tabs = lt.tabs;
    let nextIdx = idx;
    if (e.key === "ArrowRight") nextIdx = (idx + 1) % tabs.length;
    else if (e.key === "ArrowLeft") nextIdx = (idx - 1 + tabs.length) % tabs.length;
    else if (e.key === "Home") nextIdx = 0;
    else if (e.key === "End") nextIdx = tabs.length - 1;
    else return;

    e.preventDefault();
    setActiveTab(tabs[nextIdx].id);
    tabRefs.current[nextIdx]?.focus();
  };

  const showSolana = activeTab === "all" || activeTab === "solana";
  const showCpts = activeTab === "all" || activeTab === "cpts";
  const showAws = activeTab === "all" || activeTab === "aws";

  return (
    <main id="main-content" tabIndex={-1}>
      <div className="notebook-layout">
        <aside
          className={`notebook-sidebar ${sidebarOpenMobile ? "" : "is-collapsed-mobile"}`}
          aria-label={lt.sidebarTitle}
        >
          <div className="sidebar-mobile-trigger-row">
            <button
              type="button"
              className="btn-secondary"
              style={{ width: "100%", justifyContent: "space-between" }}
              aria-expanded={sidebarOpenMobile}
              onClick={() => setSidebarOpenMobile((prev) => !prev)}
            >
              <span>{lt.sidebarTitle}</span>
              <span className="mono">{sidebarOpenMobile ? "-" : "+"}</span>
            </button>
          </div>

          <div className="sidebar-header">
            <span className="sidebar-title">{lt.sidebarTitle}</span>
            <button type="button" className="sidebar-toggle-btn" onClick={toggleAllGroups}>
              {allExpanded ? lt.collapseAll : lt.expandAll}
            </button>
          </div>

          <nav className="sidebar-nav" aria-label="Learn notebook index">
            <a href="#overview" className="sidebar-link" onClick={() => setActiveTab("all")}>
              <span>{lt.overviewLabel}</span>
            </a>

            <details
              className="sidebar-group"
              open={openGroups.tracks}
              onToggle={(e) => {
                const isOpen = e.currentTarget.open;
                setOpenGroups((prev) => ({ ...prev, tracks: isOpen }));
              }}
            >
              <summary className="sidebar-summary">
                <span>{lt.tracksLabel}</span>
                <span>{openGroups.tracks ? "-" : "+"}</span>
              </summary>
              <div className="sidebar-tree">
                <a
                  href="#track-solana"
                  className="sidebar-link"
                  onClick={() => setActiveTab("all")}
                >
                  <span>Solana Audit</span>
                </a>
                <a
                  href="#track-cpts"
                  className="sidebar-link"
                  onClick={() => setActiveTab("all")}
                >
                  <span>CPTS (50%)</span>
                </a>
                <a
                  href="#track-aws"
                  className="sidebar-link"
                  onClick={() => setActiveTab("all")}
                >
                  <span>AWS Red Team (0%)</span>
                </a>
              </div>
            </details>

            <details
              className="sidebar-group"
              open={openGroups.solana}
              onToggle={(e) => {
                const isOpen = e.currentTarget.open;
                setOpenGroups((prev) => ({ ...prev, solana: isOpen }));
              }}
            >
              <summary className="sidebar-summary">
                <span>Solana / Rust</span>
                <span>{openGroups.solana ? "-" : "+"}</span>
              </summary>
              <div className="sidebar-tree">
                <a
                  href="#web3-prereqs"
                  className="sidebar-link"
                  onClick={() => setActiveTab("solana")}
                >
                  <span>Web3 Prereqs</span>
                </a>
                <a
                  href="#module-01"
                  className="sidebar-link"
                  onClick={() => {
                    setActiveTab("solana");
                    setModuleFilter("all");
                  }}
                >
                  <span>01-05 Done</span>
                </a>
                <a
                  href="#module-06"
                  className="sidebar-link"
                  onClick={() => {
                    setActiveTab("solana");
                    setModuleFilter("all");
                  }}
                >
                  <span>06-08 Active</span>
                </a>
                <a
                  href="#module-09"
                  className="sidebar-link"
                  onClick={() => {
                    setActiveTab("solana");
                    setModuleFilter("all");
                  }}
                >
                  <span>09-24 Todo</span>
                </a>
                <a
                  href="#solana-roadmap"
                  className="sidebar-link"
                  onClick={() => setActiveTab("solana")}
                >
                  <span>Phases 2-5</span>
                </a>
              </div>
            </details>

            <details
              className="sidebar-group"
              open={openGroups.links}
              onToggle={(e) => {
                const isOpen = e.currentTarget.open;
                setOpenGroups((prev) => ({ ...prev, links: isOpen }));
              }}
            >
              <summary className="sidebar-summary">
                <span>{lt.externalLabel}</span>
                <span>{openGroups.links ? "-" : "+"}</span>
              </summary>
              <div className="sidebar-tree">
                <a
                  href={SITE.learnRepoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sidebar-link"
                >
                  <span>Audit Repo</span>
                </a>
                <Link href="/" className="sidebar-link">
                  <span>{lt.backHome}</span>
                </Link>
              </div>
            </details>
          </nav>
        </aside>

        <article className="notebook-article">
          <header id="overview" className="notebook-header">
            <p className="section-eyebrow">/learn</p>
            <h1 className="notebook-title">{lt.pageTitle}</h1>
            <p className="notebook-intro">{lt.pageIntro}</p>

            <div style={{ marginTop: "24px" }}>
              <LearnProgressTable
                lang={lang}
                useAnchorsOnly
                onRowClick={() => setActiveTab("all")}
              />
            </div>

            <div role="tablist" aria-label={lt.tabsAria} className="tablist">
              {lt.tabs.map((tab, idx) => (
                <button
                  key={tab.id}
                  ref={(el) => {
                    tabRefs.current[idx] = el;
                  }}
                  type="button"
                  role="tab"
                  id={`learn-tab-${tab.id}`}
                  aria-selected={activeTab === tab.id}
                  aria-controls="learn-tabpanel"
                  tabIndex={activeTab === tab.id ? 0 : -1}
                  className="tab-btn"
                  onClick={() => setActiveTab(tab.id)}
                  onKeyDown={(e) => handleTabKeyDown(e, idx)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </header>

          <div
            id="learn-tabpanel"
            role="tabpanel"
            aria-labelledby={`learn-tab-${activeTab}`}
          >
            {showSolana && (
              <section id="track-solana" className="learn-section">
                <div className="learn-section-head">
                  <div>
                    <h2 className="learn-section-title">{lt.solanaTitle}</h2>
                    <p className="track-row-updated" style={{ marginTop: "6px" }}>
                      {lt.verifiedNote}
                    </p>
                  </div>
                  <span className="status-pill is-active">{lt.solanaBadge}</span>
                </div>

                <div className="progress-bar-wrap">
                  <div className="progress-meta-row">
                    <span>Phase 1: Rust By Example (Security Focus)</span>
                    <span>
                      {doneCount} {lt.statusLabels.done}, {inProgressCount}{" "}
                      {lt.statusLabels.in_progress} / {RUST_MODULES.length}
                    </span>
                  </div>
                  <div
                    className="progress-track"
                    role="progressbar"
                    aria-label="Phase 1 Rust Fundamentals completion"
                    aria-valuenow={rustDonePct}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div className="progress-fill" style={{ width: `${rustDonePct}%` }} />
                  </div>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "20px" }}>
                  <a
                    href={SITE.learnRepoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    {lt.solanaRepoCta}
                  </a>
                  <a
                    href="https://github.com/Cyfrin/solana-course"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    {lt.solanaUpdraftCta}
                  </a>
                </div>

                <div className="notice-box">{lt.solanaFastTrack}</div>

                <div id="web3-prereqs" style={{ marginBottom: "32px" }}>
                  <h3 className="meta-heading">{lt.solanaPrereqTitle}</h3>
                  <div className="domain-list">
                    {WEB3_PREREQUISITES.map((item) => (
                      <div key={item.title} className="domain-card">
                        <h4>{item.title}</h4>
                        <p>{item.detail[lang]}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <h3 className="meta-heading">{lt.solanaPhase1Title}</h3>
                <div className="filter-row" role="group" aria-label="Filter Rust modules">
                  {lt.moduleFilters.map((f) => (
                    <button
                      key={f.id}
                      type="button"
                      className="filter-btn"
                      aria-pressed={moduleFilter === f.id}
                      onClick={() => setModuleFilter(f.id)}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>

                {filteredModules.length === 0 ? (
                  <div className="empty-box">
                    <p style={{ fontWeight: 500 }}>{lt.emptyFilterTitle}</p>
                    <p style={{ color: "var(--text-muted)", fontSize: "14px" }}>
                      {lt.emptyFilterHint}
                    </p>
                    <button
                      type="button"
                      className="btn-secondary"
                      onClick={() => setModuleFilter("all")}
                    >
                      {lt.resetFilter}
                    </button>
                  </div>
                ) : (
                  <div className="module-list">
                    {filteredModules.map((m) => (
                      <div key={m.num} id={`module-${m.num}`} className="module-row">
                        <div className="module-row-top">
                          <div className="module-row-title-wrap">
                            <span className="module-num">{m.num}</span>
                            <h4 className="module-title">{m.title}</h4>
                            {m.priority === "high" && (
                              <span className="tag-chip">{lt.auditorFocusLabel}</span>
                            )}
                          </div>
                          <span
                            className={`status-pill ${
                              m.status === "done" || m.status === "in_progress"
                                ? "is-active"
                                : ""
                            }`}
                          >
                            {lt.statusLabels[m.status]}
                          </span>
                        </div>

                        <p className="module-topics">{m.topics}</p>

                        {m.auditorFocus && (
                          <p className="module-auditor">{m.auditorFocus[lang]}</p>
                        )}

                        {m.files.length > 0 && (
                          <div className="module-files" aria-label={lt.filesLabel}>
                            {m.files.map((file) => (
                              <code key={file} className="file-code-chip">
                                {file}
                              </code>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                <div id="solana-roadmap" style={{ marginTop: "36px" }}>
                  <h3 className="meta-heading">{lt.solanaPhasesTitle}</h3>
                  {SOLANA_ROADMAP_PHASES.map((phase, idx) => (
                    <details key={phase.phase} className="phase-details" open={idx === 0}>
                      <summary className="phase-summary">
                        <span>
                          {phase.phase}: {phase.title}
                        </span>
                        <span
                          className={`status-pill ${
                            phase.status === "in_progress" ? "is-active" : ""
                          }`}
                        >
                          {phase.progressLabel}
                        </span>
                      </summary>
                      <ul className="phase-items">
                        {phase.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </details>
                  ))}
                </div>
              </section>
            )}

            {showCpts && (
              <section id="track-cpts" className="learn-section">
                <div className="learn-section-head">
                  <div>
                    <h2 className="learn-section-title">{lt.cptsTitle}</h2>
                    <p className="track-row-updated" style={{ marginTop: "6px" }}>
                      {CPTS_TRACK.provider}
                    </p>
                  </div>
                  <span className="status-pill is-active">{lt.cptsBadge}</span>
                </div>

                <div className="progress-bar-wrap">
                  <div className="progress-meta-row">
                    <span>CPTS Path Progress</span>
                    <span>{CPTS_TRACK.progress}%</span>
                  </div>
                  <div
                    className="progress-track"
                    role="progressbar"
                    aria-label="CPTS track progress"
                    aria-valuenow={CPTS_TRACK.progress}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="progress-fill"
                      style={{ width: `${CPTS_TRACK.progress}%` }}
                    />
                  </div>
                </div>

                <div className="notice-box">{lt.cptsSyncNotice}</div>

                <div className="domain-list">
                  {CPTS_TRACK.domains.map((domain) => (
                    <div key={domain.name.en} className="domain-card">
                      <h3>{domain.name[lang]}</h3>
                      <p>{domain.detail[lang]}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {showAws && (
              <section id="track-aws" className="learn-section">
                <div className="learn-section-head">
                  <div>
                    <h2 className="learn-section-title">{lt.awsTitle}</h2>
                    <p className="track-row-updated" style={{ marginTop: "6px" }}>
                      {AWS_RED_TEAM_TRACK.provider}
                    </p>
                  </div>
                  <span className="status-pill">{lt.awsBadge}</span>
                </div>

                <div className="progress-bar-wrap">
                  <div className="progress-meta-row">
                    <span>AWS Red Team Specialist Progress</span>
                    <span>{AWS_RED_TEAM_TRACK.progress}%</span>
                  </div>
                  <div
                    className="progress-track"
                    role="progressbar"
                    aria-label="AWS Red Team Specialist progress"
                    aria-valuenow={AWS_RED_TEAM_TRACK.progress}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="progress-fill"
                      style={{ width: `${AWS_RED_TEAM_TRACK.progress}%` }}
                    />
                  </div>
                </div>

                <div className="notice-box">{lt.awsQueueNotice}</div>

                <div className="domain-list">
                  {AWS_RED_TEAM_TRACK.plannedAreas.map((area) => (
                    <div key={area.title} className="domain-card">
                      <h3>{area.title}</h3>
                      <p>{area.detail[lang]}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </article>
      </div>
    </main>
  );
}
