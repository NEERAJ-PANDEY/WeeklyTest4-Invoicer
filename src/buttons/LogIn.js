import { useContext } from "react";
import AuthContext from "../context/auth";

export default function LogIn() {
  const { login } = useContext(AuthContext);

  return (
    <>
      <button
        
        className="bg-cyan-500 py-2 px-6 rounded text-base hover:bg-gray-800 text-gray-800 transition-all duration-150 hover:text-white hover:ring-4 hover:ring-gray-400"
      >
        Log In
      </button>
    </>
  );
}
