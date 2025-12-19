"use client";

import MobileNavigationBar from "./mobile_navigation_bar";
import DesktopNavigationBarContent from "./desktop_navigation_bar_content";
import Scroll from "@/lib/scrollTo";

export default function NavigationBar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="cursor-pointer" onClick={() => Scroll("home")}>
            <span className="text-xl font-semibold text-primary">Mi</span>
          </div>
          <DesktopNavigationBarContent />
        </div>

        {/* Mobile Navigation */}
        <MobileNavigationBar />
      </div>
    </header>
  );
}
