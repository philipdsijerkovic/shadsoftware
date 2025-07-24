import { ReactNode } from "react";

interface BackgroundLayoutProps {
  children: ReactNode;
}

export default function BackgroundLayout({ children }: BackgroundLayoutProps) {
  return (
    <div className="min-h-screen relative">
      {/* Background gradient covering entire screen */}
      <div className="fixed inset-0 z-0">
        <img
          src="/gradientbottom.png"
          alt="Background gradient"
          className="w-full h-full object-cover opacity-17"
        />
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
