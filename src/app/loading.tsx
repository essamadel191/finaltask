import React from "react";
import { Spinner } from "@/components/ui/shadcn-io/spinner";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Spinner variant='circle' className="h-20 w-20" /> 
    </div>
  );
}
