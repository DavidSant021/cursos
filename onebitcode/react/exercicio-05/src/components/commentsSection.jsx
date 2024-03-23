export default function CommentsSection({ id, author, createdAt, content }) {
    return (
        <div key={id}>
            <h3>{author}</h3>
            <span>Em {createdAt.toLocaleString()}</span>
            <p>{content}</p>
        </div>
    )
}