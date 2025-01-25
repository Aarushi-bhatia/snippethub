import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="w-full flex-center flex-col">
        <h1 className="mt-5 text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl text-center">
          Discover & Share
          <br className="max-md:hidden" />
          <span className="bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500 bg-clip-text text-transparent text-center">
            Code Snippets
          </span>
        </h1>
        <p className="mt-5 text-lg text-gray-600 sm:text-xl max-w-2xl text-center">
          SnippetHub is an open-source platform for modern world to discover,
          create and share code snippets
        </p>
      </section>
    </>
  );
}
