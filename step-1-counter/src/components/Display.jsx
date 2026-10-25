import { useSelector } from "react-redux";

// A DIFFERENT component reading the SAME store. No props!
export default function Display() {
  const value = useSelector((state) => state.counter.value);
  return <div className="banner">Display component says: <b>{value}</b></div>;
}
