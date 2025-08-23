import { redirect } from "next/navigation";

export default function ProjectsPage() {
    redirect('/#work');
    
  return (
    <div>
      <h1>Hello Page</h1>
    </div>
  );
}