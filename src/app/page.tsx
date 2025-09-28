import Hello from "@/components/layout/hello";
import Sidebar from "@/components/layout/sidebar";


export default function Home() {
  return (

    <div className="flex min-h-screen">
      {/* sidebar */}
      <Sidebar />

      {/* main content */}
      <Hello />

    </div>

  );
}
