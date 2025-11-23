import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, Zap, Shield } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            Built by students, for students
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">About Guide16</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your lightweight campus companion for navigating OAU with confidence
          </p>
        </div>

        {/* Mission Statement */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Our Mission</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              Guide16 was created to solve a simple problem: navigating university life shouldn't be complicated. 
              We noticed that many students, especially freshers, struggled to find clear information about 
              important processes, locate key campus buildings, or get quick answers to common questions.
            </p>
            <p>
              This app brings together essential information in one place — no login required, no ads, 
              no data collection. Just straightforward guides to help you focus on what matters: your education 
              and campus experience.
            </p>
          </CardContent>
        </Card>

        {/* Features Grid */}
        <div className="grid gap-6 md:grid-cols-2 mb-8">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10 text-green-600 dark:text-green-400">
                  <Zap className="h-5 w-5" />
                </div>
                <CardTitle>Fast & Simple</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>
                No unnecessary features or complicated interfaces. Get the information you need instantly 
                without logins or registrations.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
                  <Shield className="h-5 w-5" />
                </div>
                <CardTitle>Privacy First</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>
                We don't collect, store, or sell your data. No tracking, no cookies, no analytics. 
                Your privacy is completely protected.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400">
                  <Heart className="h-5 w-5" />
                </div>
                <CardTitle>Made with Care</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Every guide and feature was carefully crafted based on real student experiences 
                and feedback from the OAU community.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/10 text-orange-600 dark:text-orange-400">
                  <Users className="h-5 w-5" />
                </div>
                <CardTitle>Community Driven</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Guide16 is continually improved based on student feedback. We're all in this together, 
                helping each other succeed.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* What's Included */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">What's Included</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary text-sm font-medium">
                ✓
              </div>
              <div>
                <div className="font-medium">Step-by-Step Task Guides</div>
                <div className="text-sm text-muted-foreground">
                  Clear instructions for registration, clearance, ID cards, and more
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary text-sm font-medium">
                ✓
              </div>
              <div>
                <div className="font-medium">Campus Location Directory</div>
                <div className="text-sm text-muted-foreground">
                  Find any building or office with instant Google Maps directions
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary text-sm font-medium">
                ✓
              </div>
              <div>
                <div className="font-medium">Comprehensive FAQ Section</div>
                <div className="text-sm text-muted-foreground">
                  Answers to common questions about student life, fees, exams, and facilities
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary text-sm font-medium">
                ✓
              </div>
              <div>
                <div className="font-medium">Offline Access</div>
                <div className="text-sm text-muted-foreground">
                  Once loaded, the app works without internet connection
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary text-sm font-medium">
                ✓
              </div>
              <div>
                <div className="font-medium">Dark Mode Support</div>
                <div className="text-sm text-muted-foreground">
                  Easy on the eyes whether you're studying day or night
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Credits */}
        <Card className="bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl">Credits & Contact</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              <strong>Guide16</strong> is an independent student initiative created to support 
              the OAU community. This project is not officially affiliated with Obafemi Awolowo University, 
              but we work to ensure all information is accurate and helpful.
            </p>
            <p>
              Special thanks to all the students who provided feedback, suggestions, and real-world 
              experiences that shaped this app into what it is today.
            </p>
            <div className="pt-4 border-t border-border">
              <p className="text-sm">
                <strong>Version:</strong> 1.0.0 <br />
                <strong>Last Updated:</strong> {new Date().getFullYear()} <br />
                <strong>Made with:</strong> ❤️ and lots of coffee
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Disclaimer */}
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>
            Information provided is accurate to the best of our knowledge but may change. 
            Always verify important details with official university sources.
          </p>
        </div>
      </div>
    </div>
  );
}