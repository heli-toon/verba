export default function SearchHeader() {
  return (
    <>
      <header>
        <div className="search-box">
          <form action="" method="GET" className="search-form">
            <input type="search" className="search" placeholder="Search" />
            <button type="button" className="btn">
              <i className="bi-search"></i>
            </button>
          </form>
        </div>
      </header>
    </>
  );
}
