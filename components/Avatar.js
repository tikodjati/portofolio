export default function Avatar({ name }) {
  return (
    <div className="avatar-wrapper">
      <div className="avatar-container">
        <div className="avatar-reticle" aria-hidden="true">
          <div className="reticle-corner tl" />
          <div className="reticle-corner tr" />
          <div className="reticle-corner bl" />
          <div className="reticle-corner br" />
          <div className="reticle-ring" />
        </div>
        <div className="avatar">
          <img src="/foto.jpg" alt={`Avatar security engineer ${name}`} width="400" height="400" />
          <div className="avatar-scan" aria-hidden="true" />
        </div>
        <div className="avatar-tag">
          <span className="avatar-dot" />
          <span>OPERATOR: VERIFIED</span>
        </div>
      </div>
    </div>
  );
}



