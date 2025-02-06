import Image from "next/image";
import styles from "./page.module.css";
import LoginForm from "@/app/components/LoginForm";

export default function Home() {
  return (
    <main>
      <LoginForm />
    </main>
  );
}
