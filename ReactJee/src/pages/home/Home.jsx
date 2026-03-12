import { Card, CardContent } from "@/components/ui/card";
import { useGetQuotesQuery } from "../quote/quoteApi"

export default function Home() {
  const {data, isLoading, error} = useGetQuotesQuery();
  if(isLoading) return <h1>Loading...</h1>
  if(error) return <h1>{error.data}</h1>
  console.log(data);
  return (
    <div className="px-10 mt-5">
      <h1 className="font-extrabold mb-5">Popular Quotes</h1>
    <div className="grid grid-cols-4 gap-5">
      {
        data.quotes.map((quote) => {
          return <div className="flex items-center justify-center">
      <Card className="max-w-xl w-full shadow-xl rounded-2xl">
        <CardContent className="p-8 text-center space-y-4">

          <p className="text-xl italic text-gray-700">
            “{quote.quote}”
          </p>

          <p className="text-sm text-gray-500 font-medium">
            — {quote.author}
          </p>

        </CardContent>
      </Card>
    </div>
        })
      }
    </div>
    </div>
  )
}
