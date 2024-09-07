import React from "react";
import DefaultTheme from "nextra-theme-docs";
import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;

  pageOpts: {
    title: string;
    frontMatter: {
      image?: string;
    };
    headings: { value: string }[];
    pageMap: any[];
  };
}

export default function Layout({ children, pageOpts }: LayoutProps) {
  return (
    <DefaultTheme pageOpts={pageOpts}>
      <h1 style={{ color: "blue" }}>My Custom Header</h1>
      {children}
    </DefaultTheme>
  );
}
