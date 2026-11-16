import { redirect } from "next/navigation";

// About now lives on the home page.
export default function AboutPage() {
  redirect("/#about");
}
