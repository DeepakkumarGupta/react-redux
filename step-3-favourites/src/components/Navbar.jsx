import { useSelector } from "react-redux";

export default function Navbar() {
  // Navbar reads from the store directly: no props from App!
  const count = useSelector((state) => state.favourites.length);
  return (
    <nav>
      <h1>FORGE · Courses</h1>
      <span className="badge">♥ {count}</span>
    </nav>
  );
}
