"use client";

import {
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

const AddToSiteProductModalContent = () => {
  return (
    <DialogContent className="max-w-max">
      <DialogTitle className="text-2xl">Start Earning PA Sales!</DialogTitle>
      <DialogDescription>
        All you need to do is copy the below script into your site and your
        customers will start seeing the PA Discounts!
      </DialogDescription>
    </DialogContent>
  );
};

export default AddToSiteProductModalContent;
