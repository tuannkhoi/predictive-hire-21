import { NavLink } from "react-router-dom";

export default function Logo() {
  return (
    <NavLink to="/" style={{ color: "white", fontSize: "medium" }}>
      Predictive Hire
    </NavLink>
  );
}
