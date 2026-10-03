export default function Section({ id, cmd, children }) {
  return (
    <section id={id}>
      <h2><span className="ps">sec@portfolio:~$</span> {cmd}</h2>
      {children}
    </section>
  );
}
