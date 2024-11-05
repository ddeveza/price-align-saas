"use client";

import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { env } from "@/data/env/client";
import { CopyCheckIcon, CopyIcon, CopyXIcon } from "lucide-react";
import { useState } from "react";

type CopyStateType = "idle" | "copied" | "error";

const AddToSiteProductModalContent = ({ id }: { id: string }) => {
  const [copyState, setCopyState] = useState<CopyStateType>("idle");
  const code = `<script src="${env.NEXT_PUBLIC_SERVER_URL}/api/products/${id}/banner"></script>`;

  const Icon = getCopyIcon(copyState);
  function handleCopy() {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        setCopyState("copied");
        setTimeout(() => {
          setCopyState("idle");
        }, 2000);
      })
      .catch(() => {
        setCopyState("error");
        setTimeout(() => {
          setCopyState("idle");
        }, 2000);
      });
  }
  return (
    <DialogContent className="max-w-max">
      <DialogHeader>
        <DialogTitle className="text-2xl">Start Earning PA Sales!</DialogTitle>
        <DialogDescription>
          All you need to do is copy the below script into your site and your
          customers will start seeing the PA Discounts!
        </DialogDescription>
      </DialogHeader>
      <pre className="mb-4 max-w-screen-xl overflow-x-auto rounded bg-secondary p-4 text-secondary-foreground">
        <code>{code}</code>
      </pre>
      <div className="flex gap-2">
        <Button onClick={handleCopy}>
          <Icon className="mr-2 size-4" />
          {getChildren(copyState)}
        </Button>
      </div>
    </DialogContent>
  );
};

export default AddToSiteProductModalContent;

function getCopyIcon(copyState: CopyStateType) {
  switch (copyState) {
    case "idle":
      return CopyIcon;
    case "copied":
      return CopyCheckIcon;
    case "error":
      return CopyXIcon;
  }
}

function getChildren(copyState: CopyStateType) {
  switch (copyState) {
    case "idle":
      return "Copy Code";
    case "copied":
      return "Copied";
    case "error":
      return "Error";
  }
}
