import { useState } from "react";
import { allQuestions } from "../lib/questions";

export default function Questions() {
  const [answers, setAnswers] = useState<string[]>([]); // Armazenar respostas
  const [locked, setLocked] = useState<boolean[]>([]); // Controle de se a pergunta já foi respondida

  const handleResult = (questionId: string, answer: string) => {
    if (locked[parseInt(questionId)]) return; // Impede seleção se a pergunta já foi respondida

    setAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[parseInt(questionId)] = answer; // Armazena a resposta
      return updatedAnswers;
    });

    setLocked((prevLocked) => {
      const updatedLocked = [...prevLocked];
      updatedLocked[parseInt(questionId)] = true; // Trava a pergunta
      return updatedLocked;
    });
  };

  const handleCheckResult = () => {
    let score = 0;
    allQuestions.forEach((question, index) => {
      if (answers[index] === question.answer) {
        score += 1;
      }
    });

    alert(`Sua pontuação é ${score} de ${allQuestions.length}`);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-50 rounded-xl shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-6 text-blue-600">Responda as perguntas</h2>
      {allQuestions.map((item, index) => (
        <div key={index} className="flex flex-col mb-6">
          <p className="text-lg font-medium text-gray-800 mb-4">{item.question}</p>
          <ul className="flex flex-col gap-4">
            {item.options.map((el, idx) => {
              const isSelected = answers[index] === el;
              const isCorrect = el === item.answer;
              const optionClass = `
                p-4 rounded-xl transition duration-300 
                ${isSelected ? (isCorrect ? 'bg-green-500' : 'bg-red-500') : 'bg-purple-800'} 
                text-white hover:bg-purple-600 cursor-pointer 
                ${locked[index] ? 'opacity-50 cursor-not-allowed' : ''}
              `;

              return (
                <li
                  key={idx}
                  onClick={() => handleResult( String(index), el)}
                  className={optionClass}
                >
                  {el}
                </li>
              );
            })}
          </ul>
        </div>
      ))}

      <button
        onClick={handleCheckResult}
        className="w-full mt-6 p-3 bg-blue-600 text-white rounded-xl hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-200"
      >
        Checar resultados
      </button>
    </div>
  );
}
