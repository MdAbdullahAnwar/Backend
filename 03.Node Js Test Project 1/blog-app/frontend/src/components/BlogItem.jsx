import { useState } from "react";
import CommentSection from "./CommentSection";
import "../App.css";

export default function BlogItem({ blog, onUpdateBlog }) {
  const [expanded, setExpanded] = useState(false);

  const handleCommentsUpdate = (updatedComments) => {
    onUpdateBlog(blog.id, { ...blog, Comments: updatedComments });
  };

  return (
    <div className="blog-item">
      <div className="blog-header" onClick={() => setExpanded(!expanded)}>
        <h3>{blog.title}</h3>
        <span className="blog-toggle">{expanded ? "−" : "+"}</span>
      </div>

      {expanded && (
        <div className="blog-content">
          <p><strong>Author:</strong> {blog.author}</p>
          <p>{blog.content}</p>
          <CommentSection 
            blogId={blog.id} 
            comments={blog.Comments || []}
            onCommentsUpdate={handleCommentsUpdate}
          />
        </div>
      )}
    </div>
  );
}
