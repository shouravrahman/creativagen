"use client";

import { useEffect, useState } from "react";

import { ProModal } from "@/components/pro-modal";
import SubscriptionModal from "./SubscriptionModal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
        {/* <ProModal /> */}
        <SubscriptionModal />
    </>
  );
};
