"use client";
import { MainLayout } from "@/components/layout/MainLayout";
import { VeltComments, VeltProvider } from "@veltdev/react";

export default function Home() {
  // Example user object
const user = {
  userId: 'user-123',
  organizationId: 'org-abc',
  name: 'John Doe',
  email: 'john.doe@example.com',
  photoUrl: 'https://i.pravatar.cc/300',
};
  return (
    <VeltProvider apiKey={process.env.NEXT_PUBLIC_VELT_ID!} authProvider={{
      user,
      retryConfig: { retryCount: 3, retryDelay: 1000 },
    }}>
      <VeltComments textMode={false} />
      <MainLayout />;
    </VeltProvider>
  );
}
