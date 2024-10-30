import { Map } from "lucide-react";
import React from "react";

export const BrandLogo = () => {
  return (
    <span className="flex flex-shrink-0 items-center gap-2 text-lg font-semibold">
      <Map className="size-8" />
      <span>Price Aligned</span>
    </span>
  );
};
