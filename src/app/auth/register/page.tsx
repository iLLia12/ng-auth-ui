import { handleRegister } from "./server-actions";
import RegisterForm from "./form";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <RegisterForm action={handleRegister} />
    </main>
  );
}
