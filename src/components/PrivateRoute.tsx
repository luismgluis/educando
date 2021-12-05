import React, { useEffect, useState } from "react";
import User from "../classes/User";
import { Navigate } from "react-router";
import Api from "../api/Api";
import LoadingPage from "./pages/LoadingPage/LoadingPage";
import { useCurrentUser, useSetCurrentUser } from "../hooks/currentUser";
import { useSetCurrentBusiness } from "../hooks/currentBusiness";
const TAG = "PRIVATE ROUTE";
type PrivateRouteProps = {
  blockRedirect: boolean;
  children?: JSX.Element;
  path?: string;
};
const PrivateRoute: React.FC<PrivateRouteProps> = ({
  children,
  blockRedirect,
  path,
}) => {
  console.log(TAG, "render");
  // const [me, setMe] = useState(new User(null));
  const [hasSession, setHasSession] = useState(0);
  const me = useCurrentUser();
  const setMe = useSetCurrentUser();
  const setBusiness = useSetCurrentBusiness();

  useEffect(() => {
    const uid = sessionStorage.getItem("uid");
    if (uid) {
      setHasSession(2); //yes
      return;
    }
    setHasSession(3); //no
  }, []);

  useEffect(() => {
    if (hasSession !== 2) return;
    const unsubs = Api.app.getCurrentUser(async (userResult) => {
      if (userResult) {
        const userData: any = await Api.database.user.getUser(userResult?.uid!);
        const user = new User(userData);
        sessionStorage.setItem("uid", user.id);
        setMe(user);
        setHasSession(3);

        return;
      }
      setMe(new User(null));
      setHasSession(3);
      return () => unsubs();
    });
  }, [setMe, hasSession]);

  const hasUser = !me.isEmpty;

  console.log(
    "private",
    path,
    "blockRedirect",
    blockRedirect,
    "hasUser",
    hasUser
  );
  return (
    <React.Fragment>
      {hasSession <= 1 && <LoadingPage />}

      {hasSession === 1 && !hasUser && !blockRedirect && (
        <Navigate to="/Login" />
      )}

      {hasSession === 2 && !hasUser && !blockRedirect && <LoadingPage />}

      {hasSession === 3 && !hasUser && !blockRedirect && (
        <Navigate to="/Login" />
      )}

      {hasSession === 3 && !hasUser && blockRedirect && children}
      {hasUser && children}
    </React.Fragment>
  );
};
export default PrivateRoute;
