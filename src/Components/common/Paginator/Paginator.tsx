import s from "./Paginator.module.css";

type PaginatorPropsType = {
  totalUsersCount: number;
  pageSize: number;
  currentPage: number;
  onPageChanged: (page: number) => void;
};

export const Paginator: React.FC<PaginatorPropsType> = ({ totalUsersCount, pageSize, currentPage, onPageChanged }) => {
  let quantityPages = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for (let i = 1; i <= quantityPages; i++) {
    pages.push(i);
  }
  return (
    <div>
      {pages.map((p) => (
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
    </div>
  );
};
