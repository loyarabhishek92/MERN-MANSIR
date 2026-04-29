import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Spinner } from "@/components/ui/spinner";
import { useTranslateMutation } from "../language/languageApi";
import { Formik } from "formik";
import * as Yup from "yup";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";

const valSchema = Yup.object({
  text: Yup.string().required(),
  source: Yup.string().required(),
  target: Yup.string().required(),

})

export default function Home() {
  const [translate, { isLoading, data }] = useTranslateMutation();
  console.log(data);
  return (
    <div className="flex gap-x-5 px-10 mt-5">
      <div>
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Translate your text</CardTitle>
          </CardHeader>
          <CardContent>
            <Formik
              initialValues={{
                text: '',
                source: '',
                target: '',
              }}

              onSubmit={async (val) => {
                try {
                  await translate(val).unwrap();
                  toast.success("Translated successfully");
                } catch (err) {
                  toast.error(err.data)

                }


              }}
              validationSchema={valSchema}
            >
              {({ handleChange, handleSubmit, values, touched, setFieldValue, errors }) => {
                return <form
                  onSubmit={handleSubmit}
                >
                  <div className="flex flex-col gap-6">

                    <div className="grid gap-2">
                      <Label htmlFor="text">Text</Label>
                      <Input
                        name='text'
                        onChange={handleChange}
                        value={values.text}
                        id="text"
                        type="text"
                        placeholder="Hi, How are you!"
                      />
                      {errors.text && touched.text && <div className="text-red-500"> {errors.text} </div>}
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="source">Source</Label>
                      <Select
                        onValueChange={(e) => {
                          setFieldValue("source", e)
                        }}
                      >
                        <SelectTrigger className="w-full max-w-48">
                          <SelectValue placeholder="Select a source" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Languages</SelectLabel>
                            <SelectItem value="en">English</SelectItem>
                            <SelectItem value="hi">Hindi</SelectItem>
                            <SelectItem value="ne">Nepali</SelectItem>
                            <SelectItem value="ja">Japanese</SelectItem>
                            <SelectItem value="fr">Frenches</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      {errors.source && touched.source && <div className="text-red-500"> {errors.source} </div>}

                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="target">Target</Label>
                      <Select
                        onValueChange={(e) => {
                          setFieldValue("target", e)
                        }}
                      >
                        <SelectTrigger className="w-full max-w-48">
                          <SelectValue placeholder="Select a Target" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Languages</SelectLabel>
                            <SelectItem value="en">English</SelectItem>
                            <SelectItem value="hi">Hindi</SelectItem>
                            <SelectItem value="ne">Nepali</SelectItem>
                            <SelectItem value="ja">Japanese</SelectItem>
                            <SelectItem value="fr">Frenches</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      {errors.target && touched.target && <div className="text-red-500"> {errors.target} </div>}

                    </div>

                    <div className="grid gap-2">
                      <Button
                        disabled={isLoading}
                        type="submit" className="w-full">
                        {isLoading ? <Spinner /> : "Translate"}
                      </Button>
                    </div>

                  </div>
                </form>
              }}
            </Formik>


          </CardContent>
        </Card>
      </div>

      <div>

        {data && <div className="flex items-center justify-center">
          <Card className="w-full hover:shadow-xl rounded-2xl">
            <CardContent className="p-6 space-y-6">

              <h1 className="text-2xl font-bold text-center">
                Translation Result
              </h1>

              {/* Language Codes */}
              <div className="flex justify-center items-center gap-3">
                <Badge variant="outline">{data.translations.source}</Badge>
                <span className="text-gray-500">→</span>
                <Badge>{data.translations.target}</Badge>
              </div>

              {/* Source Text */}
              <div className="border rounded-xl p-4 bg-white">
                <p className="text-gray-500 text-sm mb-1">Original</p>
                <p className="text-lg font-medium">{data.translations.text}</p>
              </div>

              {/* Translated Text */}
              <div className="border rounded-xl p-4 bg-gray-50">
                <p className="text-gray-500 text-sm mb-1">Translated</p>
                <p className="text-lg font-semibold">{data.translations.translation}</p>
              </div>

            </CardContent>
          </Card>
        </div>}
      </div>

    </div>
  )
}
