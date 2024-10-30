import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { subscriptionTiersInOrder } from "@/data/subscriptions-tier";
import { formatCompactNumber } from "@/lib/formatters";
import { cn } from "@/lib/utils";
import { SignUpButton } from "@clerk/nextjs";
import { CheckIcon } from "lucide-react";
import { ReactNode } from "react";

type PricingCardProps = (typeof subscriptionTiersInOrder)[number];

const PricingCard = ({
  canAccessAnalytics,
  canCustomizeBanner,
  canRemoveBranding,
  maxNumberOfProducts,
  maxNumberOfVisits,
  name,
  priceInCents,
}: PricingCardProps) => {
  const isMostPopular = name === "Standard";
  return (
    <Card>
      <CardHeader>
        <div className="mb-8 font-semibold text-accent">{name}</div>
        <CardTitle className="text-xl font-bold">
          ${priceInCents / 100}/mo
        </CardTitle>
        <CardDescription>{`${formatCompactNumber(maxNumberOfVisits)} pricing page visits/mo`}</CardDescription>
      </CardHeader>
      <CardContent>
        <SignUpButton>
          <Button
            className="w-full rounded-lg text-lg"
            variant={isMostPopular ? "accent" : "default"}
          >
            Get Started
          </Button>
        </SignUpButton>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-4">
        <Feature className="font-bold">
          {maxNumberOfProducts}{" "}
          {maxNumberOfProducts === 1 ? "product" : "products"}
        </Feature>
        <Feature>Price Align discounts</Feature>
        {canAccessAnalytics && <Feature>Advanced analytics</Feature>}
        {canCustomizeBanner && <Feature>Banner customization</Feature>}
        {canRemoveBranding && (
          <Feature>Remove Easy Price Align branding</Feature>
        )}
      </CardFooter>
    </Card>
  );
};

export default PricingCard;

function Feature({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <CheckIcon className="size-4 rounded-full bg-accent/25 stroke-accent p-0.5" />
      <span>{children}</span>
    </div>
  );
}
