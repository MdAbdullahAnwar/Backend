import BlogItem from "./BlogItem";
import "../App.css";

export default function BlogList({ blogs, onUpdateBlog }) {
  return (
    <div className="blog-list">
      {blogs.map((b) => (
        <BlogItem 
          key={b.id}
          blog={b} 
          onUpdateBlog={onUpdateBlog}
        />
      ))}
    </div>
  );
}
