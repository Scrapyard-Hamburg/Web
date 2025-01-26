"use client";
import Skew from "react-spinners/SkewLoader";
import { Box } from "theme-ui";
import Footer from "@/components/ui/Footer";

export default function Page() {
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
