import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="header">
      <h1>Checkpoint : frontend</h1>
      <Link to="/">Home</Link>
      <Link to="/countries">Countries</Link>
      <Link to="/countries/new">Add Country</Link>
    </header>
  );
}
