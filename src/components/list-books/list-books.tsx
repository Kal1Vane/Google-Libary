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
          return (
            <li key={id}>
              <h3>{volumeInfo.title}</h3>
              {volumeInfo.imageLinks?.thumbnail && <div><img src={volumeInfo.imageLinks?.thumbnail} width="100" height={100} /></div>}
            </li>
          );
        })}
    </div>
  );
}

export default ListBooks;
