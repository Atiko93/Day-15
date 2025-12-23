function Header() {
  return (
    <header className="px-4 py-3 bg-slate-800 text-white">
      <h1 className="text-2xl font-bold">Казахский язык</h1>
      <p className="text-sm text-slate-300">
        Учи Казахский язык с нами каждый день!
      </p>
<div class="flex, items-center, justify-between">
  <div class="p-4">Самая низкая цена!</div>
</div>
      <button class="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition-colors duration-300">
  Купить
</button>

    </header>
  );
}

export default Header;
