import { useState } from "react";
import "../App.css";

export default function BlogForm({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author || !content) {
      alert("All fields are required!");
      return;
    }
    onSubmit({ title, author, content });
    setTitle("");
    setAuthor("");
    setContent("");
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Create a New Blog Post</h2>

      <label>Blog Title</label>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />

      <label>Blog Author</label>
      <input value={author} onChange={(e) => setAuthor(e.target.value)} />

      <label>Blog Content</label>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={4}
      ></textarea>

      <button type="submit">Submit</button>
    </form>
  );
}
