import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const useAuthContext = () => useContext(AuthContext);

export default useAuthContext;
