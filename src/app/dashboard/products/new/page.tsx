import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PageWithBackButton from "../../_component/page-with-back-button";
import ProductDetailsForm from "../../_component/forms/product-details-form";

export default function NewProductPage() {
  return (
    <PageWithBackButton pageTitle="Create Product" backButtonHref="/dashboard">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Product Details</CardTitle>
        </CardHeader>
        <CardContent>
          <ProductDetailsForm />
        </CardContent>
      </Card>
    </PageWithBackButton>
  );
}
