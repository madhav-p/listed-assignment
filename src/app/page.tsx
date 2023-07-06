import Image from 'next/image'

export default function Home() {
  return (
    <article className='grid min-h-screen grid-rows-[max-content_1fr_max-content]'>
      <header className='flex bg-black  text-white p-4'>
        <h3 className='max-w-lg mx-auto text-2xl font-semibold '>
          Board App
        </h3>
      </header>
      <main className='max-w-2xl p-8 m-auto grid items-center gap-8 text-center'>
        <h1 className='text-2xl font-bold'>
          Board app
        </h1>
        <p>
          This is a demo NextJS application built to demonstrate dashboard UI. <br></br>
          This site is hosted on Vercel, and source code available {" "}
          <a className='underline' href='https://github.com/madhav-p/listed-assignment.git'>
            here
          </a>
        </p>
        <p>
          This website was built as a part of Listed assignment
        </p>
        <p className='flex items-center justify-evenly'>
          <small>Go to</small>
          <a className='underline text-blue-700' href="./sign-in"> Sign In Page</a>
          <a className='underline text-blue-700' href="./dashboard"> Dashboard Page</a>
        </p>
      </main>
      <footer className='flex bg-black p-2'>
        <p className='max-w-lg mx-auto text-xl font-meduim text-white'>
          Made by <a href="https://github.com/madhav-p" className='underline'>
            Madhav P
          </a>
        </p>
      </footer>
    </article>
  )
}
