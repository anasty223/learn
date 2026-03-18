import { Button } from "@/components/ui/button";

export default function SignUp() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-1">
        {/* hero-section */}
        <section className="container mx-auto px-4 py-32">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-black mb-6 text-6xl font-bold"> Sign Up for Next.js!</h1>
            <p className="text-muted-foreground mb-10 text-xl ">Join us and start capturing, sharing, and publishing your ideas with ease.</p>
            <div className="flex flex-col items-center gap-4">
              <Button size="lg" className="h-12 px-8 text-lg font-medium">Sign Up Now</Button>
              <p className="text-sm text-muted-foreground">Free forever.No credit card required.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}