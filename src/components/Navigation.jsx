import { Link } from "react-router-dom";
import { navItems } from "../nav-items";

const Navigation = () => {
  return (
    <nav className="bg-secondary p-2">
      <ul className="flex space-x-4">
        {navItems.map((item) => (
          <li key={item.to}>
            <Link to={item.to} className="flex items-center space-x-1 text-secondary-foreground hover:text-primary">
              {item.icon}
              <span>{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
