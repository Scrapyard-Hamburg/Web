"use client";
import Skew from "react-spinners/SkewLoader";
import { Box } from "theme-ui";
import Footer from "@/components/ui/Footer";
import { useEffect } from "react";
import refer from "@/components/304";

export default function Page() {
  useEffect(() => {
    const timeout1 = setTimeout(() => {
      refer("https://hcb.hackclub.com/donations/start/hamburg");
    }, 2000);
    const timeout2 = setTimeout(() => {
      refer("/");
    }, 5000);
    return () => {
      clearTimeout(timeout1); // Cleanup function to clear the first timeout
      clearTimeout(timeout2); // Cleanup function to clear the second timeout
    };
  }, []);
  return (
    <main className="h-screen w-screen">
      <Box
        sx={{
          width: "100%",
          background: "url('/backgrounds/lined-paper.png')",
          backgroundSize: ["contain", "contain", "cover!important"],
          display: "flex",
          justifyContent: "center",
          height: "100%",
          alignItems: "center",
          flexDirection: "column",
          gap: "20px",
          p: [4, 4, 5],
          pt: 6,
          position: "relative",
        }}
      >
        <Skew size={50} />
        <Footer noBg />
      </Box>
    </main>
  );
}
