import Pagination from "react-js-pagination";
import "./Paging.css";

//복구
const Paging = ({ page, count, setPage, itemsCountPerPage }) => {
  return (
    <div>
      <Pagination
        activePage={page}
        itemsCountPerPage={itemsCountPerPage}
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
