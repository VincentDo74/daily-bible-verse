import { unstable_cache } from "next/cache"

// Type definitions
type Verse = {
  verse: string
  reference: string
  text: string
  date: string
}

// Sample verses database
// In a production app, you might want to use a larger dataset or an API
const verses = [
  {
    verse: "john-3-16",
    reference: "John 3:16",
    text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
  },
  {
    verse: "psalm-23-1",
    reference: "Psalm 23:1",
    text: "The Lord is my shepherd, I lack nothing.",
  },
  {
    verse: "proverbs-3-5-6",
    reference: "Proverbs 3:5-6",
    text: "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
  },
  {
    verse: "philippians-4-13",
    reference: "Philippians 4:13",
    text: "I can do all this through him who gives me strength.",
  },
  {
    verse: "romans-8-28",
    reference: "Romans 8:28",
    text: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.",
  },
  {
    verse: "jeremiah-29-11",
    reference: "Jeremiah 29:11",
    text: 'For I know the plans I have for you," declares the Lord, "plans to prosper you and not to harm you, plans to give you hope and a future.',
  },
  {
    verse: "matthew-11-28",
    reference: "Matthew 11:28",
    text: "Come to me, all you who are weary and burdened, and I will give you rest.",
  },
  {
    verse: "isaiah-40-31",
    reference: "Isaiah 40:31",
    text: "But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.",
  },
  {
    verse: "psalm-119-105",
    reference: "Psalm 119:105",
    text: "Your word is a lamp for my feet, a light on my path.",
  },
  {
    verse: "romans-12-2",
    reference: "Romans 12:2",
    text: "Do not conform to the pattern of this world, but be transformed by the renewing of your mind. Then you will be able to test and approve what God's will is—his good, pleasing and perfect will.",
  },
  {
    verse: "genesis-1-1",
    reference: "Genesis 1:1",
    text: "In the beginning God created the heavens and the earth.",
  },
  {
    verse: "2-corinthians-5-17",
    reference: "2 Corinthians 5:17",
    text: "Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!",
  },
  {
    verse: "matthew-28-19-20",
    reference: "Matthew 28:19-20",
    text: "Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, and teaching them to obey everything I have commanded you. And surely I am with you always, to the very end of the age.",
  },
  {
    verse: "psalm-46-1",
    reference: "Psalm 46:1",
    text: "God is our refuge and strength, an ever-present help in trouble.",
  },
  {
    verse: "galatians-5-22-23",
    reference: "Galatians 5:22-23",
    text: "But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control. Against such things there is no law.",
  },
  {
    verse: "hebrews-11-1",
    reference: "Hebrews 11:1",
    text: "Now faith is confidence in what we hope for and assurance about what we do not see.",
  },
  {
    verse: "1-john-4-19",
    reference: "1 John 4:19",
    text: "We love because he first loved us.",
  },
  {
    verse: "joshua-1-9",
    reference: "Joshua 1:9",
    text: "Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.",
  },
  {
    verse: "romans-5-8",
    reference: "Romans 5:8",
    text: "But God demonstrates his own love for us in this: While we were still sinners, Christ died for us.",
  },
  {
    verse: "psalm-19-14",
    reference: "Psalm 19:14",
    text: "May these words of my mouth and this meditation of my heart be pleasing in your sight, Lord, my Rock and my Redeemer.",
  },
  {
    verse: "ephesians-2-8-9",
    reference: "Ephesians 2:8-9",
    text: "For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God—not by works, so that no one can boast.",
  },
  {
    verse: "colossians-3-23",
    reference: "Colossians 3:23",
    text: "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters.",
  },
  {
    verse: "1-peter-5-7",
    reference: "1 Peter 5:7",
    text: "Cast all your anxiety on him because he cares for you.",
  },
  {
    verse: "psalm-37-4",
    reference: "Psalm 37:4",
    text: "Take delight in the Lord, and he will give you the desires of your heart.",
  },
  {
    verse: "2-timothy-1-7",
    reference: "2 Timothy 1:7",
    text: "For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline.",
  },
  {
    verse: "isaiah-41-10",
    reference: "Isaiah 41:10",
    text: "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.",
  },
  {
    verse: "matthew-6-33",
    reference: "Matthew 6:33",
    text: "But seek first his kingdom and his righteousness, and all these things will be given to you as well.",
  },
  {
    verse: "psalm-139-14",
    reference: "Psalm 139:14",
    text: "I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well.",
  },
  {
    verse: "1-corinthians-13-4-7",
    reference: "1 Corinthians 13:4-7",
    text: "Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It does not dishonor others, it is not self-seeking, it is not easily angered, it keeps no record of wrongs. Love does not delight in evil but rejoices with the truth. It always protects, always trusts, always hopes, always perseveres.",
  },
  {
    verse: "james-1-5",
    reference: "James 1:5",
    text: "If any of you lacks wisdom, you should ask God, who gives generously to all without finding fault, and it will be given to you.",
  },
]

// Function to get the verse of the day based on the current date
// This is wrapped in unstable_cache to ensure it only recomputes once per day
export const getDailyVerse = unstable_cache(
  async (): Promise<Verse> => {
    // Get current date in YYYY-MM-DD format to use as cache key
    const today = new Date()
    const dateString = today.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    })

    // Use the day of the year to select a verse
    const start = new Date(today.getFullYear(), 0, 0)
    const diff = today.getTime() - start.getTime()
    const oneDay = 1000 * 60 * 60 * 24
    const dayOfYear = Math.floor(diff / oneDay)

    // Select verse based on day of year (cycling through the available verses)
    const verseIndex = dayOfYear % verses.length
    const dailyVerse = verses[verseIndex]

    return {
      ...dailyVerse,
      date: dateString,
    }
  },
  ["daily-verse"],
  {
    revalidate: 86400, // Revalidate once per day (in seconds)
  },
)

// Function to get all verses (for the archive page)
export async function getAllVerses(): Promise<Verse[]> {
  const today = new Date()

  return verses.map((verse, index) => {
    // Create a date for each verse (for demonstration purposes)
    const verseDate = new Date()
    verseDate.setDate(today.getDate() - index)

    return {
      ...verse,
      date: verseDate.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
    }
  })
}

// Function to get a specific verse by its ID
export async function getVerseById(id: string): Promise<Verse | null> {
  const verse = verses.find((v) => v.verse === id)

  if (!verse) return null

  return {
    ...verse,
    date: new Date().toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }),
  }
}
