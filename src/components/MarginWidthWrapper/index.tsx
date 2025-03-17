import { ReactNode } from "react";

export default function MarginWidthWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="bg-primaryBlue flex min-h-screen flex-col sm:border-r sm:border-yellow-950 md:ml-60">
      {children}
    </div>
  );
}
