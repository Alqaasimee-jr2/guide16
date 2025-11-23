"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface SearchResult {
  title: string;
  description: string;
  path: string;
  category: "task" | "landmark" | "faq";
}

const searchData: SearchResult[] = [
  // Tasks
  { title: "Course Registration", description: "Complete guide for registering courses each semester", path: "/tasks#registration", category: "task" },
  { title: "Student Induction", description: "Steps for new students to complete induction process", path: "/tasks#induction", category: "task" },
  { title: "Clearance Process", description: "How to complete end-of-session or graduation clearance", path: "/tasks#clearance", category: "task" },
  { title: "Student ID Card Collection", description: "Process for obtaining your official OAU student ID card", path: "/tasks#id-card", category: "task" },
  { title: "Hostel Accommodation", description: "Steps to apply for on-campus accommodation", path: "/tasks#hostel", category: "task" },
  { title: "Exam Registration", description: "How to register for semester examinations", path: "/tasks#exam", category: "task" },
  
  // Landmarks
  { title: "Hezekiah Oluwasanmi Library", description: "Main university library with extensive collection", path: "/landmarks#library", category: "landmark" },
  { title: "Admissions Office", description: "Handles all admission-related matters", path: "/landmarks#admissions", category: "landmark" },
  { title: "Bursary Department", description: "Fee payment and financial matters", path: "/landmarks#bursary", category: "landmark" },
  { title: "Registry", description: "Student records and transcripts", path: "/landmarks#registry", category: "landmark" },
  { title: "Health Centre", description: "Medical services and emergency care", path: "/landmarks#health-centre", category: "landmark" },
  { title: "ICT Centre", description: "Computer labs and technical support", path: "/landmarks#ict-centre", category: "landmark" },
  { title: "Awolowo Hall", description: "Male undergraduate accommodation", path: "/landmarks#awolowo-hall", category: "landmark" },
  { title: "Fajuyi Hall", description: "Male undergraduate hostel", path: "/landmarks#fajuyi-hall", category: "landmark" },
  { title: "Moremi Hall", description: "Female undergraduate accommodation", path: "/landmarks#moremi-hall", category: "landmark" },
  { title: "Oduduwa Hall", description: "Large lecture hall amphitheatre", path: "/landmarks#amphitheatre", category: "landmark" },
  
  // FAQs
  { title: "Portal Login", description: "How do I access the student portal?", path: "/faqs#portal-login", category: "faq" },
  { title: "Course Registration Deadline", description: "When is the deadline for course registration?", path: "/faqs#course-registration-deadline", category: "faq" },
  { title: "GPA Calculation", description: "How is my GPA calculated?", path: "/faqs#gpa-calculation", category: "faq" },
  { title: "Hostel Allocation", description: "How do I get hostel accommodation?", path: "/faqs#hostel-allocation", category: "faq" },
  { title: "ID Card Time", description: "How long does it take to get my ID card?", path: "/faqs#id-card-time", category: "faq" },
];

export function GlobalSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter();
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter search results whenever query changes
  useEffect(() => {
    const trimmedQuery = query.trim();
    
    if (trimmedQuery.length < 2) {
      setResults([]);
      setShowDropdown(false);
      return;
    }

    const searchTerm = trimmedQuery.toLowerCase();
    const filtered = searchData.filter((item) => {
      return (
        item.title.toLowerCase().includes(searchTerm) ||
        item.description.toLowerCase().includes(searchTerm)
      );
    });

    setResults(filtered.slice(0, 8)); // Show max 8 results
    setShowDropdown(true); // Always show dropdown when there's a valid query
  }, [query]);

  const handleResultClick = (path: string) => {
    setQuery("");
    setResults([]);
    setShowDropdown(false);
    
    const [pathname, hash] = path.split("#");
    
    // Navigate to the page first
    router.push(path);
    
    // Enhanced scroll behavior with better timing and offset
    if (hash) {
      requestAnimationFrame(() => {
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth"
            });
            
            // Add a brief highlight effect
            element.style.transition = "background-color 0.3s ease";
            element.style.backgroundColor = "var(--accent)";
            setTimeout(() => {
              element.style.backgroundColor = "";
            }, 1000);
          }
        }, 150);
      });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleClear = () => {
    setQuery("");
    setResults([]);
    setShowDropdown(false);
  };

  const getCategoryColor = (category: SearchResult["category"]) => {
    switch (category) {
      case "task":
        return "bg-green-500/10 text-green-600 dark:text-green-400";
      case "landmark":
        return "bg-blue-500/10 text-blue-600 dark:text-blue-400";
      case "faq":
        return "bg-purple-500/10 text-purple-600 dark:text-purple-400";
    }
  };

  const getCategoryLabel = (category: SearchResult["category"]) => {
    switch (category) {
      case "task":
        return "Task";
      case "landmark":
        return "Location";
      case "faq":
        return "FAQ";
    }
  };

  return (
    <div ref={wrapperRef} className="relative w-full">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" aria-hidden="true" />
        <Input
          type="text"
          placeholder="Search for tasks, locations, or questions..."
          className="pl-12 pr-12 h-14 text-base rounded-2xl shadow-lg border-2"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search Guide16 content"
          aria-expanded={showDropdown}
          aria-controls="search-results"
          autoComplete="off"
        />
        {query && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10"
            onClick={handleClear}
            aria-label="Clear search"
            type="button"
          >
            <X className="h-5 w-5" />
          </Button>
        )}
      </div>

      {/* Search Results Dropdown */}
      {showDropdown && results.length > 0 && (
        <Card 
          id="search-results" 
          className="absolute top-full mt-2 w-full z-[100] max-h-96 overflow-y-auto shadow-2xl bg-popover"
          role="listbox"
          aria-label="Search results"
        >
          <div className="p-2">
            {results.map((result, index) => (
              <button
                key={`${result.path}-${index}`}
                onClick={() => handleResultClick(result.path)}
                className="w-full text-left p-3 rounded-lg hover:bg-accent transition-colors flex items-start gap-3"
                role="option"
                aria-selected={false}
                type="button"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-sm">{result.title}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${getCategoryColor(result.category)}`}>
                      {getCategoryLabel(result.category)}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-1">
                    {result.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </Card>
      )}

      {/* No Results Message */}
      {showDropdown && query.trim().length >= 2 && results.length === 0 && (
        <Card 
          className="absolute top-full mt-2 w-full z-[100] shadow-2xl bg-popover"
          role="status"
          aria-live="polite"
        >
          <div className="p-4 text-center text-sm text-muted-foreground">
            No results found for &quot;{query}&quot;
          </div>
        </Card>
      )}
    </div>
  );
}