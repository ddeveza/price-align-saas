"use client";
import CustomFormField from "@/components/forms/custom-form-field";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { productDetailsSchema } from "@/schemas/products";
import { createProduct } from "@/server/actions/products";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const ProductDetailsForm = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof productDetailsSchema>>({
    resolver: zodResolver(productDetailsSchema),
    defaultValues: {
      name: "",
      url: "",
      description: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof productDetailsSchema>) => {
    const data = await createProduct(values);
    if (data?.message) {
      toast({
        title: data.error ? "Error" : "Success",
        description: data.message,
        variant: data.error ? "destructive" : "default",
      });
    }
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6"
      >
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <CustomFormField
            name="name"
            label="Product Name"
            control={form.control}
          />
          <CustomFormField
            name="url"
            control={form.control}
            label="Enter your website URL"
            description="Include the protocol (http/https) and the full path to the sale page"
          />
        </div>
        <CustomFormField
          name="description"
          control={form.control}
          Component={Textarea}
          label="Product Description"
          description="An optional description to help distinguish your product from other products"
        />
        <div className="self-end">
          <Button disabled={form.formState.isSubmitting} type="submit">
            Save
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ProductDetailsForm;
