import TestimonialsSkeleton from "@/components/skeletons/TestimonialsSkeleton";

export default function TestimonialsLoading() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--color-bg-primary)",
        paddingTop: 64,
      }}
    >
      <TestimonialsSkeleton />
    </div>
  );
}
