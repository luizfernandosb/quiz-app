import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className=" flex flex-col items-center bg-purple-400 h-3/6 w-96 p-10">
      <h1 className="text-xl font-bold">😊 Seja bem-vindo ao Quiz,</h1>
      <h3 className="text-sm">escolha uma categoria para continuar.</h3>
      <nav className="mt-14">
        <ul className="flex flex-col gap-5">
          <li>
            <Link to="/questions"> ▶️ Começar</Link>{" "}
          </li>
        </ul>
      </nav>
    </div>
  );
}
