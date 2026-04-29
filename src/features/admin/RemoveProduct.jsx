import { Button } from "@/components/ui/button.jsx";
import { TrashIcon } from "lucide-react";
import { useRemoveProductMutation } from "../products/productApi.js";
import { useSelector } from "react-redux";
import { toast } from "sonner";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog.jsx";
import { Spinner } from "@/components/ui/spinner.jsx";

export default function RemoveProduct({ id }) {
    const { user } = useSelector(state => state.userSlice);
    const [deleteProduct, { isLoading }] = useRemoveProductMutation();

    const handleRemove = async () => {
        try {
            await deleteProduct({id, token: user.token}).unwrap();
            toast.success("Product delete successfully");
        } catch (err) {
            toast.error(err.data.message);

        }
    }



    return (
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button variant="ghost">

                        {isLoading ? <Spinner /> : <TrashIcon />}

                    </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete your
                            account from our servers.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                            onClick={handleRemove}
                        >Continue</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

        
    )
}
