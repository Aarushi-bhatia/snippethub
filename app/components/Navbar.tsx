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
      <p className="logo_text">SnippetHub</p>
    </Link>

    <div className='md:flex hidden'>
      {session && session?.user ? (
        <>
        <div className="flex gap-3 md:gap-5">
        <Link href="/create-snippet" className="black_btn">
              Create Post
            </Link>

            <form action ={async () => {
            "use server";

            await signOut({ redirectTo: "/" });
            }}>
              <button type='submit' className='outline_btn'>Logout</button>
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
            <button type="submit" className='black_btn'>Login</button>
        </form>
      )}
    </div>
    </nav>
    </>
  )
}

export default Navbar