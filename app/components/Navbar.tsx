import { auth, signIn, signOut } from '@/auth'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = async () => {
  const session = await auth()

  return (
    <>
    <nav className="w-full flex-between mb-16 pt-3">
    <Link href="/" className="flex gap-2 flex-center">
      <Image
        src="/assets/images/logo.svg"
        alt="promptopia logo"
        width={30}
        height={30}
        className="object-contain"
      />
      <p className="max-sm:hidden font-satoshi font-semibold text-lg text-black tracking-wide">SnippetHub</p>
    </Link>

    <div className='md:flex hidden'>
      {session && session?.user ? (
        <>
        <div className="flex gap-3 md:gap-5">
        <Link href="/create-snippet" className="rounded-full border border-black bg-black py-1.5 px-5 text-white transition-all hover:bg-white hover:text-black text-center text-sm font-inter flex items-center justify-center">
              Create Post
            </Link>

            <form action ={async () => {
            "use server";

            await signOut({ redirectTo: "/" });
            }}>
              <button type='submit' className='rounded-full border border-black bg-transparent py-1.5 px-5 text-black transition-all hover:bg-black hover:text-white text-center text-sm font-inter flex items-center justify-center'>Logout</button>
            </form>

            <Link href={`/user/${session?.user.id}`}>
              <span>{session?.user?.name}</span>
              
            </Link>
            </div>
        </>
      ) : (
        <form action={async () => {
          "use server";

          await signIn('github');
          }}>
            <button type="submit" className='rounded-full border border-black bg-black py-1.5 px-5 text-white transition-all hover:bg-white hover:text-black text-center text-sm font-inter flex items-center justify-center'>Login</button>
        </form>
      )}
    </div>
    </nav>
    </>
  )
}

export default Navbar