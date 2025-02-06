import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-green-50/50 flex items-center justify-center">
      {/* background gradient */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-size-[6rem_4rem]" />

      <section className="w-full px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8 flex flex-col items-center space-y-10 text-center">
        <header className="space-y-6">
          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            AI Agent Assistant
          </h1>
          <p className="max-w-[600px] text-lg text-gray-600 md:text-xl/relaxed xl:text-2xl/relaxed">
            Meet your new AI chat companion that goes beyond conversation - it
            can do anything you can imagine!
            <br />
            <span className="text-gray-400 text-sm">
              Powered by IBM&apos;s Watson Assistant and your favorite LLM&apos;s
            </span>
          </p>
        </header>

        <SignedIn>
          <Link href={"/dashboard"}>
            <button className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full  hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Get Started
              <ArrowRight className='m;-2 h-5 w-5 transition-transform group-hover:translate-x-0.5' />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 opacity-0 blur-xl group-hover:opacity-100 transition-opacity" />
            </button>
          </Link>
        </SignedIn>

        <SignedOut>
          <SignInButton
            mode="modal"
            fallbackRedirectUrl={"/dashboard"}
            forceRedirectUrl={"/dashboard"}
          >
            <button className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full  hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Sign Up
              <ArrowRight className='m;-2 h-5 w-5 transition-transform group-hover:translate-x-0.5' />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 opacity-0 blur-xl group-hover:opacity-100 transition-opacity" />
            </button>
          </SignInButton>
        </SignedOut>

        {/* feature grid  */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-16 pt-8 max-w-3xl mx-auto">
            {[
              {title: "Chat", description: "Chat with your AI companion", icon: "💬"},
              {title: "Code", description: "Code with your AI companion", icon: "💻"},
              {title: "Write", description: "Write with your AI companion", icon: "✍️"},
            ].map(({title, description, icon}) => (
              <div className="text-center" key={title}>
                <div className="text-2xl font-semibold text-gray-900">
                    {icon} {title}
                </div>
                <div className="text-sm text-gray-600 mt-1">{description}</div>
              </div>
            ))}
        </div>


      </section>
    </main>
  );
}
