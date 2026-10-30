export default function PaginationDiv({ currentPage, totalPages, onPageChange }) {
  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex flex-row items-center justify-center gap-100 mb-8">
      <button
        onClick={handlePrevPage}
        disabled={currentPage === 1}
        className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-base font-semibold text-slate-900
                 transition-colors hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Previous
      </button>
      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-base font-semibold text-slate-900
                 transition-colors hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}
