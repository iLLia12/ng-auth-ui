import Image from "next/image";
import Link from "next/link";
import { getSession, login, logout } from "./lib";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getSession();

  async function handleLogin(formData: FormData) {
    "use server";
    await login(formData);
    redirect("/");
  }

  async function handleLogout() {
    "use server";
    await logout();
    redirect("/");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link className="mr-2" href="http://localhost:3999/api/auth/signin">
        Next Auth
      </Link>
      <section>
        <form action={handleLogin}>
          <input type="email" placeholder="Email" />
          <button>Login</button>
        </form>
        <form action={handleLogout}>
          <button>Logout</button>
        </form>
      </section>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </main>
  );
}
