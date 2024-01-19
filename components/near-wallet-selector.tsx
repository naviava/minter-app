"use client";

import { useMbWallet } from "@mintbase-js/react";

export const NearWalletConnector = () => {
  const { isConnected, selector, connect, activeAccountId } = useMbWallet();

  const handleSignout = async () => {
    const wallet = await selector.wallet();
    return wallet.signOut();
  };

  const handleSignIn = async () => {
    return connect();
  };

  if (!isConnected) {
    return (
      <button
        className="rounded bg-white p-3 text-black hover:bg-[#e1e1e1]"
        onClick={handleSignIn}
      >
        Connect To NEAR
      </button>
    );
  }

  return (
    <div>
      <p>You are connected as {activeAccountId}</p>
      <div className="mt-4 flex items-center justify-center">
        <button
          className="rounded bg-white p-3 text-black hover:bg-[#e1e1e1]"
          onClick={handleSignout}
        >
          {" "}
          Disconnect{" "}
        </button>
      </div>
    </div>
  );
};
