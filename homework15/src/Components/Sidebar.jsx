
function Sidebar() {
  return (
    <aside className="
      hidden md:block
      w-64
      bg-gray-100
      p-4
      border-r
      border-gray-300
      min-h-screen
    ">
      <h2 className="text-lg font-bold mb-4">Меню</h2>

      <ul className="space-y-2">
        <li className="hover:text-blue-600 cursor-pointer">Мои уроки</li>
        <li className="hover:text-blue-600 cursor-pointer">Домашнее задание</li>
        <li className="hover:text-blue-600 cursor-pointer">Задачи</li>
        <li className="hover:text-blue-600 cursor-pointer">Настройки</li>
      </ul>
    </aside>
  );
}

export default Sidebar;
