"use client";

import Form from "@/app/components/Form";
import React, { useState } from "react";
import 

const CreateSnippet = () => {
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    snippet: "",
    tag: "",
  });

  const createSnippet = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch('/api/snippet/new', {
        method: 'POST',
        body: JSON.stringify({
          snippet: post.snippet,
          userId: session?.user.id,
          tag: post.tag,
        })
      })
      if(response.ok){
        router.push('/');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return <Form 
  type="Create" 
  post={post}
  setPost={setPost}
  submitting={submitting}
  handleSubmit={createSnippet}
  />;
};

export default CreateSnippet;
