import { useLocation } from "react-router-dom";

export default function Confirm() {
  const { state } = useLocation();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <h1 className="text-3xl font-bold text-green-600 mb-4">THANK YOU FOR REGISTERING ON MAX UNIVERSITY</h1>
      <p className="text-lg">You will soon receive a confirmation message.</p>
      <p className="mt-4">Course: {state?.course?.title || "Selected Course"}</p>
    </div>
  );
}
