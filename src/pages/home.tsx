import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 h-screen p-10 text-white">
      <h1 className="text-4xl font-extrabold text-center mb-4">😊 Seja bem-vindo ao Quiz!</h1>
      <h3 className="text-lg text-center mb-10">Escolha uma categoria para continuar.</h3>
      <nav className="w-full">
        <ul className="flex flex-col items-center gap-6">
          <li>
            <Link
              to="/questions"
              className="text-xl font-semibold px-6 py-3 bg-purple-800 rounded-lg shadow-lg hover:bg-purple-700 transition duration-300"
            >
              ▶️ Começar
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
