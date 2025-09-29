import Hello from "@/components/layout/hello";
import Sidebar from "@/components/layout/sidebar";
import VantaBackground from "@/components/ui/vantaBackground";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <VantaBackground />
      {/* sidebar */}
      <Sidebar />
      {/* main content */}
      <Hello />
    </div>
  );
}
