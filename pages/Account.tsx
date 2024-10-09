import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";
import UpdateUserDataForm from "../features/authentication/UpdateUserDataForm";
import Row from "../ui/Row";

function Account() {
  return (
    <main className="flex flex-col items-center justify-center bg-gray-800">
      <h1 className="text-6xl text-center mt-12 mb-6">Update your account</h1>

      <Row  className="w-full md:w-[80%] pb-8">
        <h3 className="dark:text-slate-300">Update user data</h3>
        <UpdateUserDataForm />
      </Row>

      <Row className="w-full md:w-[80%]">
        <h3 className="dark:text-slate-300">Update password</h3>
        <UpdatePasswordForm />
      </Row>
    </main>
  );
}

export default Account;
