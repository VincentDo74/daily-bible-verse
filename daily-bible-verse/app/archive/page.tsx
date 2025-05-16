import { getAllVerses } from "@/lib/bible-verses"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { CalendarDays } from "lucide-react"

export const metadata = {
  title: "Verse Archive | Daily Bible Verse",
  description: "Browse our archive of daily Bible verses",
}

export default async function ArchivePage() {
  const verses = await getAllVerses()

  return (
    <main className="flex min-h-screen flex-col items-center p-4 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-4xl w-full py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">Verse Archive</h1>
        <p className="text-center text-gray-500 mb-8">Browse our collection of daily Bible verses</p>

        <Link href="/" className="text-primary hover:underline mb-6 inline-block">
          &larr; Back to today's verse
        </Link>

        <div className="grid gap-4 mt-4">
          {verses.map((verse) => (
            <Card key={verse.verse} className="w-full">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">
                    <Link href={`/verse/${verse.verse}`} className="hover:text-primary transition-colors">
                      {verse.reference}
                    </Link>
                  </CardTitle>
                  <div className="flex items-center text-sm text-gray-500">
                    <CalendarDays className="h-4 w-4 mr-1" />
                    <span>{verse.date}</span>
                  </div>
                </div>
                <CardDescription>Daily Verse</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="italic">"{verse.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
