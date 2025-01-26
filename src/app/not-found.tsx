"use client";
import { Box, Text } from "theme-ui";
import Footer from "@/components/ui/Footer";
import { useEffect } from "react";
import refer from "@/components/304";

function NotFoundPage() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      refer("/");
    }, 5000);
    return () => {
      clearTimeout(timeout); // Cleanup function to clear the timeout
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
        <Text sx={{ fontSize: "3rem", fontWeight: "bold", color: "primary" }}>
          404 Not Found
        </Text>
        <Text sx={{ fontSize: "1.5rem", color: "text" }}>
          The requested page could not be found. We apologize for any
          inconvenience.
        </Text>
        <Footer noBg />
      </Box>
    </main>
  );
}

export default NotFoundPage;
