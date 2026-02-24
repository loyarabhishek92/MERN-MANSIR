
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
export default function AddForm() {
  return (
    <div className="flex justify-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Add some</CardTitle>
          <CardDescription>
            Enter your details
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                />
              </div>
              </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full">
            Add
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
