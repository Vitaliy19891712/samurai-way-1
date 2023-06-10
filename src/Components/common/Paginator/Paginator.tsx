import { useState } from "react";
import s from "./Paginator.module.css";

type PaginatorPropsType = {
  totalItemsCount: number;
  pageSize: number;
  currentPage: number;
  portionSize: number;
  onPageChanged: (page: number) => void;
};

export const Paginator: React.FC<PaginatorPropsType> = ({ totalItemsCount, pageSize, currentPage, onPageChanged, portionSize }) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div>
      {portionNumber > 1 && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}
        >
          PREV
        </button>
      )}
      {pages
        .filter((p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
        .map((p) => (
          <span
            key={p}
            className={currentPage === p ? s.selectedPage : s.page}
            onClick={() => {
              onPageChanged(p);
            }}
          >
            {p}
          </span>
        ))}
      {portionCount > portionNumber && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber + 1);
          }}
        >
          NEXT
        </button>
      )}
    </div>
  );
};
