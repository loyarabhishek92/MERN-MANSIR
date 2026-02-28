
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Formik } from "formik"
import { useState } from "react"

import * as Yup from "Yup";





const valSchema = Yup.object({
  username: Yup.string().min(4).max(50).required(),
  email: Yup.string().email().required(),
  gender: Yup.string().required(),
  country: Yup.string().required(),
  detail: Yup.string().min(10).max(500).required(),
  //  image: Yup
  //   .mixed()
  //   .test("fileSize", "The file is too large", (value) => value && value.size <= 2 * 1024 * 1024)
  //   .test('fileType', 'Unsupported file type', (val) => {
  //     return val && ['image/jpeg', 'image/png', 'image/jpg', 'image/webp', 'image/gif'].includes(val.type);
  //   })
  //   .required()


});





export default function AddForm() {


  const [data, setData] = useState([]);
  console.log(data)





  return (






    <div className="flex justify-center mt-10">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Add some</CardTitle>
          <CardDescription>
            Enter your details
          </CardDescription>
        </CardHeader>
        <CardContent>


          <Formik
            initialValues={{
              username: '',
              email: '',
              gender: '',
              country: '',
              detail: '',
              // image: '',
              // imageReview: '',

            }}
            onSubmit={(val) => {
              setData([...data, val]);

            }}

            validationSchema={valSchema}
          >

            {({ handleChange, handleSubmit, values, errors, touched, setFieldValue }) => {
              return <form
                onSubmit={handleSubmit}
              >
                <div className="flex flex-col gap-6">


                  <div className="grid gap-2">
                    <Label htmlFor="username">Username</Label>
                    <Input
                      name='username'
                      value={values.username}
                      onChange={handleChange}
                      id="username"
                      type="text"
                      placeholder="John Doe"
                    />
                    {errors.username && touched.username && <p className="text-red-500">{errors.username}</p>}
                  </div>


                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      name='email'
                      value={values.email}
                      onChange={handleChange}
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                    />
                    {errors.email && touched.email && <p className="text-red-500">{errors.email}</p>}
                  </div>

                  <div className="grid gap-2">

                    <Label htmlFor="gender">Select Your Gender</Label>

                    <RadioGroup
                      onValueChange={(val) => {
                        setFieldValue('gender', val);
                      }}
                      defaultValue="comfortable" className="w-fit mt-3">
                      <div className="flex items-center gap-3">
                        <RadioGroupItem value="male" id="r1" />
                        <Label htmlFor="r1">Male</Label>
                      </div>
                      <div className="flex items-center gap-3">
                        <RadioGroupItem value="female" id="r2" />
                        <Label htmlFor="r2">Female</Label>
                      </div>
                      <div className="flex items-center gap-3">
                        <RadioGroupItem value="other" id="r3" />
                        <Label htmlFor="r3">Other</Label>
                      </div>

                    </RadioGroup>
                    {errors.gender && touched.gender && <p className="text-red-500">{errors.gender}</p>}



                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="country">Select Your Country</Label>
                    <Select
                      onValueChange={(val) => {
                        setFieldValue('country', val);
                      }}
                    >
                      <SelectTrigger className="w-full max-w-48">
                        <SelectValue placeholder="Select a country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>

                          <SelectItem value="nepal">Nepal</SelectItem>
                          <SelectItem value="india">India</SelectItem>
                          <SelectItem value="japan">Japan</SelectItem>

                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    {errors.country && touched.country && <p className="text-red-500">{errors.country}</p>}
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



                  {/* <div className="grid gap-2">
                    <Label htmlFor="image">Select Image</Label>
                    <Input
                      name='image'
                       onChange={(e) => {
                        const file = e.target.files[0];
                        setFieldValue('imageReview', URL.createObjectURL(file));
                        setFieldValue('image', file);
                      }}
                      type="file"
                     
                    />
                       {values.imageReview && !errors.image && <img src={values.imageReview} alt="" className="w-64 h-48" />}
                    {errors.image && touched.image && <p className="text-red-500">{errors.image}</p>}
                  </div> */}




                </div>
                <Button type="submit" className="w-full mt-5 ">
                  Submit
                </Button>
              </form>
            }}



          </Formik>





          {
            data.map((d) => {
              return <div className="mt-5">
                <h1 className=" font-extrabold mb-2">Your inputed data is Here!</h1>
                <h1>{d.username}</h1>
                <h1>{d.email}</h1>
                <h1>{d.gender}</h1>
                <h1>{d.country}</h1>
                <h1>{d.detail}</h1>
              </div>
            })
          }




        </CardContent>





      </Card>




    </div>
  )
}
