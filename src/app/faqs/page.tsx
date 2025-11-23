"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useState } from "react";
import { BackToTop } from "@/components/BackToTop";
import { ShareButton } from "@/components/ShareButton";

const faqs = [
  {
    id: "portal-login",
    category: "Portal & Registration",
    question: "How do I access the student portal?",
    answer: "Visit the OAU student portal website and log in using your matric number as username and the password provided during admission. If you've forgotten your password, use the 'Forgot Password' link or contact the ICT Centre for assistance.",
  },
  {
    id: "course-registration-deadline",
    category: "Portal & Registration",
    question: "When is the deadline for course registration?",
    answer: "Course registration deadlines are typically 2-3 weeks after the semester begins. The exact date is announced on the student portal and department notice boards. Late registration may attract penalties, so register as soon as possible.",
  },
  {
    id: "change-courses",
    category: "Portal & Registration",
    question: "Can I change my courses after registration?",
    answer: "Yes, you can add or drop courses within the first two weeks of the semester (add/drop period). After this period, changes require departmental approval and may only be allowed in exceptional circumstances.",
  },
  {
    id: "credit-units",
    category: "Academic",
    question: "How many credit units should I register?",
    answer: "The recommended credit unit range is 15-24 units per semester. First-year students typically register 18-21 units. Check with your department for specific requirements. Registering outside this range requires special permission.",
  },
  {
    id: "gpa-calculation",
    category: "Academic",
    question: "How is my GPA calculated?",
    answer: "Your GPA is calculated by dividing your total grade points by total credit units. A=5 points, B=4, C=3, D=2, E=1, F=0. For example: 3 credit A (15 points) + 2 credit B (8 points) = 23 points ÷ 5 units = 4.6 GPA.",
  },
  {
    id: "hostel-allocation",
    category: "Accommodation",
    question: "How do I get hostel accommodation?",
    answer: "Apply through the student portal during the allocation period (usually announced at the start of each session). Payment of accommodation fees is required. Allocation is based on availability and level (final year students get priority).",
  },
  {
    id: "off-campus",
    category: "Accommodation",
    question: "Can I live off-campus?",
    answer: "Yes, many students live in private accommodations around campus (Asherifa, Angola, etc.). Ensure you register your off-campus address with the Dean of Student Affairs office for security purposes and correspondence.",
  },
  {
    id: "payment-methods",
    category: "Fees & Payments",
    question: "What are the accepted payment methods?",
    answer: "School fees can be paid via Remita platform using ATM cards, bank transfers, or direct bank payments. After payment, upload your receipt to the student portal for verification. Keep copies of all payment receipts.",
  },
  {
    id: "payment-receipt",
    category: "Fees & Payments",
    question: "I lost my payment receipt. What should I do?",
    answer: "Visit the Bursary department with your bank statement or transaction details. They can verify your payment and issue a duplicate receipt. This may take a few days, so keep digital copies of all receipts to avoid this issue.",
  },
  {
    id: "id-card-time",
    category: "Student ID",
    question: "How long does it take to get my ID card?",
    answer: "After biometric capture and payment, ID cards typically take 2-4 weeks to process. Check notice boards and the portal for collection announcements. The ID card is essential for exams, library access, and campus identification.",
  },
  {
    id: "lost-id-card",
    category: "Student ID",
    question: "What if I lose my ID card?",
    answer: "Report the loss immediately to the Security Unit and ID Card office. You'll need to obtain a police report, pay a replacement fee, and go through the biometric process again. Temporary IDs may be issued for urgent needs like exams.",
  },
  {
    id: "library-hours",
    category: "Facilities",
    question: "What are the library opening hours?",
    answer: "Hezekiah Oluwasanmi Library is typically open Monday-Friday: 8am-10pm, Saturday: 9am-6pm, and Sunday: 2pm-8pm. Hours may be extended during exam periods. Your student ID is required for entry.",
  },
  {
    id: "library-borrow",
    category: "Facilities",
    question: "How many books can I borrow from the library?",
    answer: "Undergraduate students can typically borrow up to 4 books at a time for 2 weeks. Reference books must be used within the library. Late returns attract fines. Check the library website or ask staff for current borrowing policies.",
  },
  {
    id: "health-services",
    category: "Health & Welfare",
    question: "What health services are available on campus?",
    answer: "The University Health Centre provides consultations, treatments, emergency care, health screening, and pharmacy services. Services are often subsidized for students. Bring your ID card for access. Open 24/7 for emergencies.",
  },
  {
    id: "mental-health",
    category: "Health & Welfare",
    question: "Is there support for mental health?",
    answer: "Yes, the Counseling Unit in the Student Affairs office provides free counseling services for academic stress, personal issues, and mental health concerns. All sessions are confidential. Don't hesitate to seek help when needed.",
  },
  {
    id: "exam-regulations",
    category: "Examinations",
    question: "What items am I allowed to bring to exams?",
    answer: "Only bring your student ID, pens, pencils, rulers, and erasers. Approved calculators may be allowed for specific exams. Phones, smart watches, bags, and unauthorized materials are prohibited. Violations can result in exam malpractice charges.",
  },
  {
    id: "missed-exam",
    category: "Examinations",
    question: "What happens if I miss an exam?",
    answer: "Missing an exam without valid medical or emergency reasons typically results in a fail grade. If you have a valid reason (medical emergency, accident), obtain documentation immediately and apply for a special exam through your department within 48 hours.",
  },
  {
    id: "carryover",
    category: "Academic",
    question: "How do I register for carryover courses?",
    answer: "Carryover courses (failed courses) must be registered alongside your regular courses in the appropriate semester. There's usually a special registration period. Consult your department for the schedule and ensure you don't exceed maximum credit units.",
  },
  {
    id: "transcript",
    category: "Academic Records",
    question: "How do I request a transcript?",
    answer: "Apply at the Registry with a formal application, pay the transcript fee at the Bursary, and submit payment evidence. Processing takes 2-4 weeks for regular requests. Express service is available for an additional fee. Ensure you've completed clearance first.",
  },
  {
    id: "internet-access",
    category: "Facilities",
    question: "How can I access campus internet?",
    answer: "OAU provides WiFi across campus. Connect to the OAU network using your student portal credentials. Internet is available in lecture halls, library, and most public spaces. The ICT Centre can help with connection issues.",
  },
];

const categories = ["All", ...Array.from(new Set(faqs.map((faq) => faq.category)))];

export default function FAQsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredFaqs = faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center space-y-4 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold">Frequently Asked Questions</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Quick answers to common questions about student life at OAU
          </p>
          <div className="flex justify-center pt-2">
            <ShareButton
              title="Guide16 FAQs"
              text="Check out these helpful answers to common OAU student questions!"
              variant="outline"
              size="sm"
            />
          </div>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-2xl mx-auto mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" aria-hidden="true" />
            <Input
              type="search"
              placeholder="Search questions..."
              className="pl-12 h-12 text-base"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search FAQs"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center" role="group" aria-label="Filter by category">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                className="rounded-full"
                aria-pressed={selectedCategory === category}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="text-center mb-6">
          <p className="text-sm text-muted-foreground" role="status" aria-live="polite">
            Showing {filteredFaqs.length} question{filteredFaqs.length !== 1 ? "s" : ""}
          </p>
        </div>

        {/* FAQ Accordion */}
        {filteredFaqs.length > 0 ? (
          <Accordion type="single" collapsible className="space-y-4">
            {filteredFaqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                id={faq.id}
                className="border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="hover:no-underline py-4" aria-controls={`faq-${faq.id}-content`}>
                  <div className="text-left">
                    <div className="text-base font-semibold">{faq.question}</div>
                    <div className="text-xs text-muted-foreground mt-1">{faq.category}</div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground pb-4" id={`faq-${faq.id}-content`}>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        ) : (
          <div className="text-center py-12" role="status">
            <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" aria-hidden="true" />
            <h3 className="text-lg font-semibold mb-2">No questions found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}

        {/* Contact Card */}
        <Card className="mt-8 bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="text-lg">Still have questions?</CardTitle>
            <CardDescription>
              If you can't find the answer you're looking for, visit the Student Affairs office,
              check your department notice board, or consult your course adviser. You can also
              check the official OAU website for more information.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
      
      <BackToTop />
    </div>
  );
}