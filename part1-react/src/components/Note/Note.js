
export default function Note ({ content, important, toggleImportance, ...props }) {
  const label = important
    ? 'make not important'
    : 'make important'
  return (
    <li>
      <p><strong>{content}</strong></p>
      <small>{String(important)}</small>
      <button onClick={toggleImportance}>{label}</button>
    </li>
  )
}
