function Sidebar() {
  return (
    <aside style={{
      width: '220px',
      backgroundColor: '#f4f4f4',
      padding: '16px',
      borderRight: '1px solid #ddd',
      height: '100vh',
      boxSizing: 'border-box'
    }}>
      <h2>Меню</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li> Мои уроки</li>
        <li>Домашнее задание</li>
        <li>Задачи</li>
        <li>Настройки</li>
      </ul>
    </aside>
  );
}

export default Sidebar;