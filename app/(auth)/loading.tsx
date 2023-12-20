import Loader from "@/lib/ui/components/Loader";

export default function Loading() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <PageLoader />
    </div>
  );
}
