import { Stack } from "@mui/system";
import { Link } from "react-router-dom";
import { logo } from "../utils/constans";
import { SearchBar } from "./";
const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#000",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <Link
      to="/"
      style={{ display: "flex", alignItems: "left", textAlign: "left" }}
    >
      <img
        src={logo}
        alt="logo"
        height={45}
        style={{
          width: "48px",
          height: "48px",
          margin: "0px 20px",
          float: "left",
        }}
      />
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
