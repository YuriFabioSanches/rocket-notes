import { useContext } from "react";
import { AuthContext } from "./auth"

function useAuth() {
  const context = useContext(AuthContext)
  return context
}

export { useAuth }