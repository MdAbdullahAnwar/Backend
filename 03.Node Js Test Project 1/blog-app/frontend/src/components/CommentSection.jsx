import { useState } from "react";
import "../App.css";

export default function CommentSection({ blogId, comments, onCommentsUpdate }) {
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);

  const addComment = async () => {
    if (!comment.trim() || loading) return;
    
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:5000/api/comments/${blogId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: comment }),
      });
      
      if (!res.ok) throw new Error('Failed to add comment');
      
      const newComment = await res.json();
      onCommentsUpdate([...comments, newComment]);
      setComment("");
    } catch (err) {
      console.error("Error adding comment:", err);
      alert("Failed to add comment. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const deleteComment = async (id) => {
    if (loading) return;
    
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:5000/api/comments/${id}`, {
        method: "DELETE",
      });
      
      if (!res.ok) throw new Error('Failed to delete comment');

      onCommentsUpdate(comments.filter((c) => c.id !== id));
    } catch (err) {
      console.error("Error deleting comment:", err);
      alert("Failed to delete comment. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="comment-section">
      <div className="comment-input">
        <input
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write a comment..."
          disabled={loading}
          onKeyPress={(e) => e.key === 'Enter' && addComment()}
        />
        <button onClick={addComment} disabled={loading}>
          {loading ? '...' : '>'}
        </button>
      </div>

      <div className="comment-list">
        {comments.map((c) => (
          <div key={c.id} className="comment-item">
            <span>{c.text}</span>
            <button 
              onClick={() => deleteComment(c.id)}
              disabled={loading}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
