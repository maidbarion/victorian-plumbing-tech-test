import { useEffect, useState } from "react";
import { POST } from "./api/fetchData";

import { Container } from "./App.styled";
import NavBar from "./components/Navigation/NavBar";
import ItemGrid from "./components/Items/ItemGrid";
import PaginationComponent from "./components/Pagination/PaginationComponent";

function App() {
  const [itemData, setItemData] = useState<any[]>([]);
  const [pageData, setPageData] = useState<any>();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentSort, setCurrentSort] = useState<number>(1);

  const ITEMS_PER_PAGE = 30;

  const getItems = async ({
    query = "toilets",
    pageNumber = 1,
    sort = 1,
  }: {
    query?: string;
    pageNumber?: number;
    sort?: number;
  } = {}) => {
    try {
      const response = await POST("/interviews/listings", {
        query,
        pageNumber,
        sort,
      });

      const { products, pagination } = response.data;

      setCurrentPage(pageNumber);
      setCurrentSort(sort);
      setItemData(products);
      setPageData(pagination);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSort = (sortIndex: number) => {
    getItems({ sort: sortIndex, pageNumber: currentPage });
  };

  const handlePagination = (paginationIndex: number) => {
    getItems({ pageNumber: paginationIndex, sort: currentSort });
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <Container>
      <h1>Victorian Plumbing Tech Test</h1>
      <NavBar selectedIndex={currentSort} onSortClick={handleSort} />
      <PaginationComponent
        selectedIndex={currentPage}
        data={pageData}
        pageSize={ITEMS_PER_PAGE}
        onPaginationClick={handlePagination}
      />
      <ItemGrid data={itemData} onSortClick={handleSort} />
    </Container>
  );
}

export default App;
