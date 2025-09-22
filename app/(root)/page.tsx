"use client";
import { MainLayout } from "@/components/layout/MainLayout";
import useTheme from "@/hooks/useTheme";
import { VeltComments } from "@veltdev/react";
import React from "react";

export default function Home() {
  const {theme}=useTheme()
  return (
      <React.Fragment>
        <MainLayout />
        <VeltComments
          textMode={false}
          shadowDom={false}
          textCommentToolShadowDom={false}
          darkMode={theme=="dark"}
        />
      </React.Fragment>
  );
}
