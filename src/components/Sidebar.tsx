import { NavLink } from "react-router-dom";
import { SUBJECTS } from "../config";

const Sidebar = ({ onNavigate }: { onNavigate: () => void }) => {
  return (
    <ul>
      {SUBJECTS.map((s) => (
        <NavLink
          to={`/subject/${s.slug}`}
          key={s.slug}
          className="link-class"
          onClick={onNavigate}
        >
          {({ isActive }) => (
            <li style={isActive ? { color: "#c3083f" } : {}}>{s.label}</li>
          )}
        </NavLink>
      ))}
    </ul>
  );
};

export default Sidebar;
