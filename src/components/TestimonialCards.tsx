'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonials = [
  {
    "quote": "Enrolling in this music school completely changed how I experience and create music. I finally found my unique sound, thanks to the amazing instructors!",
    "name": "Arjun Mehra",
    "title": "Guitar Student"
  },
  {
    "quote": "The support and sense of community here are incredible. I've developed both as a pianist and as a confident performer through their holistic teaching style.",
    "name": "Ananya Iyer",
    "title": "Piano Student"
  },
  {
    "quote": "This school gave me the skills and encouragement I needed to elevate my singing. The one-on-one coaching made a world of difference.",
    "name": "Rohan Sharma",
    "title": "Vocal Student"
  },
  {
    "quote": "Finding the right violin teacher isn’t easy, but this school paired me with someone who truly gets my musical aspirations and challenges.",
    "name": "Meera Nair",
    "title": "Violin Student"
  },
  {
    "quote": "The production courses here completely expanded my understanding of music creation. A must for anyone serious about becoming a producer!",
    "name": "Kabir Desai",
    "title": "Music Production Student"
  }
];


function MusicSchoolTestimonials() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear our Harmony: Voices of success</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
            <InfiniteMovingCards
                items={musicSchoolTestimonials}
                direction="right"
                speed="slow"
      />
            </div>
        </div>
    </div>
  )
}

export default MusicSchoolTestimonials