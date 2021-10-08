

export default function Note ({title,body}){
  
    return (
        <li>
            <p><strong>{title}</strong></p>
            <small>{body}</small>
        </li>
    )
}