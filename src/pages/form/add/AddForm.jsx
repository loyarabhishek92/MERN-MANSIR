
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Spinner } from "@/components/ui/spinner"
import { Textarea } from "@/components/ui/textarea"
import { useAddBookMutation } from "@/pages/books/bookApi"
import { Formik } from "formik"

import { useNavigate } from "react-router"
import { toast } from "sonner"

import * as Yup from "Yup";




export const valSchema = Yup.object({
  title: Yup.string().required("required"),
  author: Yup.string().required("required"),
  image: Yup.string().url().required("required"),
  detail: Yup.string().required("required"),



});





export default function AddForm() {


  const nav = useNavigate();
  const [addBook, { isLoading }] = useAddBookMutation();






  return (






    <div className="px-10 mt-5">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Add some</CardTitle>
          <CardDescription>
            Enter your details
          </CardDescription>
        </CardHeader>
        <CardContent>


          <Formik
            initialValues={{
              title: '',
              detail: '',
              image: '',
              author: '',



            }}
            onSubmit={async (val, { resetForm }) => {
              try {
                await addBook(val).unwrap();
                toast.success("Book added");
                nav(-1);
                resetForm();

              } catch (err) {
                toast.error(err.data);

              }



            }}

            validationSchema={valSchema}
          >

            {({ handleChange, handleSubmit, values, errors, touched, setFieldValue }) => {
              return <form
                onSubmit={handleSubmit}
              >
                <div className="grid grid-cols-4 gap-3">


                  <div className="grid gap-2">
                    <Label htmlFor="title">Title</Label>
                    <Input
                      name='title'
                      value={values.title}
                      onChange={handleChange}
                      id="title"
                      type="text"
                      placeholder="John Doe"
                    />
                    {errors.title && touched.title && <p className="text-red-500">{errors.title}</p>}
                  </div>


                  <div className="grid gap-2">
                    <Label htmlFor="author">Author</Label>
                    <Input
                      name='author'
                      value={values.author}
                      onChange={handleChange}
                      id="author"
                      type="text"
                      placeholder="virat kholi"
                    />
                    {errors.author && touched.author && <p className="text-red-500">{errors.author}</p>}
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="author">Image</Label>
                    <Input
                      name='image'
                      value={values.image}
                      onChange={handleChange}
                      id='image'
                      type='url'
                      placeholder="https://example.com/image.jpg"
                    />
                    {errors.image && touched.image && <p className="text-red-500">{errors.image}</p>}
                  </div>




                  <div className="grid gap-2">
                    <Label htmlFor="detail">Detail</Label>

                    <Textarea
                      name='detail'
                      value={values.detail}
                      onChange={handleChange}
                      id="detail"
                      type="text"
                      placeholder="details"

                    />
                    {errors.detail && touched.detail && <p className="text-red-500">{errors.detail}</p>}
                  </div>








                </div>
                <div className="flex justify-end">
                  <Button
                  disabled = {isLoading}
                   type="submit" className=" mt-5 ">
                   {isLoading ? <Spinner /> : 'Add Book'}
                  </Button>
                </div>
              </form>
            }}



          </Formik>










        </CardContent>





      </Card>




    </div>
  )
}
