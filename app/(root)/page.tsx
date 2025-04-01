import Image from "next/image";
import SearchForm from "../../components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({searchParams} : {searchParams: Promise<{query?: string}>}) {
  const query =  (await searchParams).query;

  const posts = [{
    _id: '12sre',
    _createdAt: 'Yesterday',
    views: 45,
    author: { _id: 1, name: 'Artur'},
    description: 'This will be text',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8OQE71A60A15fN_0wclQbLs913XAC2WA6Bg&s',
    category: 'IT',
    title: "We are IT"
  }]

  return (
    <>
      <section className="pink_container pattern">
        <h1 className="heading">It's my home <br/> You are Freedom</h1>

        <p className="sub-heading !max-w-3xl">Submit ideas, Vote on Pitches, and Get Noticed in Virtual Competitions</p>

        <SearchForm query={query}/>
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for ${query}`: 'All courses'}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: any, index: number) => (
              <StartupCard key={post?._id} post={post}/>
            )) 
          ) : (
            <p className="no-results">No courses found</p>
          )
          }
        </ul>
      </section>
    </>
  );
}
