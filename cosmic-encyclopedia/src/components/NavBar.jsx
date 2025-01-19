import { Link } from "react-router-dom";

function NavBar({ data }) {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>

        {data.map((dataElement) => (
          <Link key={dataElement.id} to={`/content/${dataElement.id}`}>
            {dataElement.title}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export default NavBar;
