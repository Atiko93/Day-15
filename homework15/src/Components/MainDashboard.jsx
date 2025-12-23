import { useState } from "react";

function MainDashboard() {
  const [boards] = useState([
    { id: 1, title: 'Пробный урок', description: 'Казахский язык для начинающих' },
    { id: 2, title: 'Пробный урок', description: 'Казахский язык для продвинутых' },
    { id: 3, title: 'Тест на знания Казахского языка', description: '20 вопросов' },
  ]);

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 p-4">
      {boards.map((board) => (
        <div
          key={board.id}
          className="p-4 bg-slate-600 flex flex-col border rounded-xl hover:border-blue-600 hover:shadow-lg"
        >
          <h2 className="text-white font-bold">{board.title}</h2>
          <p className="text-white/80">{board.description}</p>
        </div>
      ))}
    </div>
  );
}

export default MainDashboard;
