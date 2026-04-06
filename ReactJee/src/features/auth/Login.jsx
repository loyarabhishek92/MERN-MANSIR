import { Button } from '@/components/ui/button.jsx'
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Formik } from 'formik'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import * as Yup from "yup"
import { useLoginMutation } from './authApi.js'
import { setUser } from '../user/userSlice.js'
import { EyeIcon, EyeOffIcon } from 'lucide-react'
import { Spinner } from '@/components/ui/spinner.jsx'
import { toast } from 'sonner'

const loginSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
});

export default function Login() {

    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const [loginUser, { isLoading }] = useLoginMutation();
    const nav = useNavigate();







    return (
        <div>
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle>Login to your account</CardTitle>
                    <CardDescription>
                        Enter your email below to login to your account
                    </CardDescription>
                    <CardAction>
                        <Button onClick={() => nav('/register')} variant="link">Sign Up</Button>
                    </CardAction>
                </CardHeader>
                <CardContent>




                    <Formik
                        initialValues={{
                            email: "",
                            password: "",
                        }}
                        onSubmit={async (val) => {
                            try {
                                const response = await loginUser(val).unwrap();
                                dispatch(setUser(response));
                                toast.success('Login successful');
                                nav(-1);
                            } catch (err) {
                                toast.error(err.data.message)

                            }

                        }}

                        validationSchema={loginSchema}

                    >


                        {({ handleChange, handleSubmit, values, touched, errors }) => (
                            <form onSubmit={handleSubmit}>
                                <div className="flex flex-col gap-6">
                                    <div className="grid gap-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input
                                            onChange={handleChange}
                                            value={values.email}
                                            name='email'
                                            id="email"
                                            type="email"
                                            placeholder="m@example.com"
                                        />
                                        {errors.email && touched.email && <p className="text-red-500">{errors.email}</p>}
                                    </div>
                                    <div className="grid gap-2">
                                        <div className="flex items-center">
                                            <Label htmlFor="password">Password</Label>
                                        </div>
                                        <div className="relative">
                                            <Input
                                                onChange={handleChange}
                                                value={values.password}
                                                name='password'
                                                type={show ? "text" : "password"}
                                                placeholder="password"
                                                id="password" />

                                            <Button

                                                type='button'
                                                variant='ghost'
                                                size='icon'
                                                onClick={() => setShow(!show)}
                                                className='text-muted-foreground focus-visible:ring-ring/50 absolute inset-y-0 right-0 rounded-l-none hover:bg-transparent'
                                            >
                                                {show ? <EyeIcon /> : <EyeOffIcon />}

                                            </Button>


                                        </div>

                                        {errors.password && touched.password && <p className="text-red-500">{errors.password}</p>}
                                    </div>
                                    <div className='grid gap-2'>
                                        <Button
                                            disabled={isLoading}
                                            type="submit" className="w-full">
                                            {isLoading ? <Spinner /> : "Login"}
                                        </Button>
                                    </div>

                                </div>
                            </form>
                        )}





                    </Formik>

                </CardContent>

            </Card>
        </div>
    )
}
