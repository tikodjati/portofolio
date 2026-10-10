export default function GlitchBG() {
  return (
    <>
      {/* Full-Page BackTrack Linux Dragon Wallpaper Backdrop */}
      <div className="bg-dragon-layer" aria-hidden="true">
        <img src="/backtrack-dragon.svg" alt="" className="bg-dragon-img" />
        <div className="bg-dragon-glow" />
      </div>

      <div className="crt" aria-hidden="true">
        <div className="roll" />
      </div>
    </>
  );
}