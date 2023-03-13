import { MapPolska } from "./MapPolska";
import { MapMazowieckie } from "./province/MapMazowieckie";
import { MapOpolskie } from "./province/MapOpolskie";
import { MapWielkopolskie } from "./province/MapWielkopolskie";
import { Link } from "./styled";

export const Maps = () => {

  return (
    <>
      <Link
        to={`/movies/Opolskie`}
      >
        <MapMazowieckie />
      </Link>
    </>
  );
};






