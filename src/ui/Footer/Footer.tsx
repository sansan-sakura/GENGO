import { Link } from "react-router-dom";
import { Hanko } from "../Hanko";

export const Footer = () => {
  return (
    <footer className="bg-gray-50 p-4">
      <div className="flex gap-6 text-sm mb-14">
        <Link
          to="/about"
          className="transition hover:underline hover:decoration-red-default hover:decoration-4"
        >
          <p>About</p>
        </Link>
        <Link
          to="/contact"
          className="transition hover:underline hover:decoration-blue-default hover:decoration-4"
        >
          <p>Contect</p>
        </Link>
      </div>
      <div className="flex  items-end justify-end gap-5">
        <small className="text-center">GENGO was created and is maintained by Sakura Tanaka</small>

        <Hanko size="sm" src="/sakura.webp" />
      </div>
    </footer>
  );
};
