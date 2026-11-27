"use client";
import Link from "next/link";
import { LEARN_COPY, TRACK_OVERVIEW } from "../data/learn";

export default function LearnProgressTable({ lang, useAnchorsOnly = false, onRowClick }) {
  const lt = LEARN_COPY[lang];

  return (
    <div className="learn-table">
      <div className="learn-table-head" aria-hidden="true">
        <span>{lt.tableHeaders.track}</span>
        <span>{lt.tableHeaders.focus}</span>
        <span style={{ textAlign: "right" }}>{lt.tableHeaders.progress}</span>
      </div>

      <div className="learn-track-rows">
        {TRACK_OVERVIEW.map((tr) => {
          const href = useAnchorsOnly ? tr.anchor : `/learn${tr.anchor}`;
          const rowContent = (
            <>
              <div className="track-name-col">
                <div className="track-row-title">{tr.name}</div>
                <div className="track-row-updated">{tr.updated[lang]}</div>
              </div>

              <p className="track-row-summary">{tr.summary[lang]}</p>

              <div className="track-metric-col">
                <div className="track-metric-top">
                  <span className="track-metric-val">{tr.shortMetric[lang]}</span>
                  <span
                    className={`status-pill ${
                      tr.status === "in_progress" ? "is-active" : ""
                    }`}
                  >
                    {lt.statusLabels[tr.status]}
                  </span>
                </div>
                <div className="track-mini-bar" aria-hidden="true">
                  <div className="track-mini-fill" style={{ width: `${tr.pct}%` }} />
                </div>
              </div>
            </>
          );

          if (useAnchorsOnly) {
            return (
              <a
                key={tr.id}
                href={href}
                className="learn-track-row"
                onClick={onRowClick}
              >
                {rowContent}
              </a>
            );
          }

          return (
            <Link
              key={tr.id}
              href={href}
              className="learn-track-row"
              onClick={onRowClick}
            >
              {rowContent}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
