import ReactPaginate from 'react-paginate';
import useNews from "../hooks/useNews";
import '../styles/pagination.css';

const NEWS_PER_PAGE = 12;

function Pagination() {

    const {totalNews, handlePageClick, page} = useNews();

    const totalPages = Math.ceil(totalNews / NEWS_PER_PAGE);

  return (
    <div>
        <ReactPaginate
        forcePage={page}
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={4}
        pageCount={totalPages}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageClassName="pagination__item"
        pageLinkClassName="pagination__link"
        activeClassName="pagination__active"
        nextClassName="pagination__item"
        nextLinkClassName="pagination__link"
        previousClassName="pagination__item"
        previousLinkClassName="pagination__link"
        disabledClassName="pagination__disabled-item"
        disabledLinkClassName="pagination__disabled-link"
      />
    </div>
  )
}

export default Pagination