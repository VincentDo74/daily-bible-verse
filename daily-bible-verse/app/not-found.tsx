import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-md text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          "The Lord is my shepherd; I shall not want." - Psalm 23:1
          <br />
          <br />
          The page you're looking for doesn't exist, but God's word is always here to guide you.
        </p>
        <Button asChild>
          <Link href="/">Return to Today's Verse</Link>
        </Button>
      </div>
    </main>
  )
}
