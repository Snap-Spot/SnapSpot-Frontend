import Pagination from "react-js-pagination";
import "./Paging.css";

const Paging = ({ page, count, setPage }) => {
  return (
    <div>
      <Pagination
        activePage={page}
        itemsCountPerPage={6}
        totalItemsCount={count}
        pageRangeDisplayed={3}
        prevPageText={"<"}
        nextPageText={">"}
        onChange={setPage}
      />
    </div>
  );
};

export default Paging;
