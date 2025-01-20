"use server";

import { redirect } from "next/navigation";

const refer = (url: string) => {
  redirect(url);
};

export default refer;
