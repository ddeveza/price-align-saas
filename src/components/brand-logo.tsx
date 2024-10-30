import { Map } from "lucide-react";
import React from "react";

export const BrandLogo = () => {
  return (
    <span className="flex items-center gap-2 font-semibold flex-shrink-0 text-lg ">
      <Map className="size-8" />
      <span>Price Align</span>
    </span>
  );
};
