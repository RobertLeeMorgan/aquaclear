import type { ReactNode } from "react";

interface ProjectCardProps {
  children: ReactNode;
}

export default function ProjectCard({ children }: ProjectCardProps) {
  return (
    <div className="card bg-base-100 border border-base-300 shadow-md ">
      {children}
    </div>
  );
}