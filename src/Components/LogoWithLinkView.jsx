import { Link } from "react-router-dom";
import logo from "../utils/logo.png";

export function LogoWithLinkView() {
  return (
    <Link style={{ outline: "none", marginBottom: 20 }} to="/">
      <img height={100} src={logo} alt="logo" />
    </Link>
  );
}
