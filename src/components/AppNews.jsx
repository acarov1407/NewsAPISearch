import MyForm from "./MyForm";
import NewsGrid from "./NewsGrid";
import Pagination from "./Pagination";

function AppNews() {


  return (
    <>
    <header className="header container">
        <h1 className="header__title">Do you want some News?</h1>
    </header>
    <main className="news container">
        <MyForm />
        <NewsGrid />
        <Pagination />
    </main>
    </>
  )
}

export default AppNews