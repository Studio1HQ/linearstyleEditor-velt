"use client";
import { MainLayout } from "@/components/layout/MainLayout";
import { VeltComments, VeltProvider } from "@veltdev/react";

export default function Home() {
  return (
    <VeltProvider apiKey={process.env.NEXT_PUBLIC_VELT_ID!}>
      <MainLayout />
      <VeltComments
        textMode={false}
        shadowDom={false}
        textCommentToolShadowDom={false}
      />
    </VeltProvider>
  );
}
