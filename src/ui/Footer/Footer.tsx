import { Hanko } from "../Hanko";

export const Footer = () => {
  return (
    <footer className="bg-gray-50 p-4">
      <div className="flex gap-6 text-sm mb-14">
        <a
          href="#"
          className="transition hover:underline hover:decoration-red-default hover:decoration-4"
        >
          <p>About</p>
        </a>
        <a
          href="#"
          className="transition hover:underline hover:decoration-blue-default hover:decoration-4"
        >
          <p>Contect</p>
        </a>
      </div>
      <div className="flex  items-end justify-end gap-5">
        <small className="text-center">GENGO was created and is maintained by Sakura Tanaka</small>

        <Hanko size={8} src="/sakura.webp" />
      </div>
    </footer>
  );
};
