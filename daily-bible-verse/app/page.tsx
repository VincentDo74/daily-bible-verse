import { Suspense } from "react"
import { getDailyVerse } from "@/lib/bible-verses"
import { CalendarDays } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-3xl w-full">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Daily Bible Verse</h1>

        <Suspense fallback={<VerseCardSkeleton />}>
          <DailyVerseCard />
        </Suspense>

        <footer className="mt-12 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Daily Bible Verse</p>
          <div className="flex justify-center gap-4 mt-2">
            <Link href="/about" className="hover:underline">
              About
            </Link>
            <Link href="/archive" className="hover:underline">
              Verse Archive
            </Link>
          </div>
        </footer>
      </div>
    </main>
  )
}

async function DailyVerseCard() {
  const { verse, reference, text, date } = await getDailyVerse()

  return (
    <Card className="w-full shadow-lg">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl md:text-2xl">{reference}</CardTitle>
          <div className="flex items-center text-sm text-gray-500">
            <CalendarDays className="h-4 w-4 mr-1" />
            <span>{date}</span>
          </div>
        </div>
        <CardDescription>Today's Verse</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-lg md:text-xl italic leading-relaxed">"{text}"</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" asChild>
          <Link href="/archive">Previous Verses</Link>
        </Button>
        <Button asChild>
          <Link href={`/verse/${verse}`}>Read More</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

function VerseCardSkeleton() {
  return (
    <Card className="w-full shadow-lg">
      <CardHeader>
        <div className="h-7 w-1/3 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-5 w-1/4 bg-gray-200 rounded animate-pulse mt-2"></div>
      </CardHeader>
      <CardContent>
        <div className="h-24 bg-gray-200 rounded animate-pulse"></div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="h-10 w-32 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-10 w-24 bg-gray-200 rounded animate-pulse"></div>
      </CardFooter>
    </Card>
  )
}
