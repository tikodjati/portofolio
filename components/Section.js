export default function Section({ id, cmd, children }) {
  return (
    <section id={id} className="sec-block">
      <div className="sec-bar">
        <h2 className="sec-title">
          <span className="ps">root@backtrack:~#</span>{" "}
          <span className="sec-cmd">{cmd}</span>
        </h2>
        <span className="sec-id">[{id.toUpperCase()}]</span>
      </div>
      <div className="sec-body">
        {children}
      </div>
    </section>
  );
}

