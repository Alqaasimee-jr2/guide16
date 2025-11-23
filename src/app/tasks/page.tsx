"use client";

import { useState } from "react";
import { CheckCircle2, Circle, ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShareButton } from "@/components/ShareButton";

const tasks = [
  {
    id: "registration",
    title: "Course Registration",
    description: "Complete guide for registering courses each semester",
    steps: [
      "Log in to the OAU Student Portal using your matric number and password",
      "Navigate to the 'Course Registration' section from the main menu",
      "Select the current semester and academic session",
      "Review available courses for your level and department",
      "Add required courses to your registration cart (check your course form)",
      "Add elective courses if needed (ensure you meet prerequisites)",
      "Review your selected courses and total credit units",
      "Submit your course registration",
      "Print or save your course registration form for your records",
      "Visit your department for approval and signature if required",
    ],
  },
  {
    id: "induction",
    title: "Student Induction",
    description: "Steps for new students to complete induction process",
    steps: [
      "Check your email for induction schedule and venue details",
      "Gather required documents: admission letter, O'level results, birth certificate",
      "Arrive at the specified venue 30 minutes before start time",
      "Register at the attendance desk with your admission number",
      "Attend orientation sessions on university rules and regulations",
      "Learn about available student services and facilities",
      "Receive your temporary student ID card",
      "Complete department-specific induction at your faculty",
      "Set up your student email account (if not already done)",
      "Join official student communication channels",
    ],
  },
  {
    id: "clearance",
    title: "Clearance Process",
    description: "How to complete end-of-session or graduation clearance",
    steps: [
      "Log in to the student portal to check clearance status",
      "Ensure all fees are paid (check Bursary department)",
      "Return all borrowed library books and clear library dues",
      "Clear any outstanding departmental obligations",
      "Visit the Health Centre to confirm no pending medical issues",
      "Get clearance from your Hall of Residence (if applicable)",
      "Obtain clearance from the Sports Council (if applicable)",
      "Visit the Dean of Student Affairs office for final clearance",
      "Submit all clearance forms to the Registry",
      "Collect your clearance certificate and verify all details",
    ],
  },
  {
    id: "id-card",
    title: "Student ID Card Collection",
    description: "Process for obtaining your official OAU student ID card",
    steps: [
      "Complete your biometric data capture at the ICT Centre",
      "Pay the ID card fee at the Bursary or via bank payment",
      "Submit your payment receipt to the ID card unit",
      "Provide two recent passport photographs (white background)",
      "Wait 2-3 weeks for processing (check notice boards for updates)",
      "Monitor the ID card collection schedule on the student portal",
      "Bring your payment receipt and admission letter to collect the card",
      "Verify all personal details on the ID card before leaving",
      "Sign the ID card immediately upon collection",
      "Keep your ID card safe - report loss immediately if it happens",
    ],
  },
  {
    id: "hostel",
    title: "Hostel Accommodation",
    description: "Steps to apply for on-campus accommodation",
    steps: [
      "Log in to the student portal during hostel allocation period",
      "Navigate to the 'Accommodation' or 'Hostel Allocation' section",
      "Check eligibility requirements (level, gender, etc.)",
      "Fill in the hostel application form with accurate details",
      "Select your preferred halls of residence (in order of priority)",
      "Pay the hostel accommodation fee via the designated payment method",
      "Upload payment evidence to the portal",
      "Submit your application and print confirmation slip",
      "Check portal regularly for allocation results",
      "If allocated, pay acceptance fee and collect hostel key from porter",
    ],
  },
  {
    id: "exam",
    title: "Exam Registration",
    description: "How to register for semester examinations",
    steps: [
      "Ensure your course registration is approved and up-to-date",
      "Pay all required fees before the exam registration deadline",
      "Log in to the student portal during exam registration period",
      "Navigate to the 'Exam Registration' section",
      "Review the list of courses you're registered for",
      "Confirm your exam registration for each course",
      "Print your exam schedule and venue allocation",
      "Note important exam dates and times for all courses",
      "Prepare your student ID card (required for exam entry)",
      "Arrive at exam venues 30 minutes before start time",
    ],
  },
];

export default function TasksPage() {
  const [expandedTask, setExpandedTask] = useState<string | null>(null);
  const [checkedSteps, setCheckedSteps] = useState<Record<string, Set<number>>>({});

  const toggleTask = (taskId: string) => {
    setExpandedTask(expandedTask === taskId ? null : taskId);
  };

  const toggleStep = (taskId: string, stepIndex: number) => {
    setCheckedSteps((prev) => {
      const taskSteps = prev[taskId] || new Set();
      const newSet = new Set(taskSteps);
      
      if (newSet.has(stepIndex)) {
        newSet.delete(stepIndex);
      } else {
        newSet.add(stepIndex);
      }
      
      return { ...prev, [taskId]: newSet };
    });
  };

  const getProgress = (taskId: string) => {
    const task = tasks.find((t) => t.id === taskId);
    if (!task) return 0;
    
    const checked = checkedSteps[taskId]?.size || 0;
    return (checked / task.steps.length) * 100;
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold">Campus Tasks</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Follow these step-by-step guides to complete important university processes. 
            Check off steps as you complete them!
          </p>
          <div className="flex justify-center pt-2">
            <ShareButton
              title="Guide16 Campus Tasks"
              text="Check out these step-by-step guides for OAU campus tasks!"
              variant="outline"
              size="sm"
            />
          </div>
        </div>

        {/* Task Cards */}
        <div className="space-y-4">
          {tasks.map((task) => {
            const isExpanded = expandedTask === task.id;
            const progress = getProgress(task.id);
            const completedSteps = checkedSteps[task.id]?.size || 0;

            return (
              <Card key={task.id} id={task.id} className="overflow-hidden">
                <CardHeader
                  className="cursor-pointer hover:bg-accent/50 transition-colors"
                  onClick={() => toggleTask(task.id)}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <CardTitle className="text-2xl">{task.title}</CardTitle>
                        <ShareButton
                          title={task.title}
                          text={`${task.title} - ${task.description}`}
                          url={typeof window !== "undefined" ? `${window.location.origin}/tasks#${task.id}` : undefined}
                          variant="ghost"
                          size="sm"
                          className="shrink-0"
                        />
                      </div>
                      <CardDescription className="text-base">
                        {task.description}
                      </CardDescription>
                      {progress > 0 && (
                        <div className="mt-3 space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">
                              {completedSteps} of {task.steps.length} completed
                            </span>
                            <span className="text-primary font-medium">
                              {Math.round(progress)}%
                            </span>
                          </div>
                          <div className="w-full bg-secondary rounded-full h-2">
                            <div
                              className="bg-primary rounded-full h-2 transition-all duration-300"
                              style={{ width: `${progress}%` }}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                    <Button variant="ghost" size="icon" className="shrink-0">
                      {isExpanded ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </Button>
                  </div>
                </CardHeader>

                {isExpanded && (
                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      {task.steps.map((step, index) => {
                        const isChecked = checkedSteps[task.id]?.has(index);
                        
                        return (
                          <div
                            key={index}
                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors cursor-pointer group"
                            onClick={() => toggleStep(task.id, index)}
                          >
                            <div className="shrink-0 mt-0.5">
                              {isChecked ? (
                                <CheckCircle2 className="h-5 w-5 text-primary" />
                              ) : (
                                <Circle className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                              )}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-start gap-2">
                                <span className="text-sm font-medium text-muted-foreground shrink-0">
                                  {index + 1}.
                                </span>
                                <span
                                  className={`text-sm leading-relaxed ${
                                    isChecked
                                      ? "text-muted-foreground line-through"
                                      : "text-foreground"
                                  }`}
                                >
                                  {step}
                                </span>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                )}
              </Card>
            );
          })}
        </div>

        {/* Help Section */}
        <Card className="mt-8 bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="text-lg">Need More Help?</CardTitle>
            <CardDescription>
              If you encounter any issues or need additional guidance, visit the Student Affairs office 
              or check the <span className="text-primary font-medium">FAQs page</span> for more information.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}