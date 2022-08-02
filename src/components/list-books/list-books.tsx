import { dataApi } from "../../services/data-services";
import { BooksItem } from "../../types";

function ListBooks(): JSX.Element {
  const { data, isLoading } = dataApi.useFetchFindBooksQuery("Harry Potter");

  if (isLoading) {
    return <h1>Loading.....</h1>;
  }

  return (
    <div>
      {data &&
        data.items.map((item: BooksItem) => {
          const { id, volumeInfo } = item;
          return <li key={id}>{volumeInfo.title}</li>;
        })}
    </div>
  );
}

export default ListBooks;
