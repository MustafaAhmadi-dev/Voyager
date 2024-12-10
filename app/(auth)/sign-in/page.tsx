import LoginForm from "./LoginForm";

export default function page() {
  return (
    <main className="h-dvh grid grid-cols-[48rem] content-center justify-center gap-13 -mt-4 bg-gray-200 dark:bg-gray-800 dark:text-slate-200">
      <h4 className="text-5xl mb-8">Log in to your account</h4>
      <LoginForm />
    </main>
  );
}
