"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, MapPin, ClipboardList, HelpCircle, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { GlobalSearch } from "@/components/GlobalSearch";
import { ShareButton } from "@/components/ShareButton";

const categories = [
  {
    title: "Tasks",
    description: "Step-by-step guides for registration, induction, clearance, and more",
    icon: ClipboardList,
    href: "/tasks",
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "Locations",
    description: "Find key campus buildings and offices with Google Maps directions",
    icon: MapPin,
    href: "/landmarks",
    color: "from-blue-500 to-cyan-600",
  },
  {
    title: "FAQs",
    description: "Quick answers to common student questions and concerns",
    icon: HelpCircle,
    href: "/faqs",
    color: "from-purple-500 to-pink-600",
  },
];

const quickLinks = [
  { name: "Course Registration", path: "/tasks#registration" },
  { name: "Student ID Card", path: "/tasks#id-card" },
  { name: "Library", path: "/landmarks#library" },
  { name: "Admissions Office", path: "/landmarks#admissions" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            Built by students, for students
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Your OAU Campus
            <span className="block text-primary">Companion</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Navigate university tasks and locations with ease. Get step-by-step guides, 
            find buildings instantly, and access helpful FAQs — all without logins or ads.
          </p>

          {/* Search Bar - Now Functional */}
          <div className="relative max-w-xl mx-auto mt-8">
            <GlobalSearch />
          </div>

          {/* Share Button */}
          <div className="flex justify-center pt-2">
            <ShareButton
              title="Guide16 - OAU Campus Companion"
              text="Check out Guide16 - your OAU campus companion for tasks, locations, and FAQs!"
              variant="outline"
              size="sm"
            />
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap gap-2 justify-center pt-4">
            {quickLinks.map((link) => (
              <Link key={link.name} href={link.path}>
                <Button variant="outline" size="sm" className="rounded-full">
                  {link.name}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Category Cards */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link key={category.title} href={category.href}>
                <Card className="group h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer border-2 hover:border-primary/50">
                  <CardHeader>
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-2xl">{category.title}</CardTitle>
                    <CardDescription className="text-base">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                      Explore
                      <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Features Section */}
      <section className="border-t border-border bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">100%</div>
              <div className="text-sm font-medium">Free & Ad-Free</div>
              <p className="text-sm text-muted-foreground">
                No hidden costs, no advertisements, no data collection
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">Offline</div>
              <div className="text-sm font-medium">Works Without Internet</div>
              <p className="text-sm text-muted-foreground">
                Access guides anytime, even without connection
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">Simple</div>
              <div className="text-sm font-medium">No Login Required</div>
              <p className="text-sm text-muted-foreground">
                Jump straight in and find what you need instantly
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}