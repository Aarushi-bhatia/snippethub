"use client";

import Form from "@/app/components/Form";
import React, { useState } from "react";

const CreateSnippet = () => {
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    snippet: "",
    tag: "",
  });

  const createSnippet = async (e) => {
    e.preventDefault();
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
