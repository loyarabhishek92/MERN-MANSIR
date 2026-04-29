import { useNavigate } from "react-router";
import { useGetProductsQuery } from "../products/productApi.js"
import { Button } from "@/components/ui/button.jsx";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table.jsx";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar.jsx";
import { EditIcon } from "lucide-react";
import RemoveProduct from "./RemoveProduct.jsx";
import { base } from "@/app/mainApi.js";

export default function AdminPage() {

    const { isLoading, error, data } = useGetProductsQuery();
    const nav = useNavigate();
    if (isLoading) return <h1>Loading...</h1>
    if (error) return <h1>{error.data}</h1>


console.log(data);

    return (
        <div className="px-10 py-5">
            <h1 className="text-xl font-bold">TotalData:<h1 className="font-extrabold inline text-2xl text-red-600"> {data.totalData}</h1></h1>
            <div className="flex justify-end">

                <Button
                    onClick={() => nav('/form/add')}
                >Add Product</Button>

            </div>




            <div className='max-w-5xl mt-5'>
                <div className='[&>div]:rounded-sm [&>div]:border'>
                    <Table>
                        <TableHeader>
                            <TableRow className='hover:bg-transparent'>
                                <TableHead>Name</TableHead>
                                <TableHead>Price</TableHead>
                                <TableHead>Stock</TableHead>
                                <TableHead>Category</TableHead>
                                <TableHead>Brand</TableHead>
                                <TableHead>Edit</TableHead>
                                <TableHead className='text-right'>Remove</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {data.productsForAdmin.map(item => (
                                <TableRow key={item._id}>
                                    <TableCell>
                                        <div className='flex items-center gap-3'>
                                            <Avatar>
                                                <AvatarImage src={`${base}/${item.image}`} alt={item.fallback} />
                                                <AvatarFallback className='text-xs'>{item.fallback}</AvatarFallback>
                                            </Avatar>
                                            <div className='font-medium'>{item.title}</div>
                                        </div>
                                    </TableCell>
                                    <TableCell>Rs.{item.price}</TableCell>
                                    <TableCell>{item.stock}</TableCell>
                                    <TableCell>{item.category}</TableCell>

                                    <TableCell>{item.brand}</TableCell>
                                    <TableCell>
                                        <Button
                                            onClick={() => nav(`/form/edit/${item._id}`)}
                                            variant="outline">

                                            <EditIcon />
                                        </Button>

                                    </TableCell>
                                    <TableCell className='text-right'>
                                        <RemoveProduct id={item._id} />

                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>

            </div>
        </div>
    )
}
