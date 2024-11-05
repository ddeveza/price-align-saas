"use client";
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useToast } from "@/hooks/use-toast";
import { deleteProduct } from "@/server/actions/products";
import { useTransition } from "react";

const DeleteProductAlertDialogContent = ({ id }: { id: string }) => {
  const [isDeletePending, startDeleteTransition] = useTransition();
  const { toast } = useToast();

  const handleDelete = () => {
    startDeleteTransition(async () => {
      const data = await deleteProduct(id);
      if (data.message) {
        toast({
          title: data.error ? "Error" : "Success",
          description: data.message,
          variant: data.error ? "destructive" : "default",
        });
      }
    });
  };
  return (
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
        <AlertDialogDescription>
          This action cannot be undone. This will permanently delete this
          product
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction disabled={isDeletePending} onClick={handleDelete}>
          Delete
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  );
};

export default DeleteProductAlertDialogContent;
