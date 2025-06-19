import { clsx, type ClassValue } from "clsx";
import { Metadata } from "next";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function constructMetadata({
  title = "Abhi's Portfolio",
  description = "Welcome to my portfolio website. I'm a software developer specializing in web development and modern technologies.",
  image = "/logo.png",
  keywords = "Abhi Bhingradiya, software developer, web development, portfolio, full-stack developer",
  authors = [{ name: "Abhi Bhingradiya" }],
} = {}) {
  return {
    metadataBase: new URL("https://me.abhibhingradiya.shop/"),
    title,
    description,
    keywords,
    authors,
    openGraph: {
      title,
      description,
      images: [{ url: image }],
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
    },
    icons: {
      icon: "/favicon.ico",
    },
  };
}
