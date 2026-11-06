"use client";

import { Toaster } from "react-hot-toast";

export default function ToastProvider() {
  return (
    <Toaster
      position="top-center"
      toastOptions={{
        duration: 5000,
        style: {
          background: "#111111",
          color: "#FFFFFF",
          border: "1px solid #D4AF37",
        },
        success: {
          iconTheme: {
            primary: "#D4AF37",
            secondary: "#111111",
          },
        },
        error: {
          iconTheme: {
            primary: "#DC2626",
            secondary: "#FFFFFF",
          },
        },
      }}
    />
  );
}
