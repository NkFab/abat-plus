"use client";

import { NextUIProvider } from "@nextui-org/react";

const NextUIWrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};

export default NextUIWrapper;
