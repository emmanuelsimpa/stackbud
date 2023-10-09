import { classNames } from '@/utils/className';
import { useState, useEffect } from 'react';
function Pagination({
  totalPages,
  currentPage,
  onPageChange,
}: {
  totalPages: number;
  currentPage: number;
  onPageChange: any;
}) {
  const [pageNumbers, setPageNumbers] = useState<any>([]);

  useEffect(() => {
    const maxVisiblePages = 7;
    const maxPageDiff = maxVisiblePages - 4; // Number of pages to show between first and last

    if (totalPages <= maxVisiblePages) {
      setPageNumbers([...Array(totalPages).keys()].map((page) => page + 1));
    } else {
      let startPage = currentPage - Math.floor(maxPageDiff / 2);
      let endPage = currentPage + Math.ceil(maxPageDiff / 2);

      if (currentPage < 3) {
        startPage = 1;
        endPage = maxVisiblePages - 2;
      } else if (currentPage > totalPages - 2) {
        startPage = totalPages - maxVisiblePages + 3;
        endPage = totalPages;
      }

      const pageArray: any = [...Array(endPage - startPage + 1).keys()].map(
        (page) => page + startPage
      );

      // Add ellipsis and total page number
      if (startPage > 2) {
        pageArray.unshift('...');
      }
      if (endPage < totalPages - 1) {
        pageArray.push('...');
        pageArray.push(totalPages);
      }

      setPageNumbers(pageArray);
    }
  }, [totalPages, currentPage]);

  return (
    <div className="flex justify-center gap-5 md:gap-8">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <p className="font-bold text-3xl text-purple-300 hover:text-purple-500">
          &#10218;
        </p>
      </button>
      {pageNumbers.map((pageNumber: any) => (
        <button
          key={pageNumber}
          onClick={() => onPageChange(pageNumber)}
          className={classNames(
            pageNumber === currentPage ? 'bg-purple-500' : 'bg-purple-300',
            'px-1.5 py-1 rounded-full'
          )}
        >
          <p className="font-bold text-xl md:text-2xl"> {pageNumber}</p>
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <p className="font-bold text-3xl text-purple-300 hover:text-purple-500">
          &#10219;
        </p>
      </button>
    </div>
  );
}

export default Pagination;
