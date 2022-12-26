//libraries
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

//components
import { AuthService } from "./AuthService";

//context

import { useAppSelector } from "../../redux/hooks";
import { selectAccessToken } from "../../slices/commonSlice";
import { useRouter } from "next/router";

function AppContextFc() {
  const router = useRouter();
  const authService = new AuthService();
  const accessToken = useAppSelector(selectAccessToken);
  const { code } = router.query;

  const hasAccessToken = localStorage.getItem("access_token");

  const handleLogin = () => {
    !accessToken && authService.login();
  };

  useEffect(() => {
    if (!accessToken && !code && !hasAccessToken) {
      handleLogin();
    }
  }, []);

  return <></>;
}

export default AppContextFc;
