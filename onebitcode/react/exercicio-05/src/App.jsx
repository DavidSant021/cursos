import { useState } from "react"
import CommentsSection from "./components/commentsSection";

export default function App() {

  const [comments, setComments] = useState([]);
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (ev) => {
    ev.preventDefault()

    const newComment = {
      id: Math.floor(Math.random() * 1000000),
      author: author,
      content: content,
      createdAt: new Date()
    }

    setComments(state => [newComment, ...state])
    setAuthor('')
    setContent('')
  }

  return (
    <div id="app">
      <h2>Seção de Comentários</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="author">Email</label>
        <input
          type="text"
          id="author"
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)} />

        <label htmlFor="content">Comentário</label>
        <textarea
          id="content"
          cols="30"
          rows="6"
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}></textarea>

        <button type="submit">Enviar comentário</button>
      </form>
      <hr />
      <section id="comments">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <CommentsSection 
              id={comment.id}
              author={comment.author}
              createdAt={comment.createdAt}
              content={comment.content}
            />
          ))
        ) : (
          <p>Seja o primeiro a comentar!</p>
        )}
      </section>
    </div>
  )
}