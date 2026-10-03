export default function Avatar({ name }) {
  return (
    <div className="avatar">
      <img src="/foto.jpg" alt={`Avatar white hat ${name}`} width="400" height="400" />
    </div>
  );
}
