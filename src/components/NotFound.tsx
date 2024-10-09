import { useNavigate, useRouteError } from "react-router-dom";
import Button from "../ui/Button";

function NotFound() {
  const error = useRouteError() as Error;
  const navigate = useNavigate();

  return (
    <main className="h-dvh bg-gray-100 flex items-center justify-center p-20">
      <div className="bg-gray-50 text-4xl border-solid  border-4 flex flex-col text-center p-20 gap-12 border-gray-200 rounded-md">
        <h1>
          The page you are looking for could not be found 😢 <br />
          <p>{error.message}</p>
        </h1>
        <div>
          <Button onClick={() => navigate("..")} className="w-fit">
            &larr; Go back
          </Button>
        </div>{" "}
      </div>
    </main>
  );
}

export default NotFound;
