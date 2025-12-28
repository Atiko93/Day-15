

function Header() {
  return (
    <header className="px-6 py-8 bg-slate-800 text-white">
      <div className="max-w-3xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
        
        {/* Текст */}
        <div>
          <h1 className="text-2xl font-bold">
            Казахский язык
          </h1>
          <p className="text-sm text-slate-300">
            Учи казахский язык с нами каждый день
          </p>
        </div>

        {/* Блок с ценой и кнопкой */}
        <div className="flex items-center gap-4">
          <span className="text-sm text-slate-200">
            Самая низкая цена!
          </span>

          <button className="bg-blue-500 px-5 py-2 rounded font-medium hover:bg-blue-600 transition">
            Купить
          </button>
        </div>

      </div>
    </header>
  );
}

export default Header;
