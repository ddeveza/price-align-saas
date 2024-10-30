import { Button } from "@/components/ui/button";
import { SignUpButton } from "@clerk/nextjs";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { NeonIcon } from "./_icons/neon";
import { ClerkIcon } from "./_icons/clerk";
import { subscriptionTiersInOrder } from "@/data/subscriptions-tier";
import PricingCard from "./_components/pricing-card";
import { BrandLogo } from "@/components/brand-logo";
import FooterLinkGroup from "./_components/footer-link-group";

export default function Home() {
  return (
    <>
      <section className="flex min-h-screen flex-col items-center justify-center gap-8 text-balance bg-[radial-gradient(hsl(0,72%,65%,40%),hsl(24,62%,73%,40%),hsl(var(--background))_60%)] px-4 text-center">
        <h1 className="m-4 text-6xl font-bold tracking-tight lg:text-7xl xl:text-8xl">
          Price Smarter, Sell bigger!
        </h1>
        <p className="max-w-screen-lg text-lg lg:text-3xl">
          Optimize your product pricing across countries to maximize sales.
          Capture 85% of the untapped market with location-based dynamic pricing
        </p>
        <SignUpButton>
          <Button className="flex gap-2 rounded-xl p-6 text-lg">
            Get started for free <ArrowRightIcon className="size-5" />
          </Button>
        </SignUpButton>
      </section>
      <section className="bg-primary text-primary-foreground">
        <div className="container flex flex-col gap-16 p-16 px-8 debug-border md:px-16">
          <h2 className="text-balance text-center text-3xl">
            Trusted by the top modern companies
          </h2>
          <div className="grid grid-cols-2 gap-16 md:grid-cols-3 xl:grid-cols-5">
            <Link href="https://neon.tech">
              <NeonIcon />
            </Link>
            <Link href="https://clerk.com/">
              <ClerkIcon />
            </Link>
            <Link href="https://neon.tech">
              <NeonIcon />
            </Link>
            <Link href="https://clerk.com/">
              <ClerkIcon />
            </Link>
            <Link href="https://neon.tech">
              <NeonIcon />
            </Link>
            <Link href="https://clerk.com/">
              <ClerkIcon />
            </Link>
            <Link href="https://neon.tech">
              <NeonIcon />
            </Link>
            <Link href="https://clerk.com/">
              <ClerkIcon />
            </Link>
            <Link href="https://neon.tech">
              <NeonIcon />
            </Link>
            <Link href="https://clerk.com/">
              <ClerkIcon />
            </Link>
          </div>
        </div>
      </section>
      <section id="pricing" className="bg-accent/5 px-8 py-16">
        <h2 className="mb-8 text-balance text-center text-4xl font-semibold">
          Pricing software which pays for itself 20x over
        </h2>
        <div className="mx-auto grid max-w-screen-xl grid-cols-2 gap-4 lg:grid-cols-4">
          {subscriptionTiersInOrder.map((tier) => (
            <PricingCard key={tier.name} {...tier} />
          ))}
        </div>
      </section>
      <footer className="container flex flex-col items-start justify-between gap-8 pb-8 pt-16 sm:flex-row sm:gap-4">
        <Link href="/">
          <BrandLogo />
        </Link>
        <div className="flex flex-col gap-8 sm:flex-row">
          <div className="flex flex-col gap-8">
            <FooterLinkGroup
              title="Help"
              links={[
                { label: "PPP Discounts", href: "#" },
                { label: "Discount API", href: "#" },
              ]}
            />
            <FooterLinkGroup
              title="Solutions"
              links={[
                { label: "Newsletter", href: "#" },
                { label: "SaaS Business", href: "#" },
                { label: "Online Courses", href: "#" },
              ]}
            />
          </div>
          <div className="flex flex-col gap-8">
            <FooterLinkGroup
              title="Features"
              links={[{ label: "PPP Discounts", href: "#" }]}
            />
            <FooterLinkGroup
              title="Tools"
              links={[
                { label: "Salary Converter", href: "#" },
                { label: "Coupon Generator", href: "#" },
                { label: "Stripe App", href: "#" },
              ]}
            />
            <FooterLinkGroup
              title="Company"
              links={[
                { label: "Affiliate", href: "#" },
                { label: "Twitter", href: "#" },
                { label: "Terms of Service", href: "#" },
              ]}
            />
          </div>
          <div className="flex flex-col gap-8">
            <FooterLinkGroup
              title="Integrations"
              links={[
                { label: "Lemon Squeezy", href: "#" },
                { label: "Gumroad", href: "#" },
                { label: "Stripe", href: "#" },
                { label: "Chargebee", href: "#" },
                { label: "Paddle", href: "#" },
              ]}
            />
            <FooterLinkGroup
              title="Tutorials"
              links={[
                { label: "Any Website", href: "#" },
                { label: "Lemon Squeezy", href: "#" },
                { label: "Gumroad", href: "#" },
                { label: "Stripe", href: "#" },
                { label: "Chargebee", href: "#" },
                { label: "Paddle", href: "#" },
              ]}
            />
          </div>
        </div>
      </footer>
    </>
  );
}
