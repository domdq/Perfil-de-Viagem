import "./Nav.css";
import logo from "../../assets/Logo.svg";
import { FaSearch } from "react-icons/fa";

export default function Nav() {
  return (
    <header>
      <div className="container">
        <nav>
          <img src={logo} alt="" />
          <ul>
            <li>
              <FaSearch />
            </li>
            <li> Explorar</li>
            <li>Minhas viagens</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
