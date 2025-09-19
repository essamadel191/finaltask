"use client";

import React from "react";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-red-600 text-3xl font-bold mb-4">
        {error.message}
      </h1>
      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-red-600 text-white rounded-md"
      >
        Try again
      </button>
    </div>
  );
}
