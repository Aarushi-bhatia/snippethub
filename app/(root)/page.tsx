import Image from "next/image";

export default function Home() {
  return (
    <>
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
      <span className="purple_gradient text-center">Code Snippets</span>
      </h1>
      <p className="desc text-center">SnippetHub is an open-source platform for modern world to discover, create and share code snippets</p>
      
    </section>
    </>
  );
}
