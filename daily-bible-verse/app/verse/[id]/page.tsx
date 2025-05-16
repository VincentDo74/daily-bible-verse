import { getVerseById } from "@/lib/bible-verses"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CalendarDays, Share2 } from "lucide-react"
import { notFound } from "next/navigation"

export async function generateMetadata({ params }: { params: { id: string } }) {
  const verse = await getVerseById(params.id)

  if (!verse) {
    return {
      title: "Verse Not Found | Daily Bible Verse",
      description: "The requested Bible verse could not be found",
    }
  }

  return {
    title: `${verse.reference} | Daily Bible Verse`,
    description: verse.text,
  }
}

export default async function VersePage({ params }: { params: { id: string } }) {
  const verse = await getVerseById(params.id)

  if (!verse) {
    notFound()
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-3xl w-full">
        <Link href="/" className="text-primary hover:underline mb-6 inline-block">
          &larr; Back to today's verse
        </Link>

        <Card className="w-full shadow-lg">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl md:text-3xl">{verse.reference}</CardTitle>
              <div className="flex items-center text-sm text-gray-500">
                <CalendarDays className="h-4 w-4 mr-1" />
                <span>{verse.date}</span>
              </div>
            </div>
            <CardDescription>Bible Verse</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-xl md:text-2xl italic leading-relaxed mb-6">"{verse.text}"</p>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h2 className="font-medium mb-2">Reflection</h2>
              <p className="text-gray-700">
                Take a moment to reflect on this verse. How does it speak to your life today? What might God be saying
                to you through these words?
              </p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" asChild>
              <Link href="/archive">View Archive</Link>
            </Button>
            <Button variant="secondary">
              <Share2 className="h-4 w-4 mr-2" />
              Share Verse
            </Button>
          </CardFooter>
        </Card>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Prayer for Today</h2>
          <p className="text-gray-700">
            Dear Lord, thank you for your Word that guides and comforts us. Help us to meditate on this verse throughout
            the day and apply its wisdom to our lives. May we grow closer to you through the study of your Scripture.
            Amen.
          </p>
        </div>
      </div>
    </main>
  )
}
