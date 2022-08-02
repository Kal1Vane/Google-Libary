import axios from "axios";
import { useEffect, useState } from "react"

function ListBooks() :JSX.Element {
  const [books,setBooks] = useState<any | null>(null);

  useEffect(() => {
    async function fetchData(){
      const {data} = await axios.get("https://www.googleapis.com/books/v1/volumes?q=harry+potter");
      setBooks(data);
    }

    fetchData();
  }, [])
  

  return (
    <div>
      {books && books.items.map((item : any) => <li>{item.searchInfo.textSnippet}</li>)}
    </div>
  )
}

export default ListBooks;
