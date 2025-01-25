import Link from "next/link";
import React from "react";

interface FormProps {
  type: string;
  post: any;
  setPost: (post: any) => void;
  submitting: boolean;
  handleSubmit: (e: React.FormEvent) => void;
}

const Form: React.FC<FormProps> = ({
  type,
  post,
  setPost,
  submitting,
  handleSubmit,
}) => {
  return (
    <section className="w-full max-w-full flex flex-col justify-start items-start h-screen">
      <h1 className="mt-5 text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl text-left">
        <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          {type} Post
        </span>
      </h1>
      <p className="mt-5 text-lg text-gray-600 sm:text-xl max-w-2xl text-left">
        {type} and share amazing code snippets with the world, and let your
        imagination run wild on any development platform!
      </p>
      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">Your Code Snippet</span>
          <textarea value={post.snippet}
          onChange={(e) => setPost({ ...post,
          snippet: e.target.value })}
          placeholder="Write your snippet here..."
          required
          className="w-full flex rounded-lg h-[200px] mt-2 p-3 text-sm text-gray-500 outline-0" />
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">Tag {` `}
          <span className="font-normal">(#c++, #python, #java)</span></span>
          <input value={post.tag}
          onChange={(e) => setPost({ ...post,
          tag: e.target.value })}
          placeholder="#tag"
          required
          className="w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0" />
        </label>
        <div className="flex-end mx-3 b-5 gap-4">
          <Link href='/' className="text-gray-500 text-sm">Cancel</Link>
          <button type="submit"
          disabled={submitting}
          className="px-5 py-1.5 text-sm bg-orange-500 rounded-full text-white">
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
