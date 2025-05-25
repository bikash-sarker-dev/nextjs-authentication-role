"use client";

import { useSession } from "next-auth/react";

const UserInfo = () => {
  const clientSession = useSession();
  return (
    <div>
      <p>{JSON.stringify(clientSession)}</p>
    </div>
  );
};

export default UserInfo;
