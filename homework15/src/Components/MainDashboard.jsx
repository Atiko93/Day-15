import BoardCard from "./BoardCard/BoardCard";
import { boards } from "../data/boards";

function MainDashboard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {boards.map((board) => (
        <BoardCard
          key={board.id}
          title={board.title}
          description={board.description}
          status={board.status}
          createdAt={board.createdAt}
        />
      ))}
    </div>
  );
}

export default MainDashboard;
