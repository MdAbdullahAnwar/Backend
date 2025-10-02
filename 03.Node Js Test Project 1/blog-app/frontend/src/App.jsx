import { useState, useEffect } from "react";
import BlogForm from "./components/BlogForm";
import BlogList from "./components/BlogList";
import "./App.css";

export default function App() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/blogs");
      if (!res.ok) throw new Error('Failed to fetch blogs');
      const data = await res.json();
      setBlogs(data);
    } catch (err) {
      console.error("Error fetching blogs:", err);
    } finally {
      setLoading(false);
    }
  };

  const addBlog = async (blog) => {
    try {
      const res = await fetch("http://localhost:5000/api/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog),
      });
      
      if (!res.ok) throw new Error('Failed to add blog');
      
      const newBlog = await res.json();
      setBlogs([{ ...newBlog, Comments: [] }, ...blogs]);
    } catch (err) {
      console.error("Error adding blog:", err);
      alert("Failed to add blog. Please try again.");
    }
  };

  const updateBlog = (blogId, updatedBlog) => {
    setBlogs(blogs.map(blog => 
      blog.id === blogId ? updatedBlog : blog
    ));
  };

  if (loading) {
    return <div className="app-container">Loading...</div>;
  }

  return (
    <div className="app-container">
      <BlogForm onSubmit={addBlog} />
      <BlogList blogs={blogs} onUpdateBlog={updateBlog} />
    </div>
  );
}
