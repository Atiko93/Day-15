function BoardCard({ title, description, status, createdAt }) {
  return (
    <div className="p-4 bg-slate-600 flex flex-col border rounded-xl hover:border-blue-600 hover:shadow-lg">
      <h2 className="text-white font-bold text-lg mb-2">
        {title}
      </h2>

      <p className="text-white/80 mb-3">
        {description}
      </p>

      <div className="flex justify-between items-center text-sm mt-auto">
        <span
          className={`px-2 py-1 rounded ${
            status === "active"
              ? "bg-green-500/20 text-green-300"
              : "bg-gray-500/20 text-gray-300"
          }`}
        >
          {status}
        </span>

        <span className="text-white/50">
          {createdAt}
        </span>
      </div>
    </div>
  );
}

export default BoardCard;
