import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useSelector } from "react-redux"

export default function Home() {
  const {users} = useSelector((state) => state.userSlice);
  console.log(users)
  return (
    <div className="px-10 mt-5 grid grid-cols-4 gap-3">


       
    {
      users.map((user) => {
        return <Card key={user.id} size="sm" className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>{user.username}</CardTitle>
        <CardDescription>
          {user.email}
        </CardDescription>
        <CardDescription>
          {user.gender}
        </CardDescription>
        <CardDescription>
          {user.country}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>
         {user.detail}
        </p>
      </CardContent>
       <CardFooter>
        <Button variant="default" size="sm" className="w-full">
          Action
        </Button>
      </CardFooter>
    </Card>
      })
    }
    </div>
  )
}
