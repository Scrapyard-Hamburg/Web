import EURO from "@/components/eurusd";
import { Component } from "@/components/shad";

export default function Page() {
  return (
    <main className="h-screen w-screen items-center justify-center">
      <EURO className="h-3/6" />
      <Component />
    </main>
  );
}
