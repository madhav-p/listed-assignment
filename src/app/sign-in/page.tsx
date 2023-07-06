import Image from "next/image"

export default function SignInPage() {
  return (
    <article className={"w-full min-h-screen grid  md:grid-cols-[2fr_3fr] grid-cols-1  font-lato"}  >
      <aside className="bg-black grid place-content-center p-8">
        <p className={"text-white font-bold text-6xl font-montserrat"}>
          Board.
        </p>
      </aside>
      <main className="bg-gray-100 text-black grid place-content-center p-8 gap-4">
        <header className=" text-center md:text-left">
          <h1 className={"font-bold text-2xl font-montserrat"}>Sign In</h1>
          <p className="font-normal text-lg">Sign in to your Account</p>
        </header>
        <main className="flex flex-col gap-4" >
          <section className="flex w-full justify-evenly gap-2 flex-wrap">
            <button className={" text-sm flex gap-2 items-center rounded-full px-4 py-2 bg-white font-montserrat"}>
              <Image
                src="/google.svg"
                alt="Google Logo"
                width={14}
                height={14}
                priority
              />
              Sign in with Google</button>
            <button className={" text-sm flex gap-2 items-center rounded-full px-4 py-2 bg-white font-montserrat"}>
              <Image
                src="/apple.svg"
                alt="Apple Logo"
                width={14}
                height={14}
                priority
              />
              Sign in with Apple</button>
          </section>
          <form action="" className="bg-white p-8 rounded-xl grid gap-3">
            <label htmlFor="">
              <p className="font-normal mb-1">Email address</p>
              <input className="w-full bg-gray-200 px-3 py-2 rounded-lg placeholder-slate-600" type="text" name="email" id="email" placeholder="johndoe@gmail.com" />
            </label>
            <label htmlFor="">
              <p className="font-normal mb-1">Password</p>
              <input className="w-full bg-gray-200 px-3 py-2 rounded-lg placeholder-slate-600" type="password" name="password" id="password" placeholder="password" />
            </label>
            <a href="/forgot-password" className="text-blue-500 text-sm"> Forgot Password? </a>
            <button className={"bg-black text-white rounded-lg p-2 font-montserrat"}>
              Sign In
            </button>
          </form>
        </main>
        <footer >
          <p className="text-sm text-center">
            <span className="text-gray-500">
              Don't have an account?
            </span> {" "}
            <a href="/register" className="text-blue-600">
              Register here
            </a>
          </p>
        </footer>
      </main>
    </article>
  )
}