'use client'
import Image from "next/image";


async function getData() {
  const res = await fetch("http://localhost:3333/attractions");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
 
export default async function Page() {
  const data = await getData()
 
  return <main>
    <h1>Attractions</h1>
    <ul>
      {data.map((attraction) => (
        <li key={attraction.id}>
          <h2>{attraction.name}</h2>

          <Image
            src={attraction.coverimage}
            alt={attraction.name}
            width={500}
            height={500}
          />
          <p>{attraction.description}</p>
        </li>
      ))}
    </ul>
  </main>
}