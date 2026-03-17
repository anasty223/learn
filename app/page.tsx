import Image from "next/image";

export default function Home() {
  return (
<div className="flex flex-col min-h-screen bg-white">
  <main className="flex-1">
    {/* hero-section */}
    <section className="container mx-auto px-4 py-32">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-black"> Welcome to Next.js!</h1>
        <p className="text-muted-foreground">Capture, share, and publish your ideas with ease.</p>
        <div>
          <button>Start for free</button>
          <p>Free forever.No credit card required.</p>
        </div>
      </div>
    </section>
  </main>
</div>
  );
}
