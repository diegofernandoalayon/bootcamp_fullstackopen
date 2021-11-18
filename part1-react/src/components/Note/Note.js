
export default function Note ({ content, important }) {
  return (
    <li>
      <p><strong>{content}</strong></p>
      <small>{String(important)}</small>
    </li>
  )
}
