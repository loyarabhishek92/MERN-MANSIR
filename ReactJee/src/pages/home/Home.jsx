import { useGetBooksQuery } from "../books/bookApi"

export default function Home() {
  const {data, isLoading, error}= useGetBooksQuery();
  if(isLoading) return <h1>loading...</h1>
  if(error) return <h1>{error.data}</h1>
  console.log(data);


  return (
    <div className="grid grid-cols-4 gap-3 px-10 mt-5">
    {
      data.map((book) => {
        return <div key={book.id}>
          <h1>{book.title}</h1>
          <h1>{book.author}</h1>
          <h1>{book.image}</h1>
        </div>
      })
    }
    </div>
  )
}
