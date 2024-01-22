import Hero from "@/components/Hero"
import BlogSection from '@/components/BlogSection'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col mt-8">
      <Hero />
      <BlogSection />
    </main>
  )
}
