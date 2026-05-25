import ContentPageSkeleton from "@/components/skeletons/ContentPageSkeleton";

export default function TermsLoading() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--color-bg-primary)",
        padding: "120px 5% 80px",
        maxWidth: 800,
        margin: "0 auto",
      }}
    >
      <ContentPageSkeleton />
    </div>
  );
}
