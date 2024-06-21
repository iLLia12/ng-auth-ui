import { handleSignIn } from "./server-actions";
import SignInForm from "./form";

export default async function SignInPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SignInForm action={handleSignIn} />
    </main>
  );
}
