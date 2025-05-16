import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export const metadata = {
  title: "About | Daily Bible Verse",
  description: "Learn about the Daily Bible Verse website",
}

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-3xl w-full py-8">
        <Link href="/" className="text-primary hover:underline mb-6 inline-block">
          &larr; Back to today's verse
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">About Daily Bible Verse</h1>

        <Card className="w-full shadow-md mb-8">
          <CardHeader>
            <CardTitle>Our Mission</CardTitle>
            <CardDescription>Sharing God's word daily</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Daily Bible Verse was created to provide a moment of spiritual reflection in our busy lives. Each day, we
              share a new verse from the Bible to inspire, comfort, and guide.
            </p>
            <p>
              Our hope is that these daily verses will help you connect with God's word and apply its timeless wisdom to
              your everyday life.
            </p>
          </CardContent>
        </Card>

        <Card className="w-full shadow-md mb-8">
          <CardHeader>
            <CardTitle>How It Works</CardTitle>
            <CardDescription>A new verse every day</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Our website automatically updates with a new Bible verse at midnight each day. The verses are carefully
              selected from throughout the Bible to provide a variety of teachings, encouragements, and promises.
            </p>
            <p>
              You can also browse our{" "}
              <Link href="/archive" className="text-primary hover:underline">
                archive
              </Link>{" "}
              to see previous daily verses.
            </p>
          </CardContent>
        </Card>

        <Card className="w-full shadow-md">
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
            <CardDescription>We'd love to hear from you</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              If you have any questions, suggestions, or prayer requests, please don't hesitate to reach out to us.
            </p>
            <p className="mb-2">
              <strong>Email:</strong> contact@dailybibleverse.example.com
            </p>
            <p>
              <strong>Follow us:</strong> @DailyBibleVerse
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
