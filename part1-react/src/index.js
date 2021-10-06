import ReactDOM from 'react-dom'
import {useState} from 'react'
import './estilos.css'

const WarningNotUsed = () =>{
    return <h1>Todavia no se ha usado el contador</h1>
}
const ListOfClicks = ({clicks}) =>{
    return <p>{clicks.join(', ')}</p>
}

const App = () => {
    // const [left, setLeft] = useState(0)
    // const [right, setRight] = useState(0)
    
    // const [counters, setCounters] = useState({
    //     left: 0,
    //     right: 0,
    //     // clicks: 0,
    // })
    const [clicks, setClicks] = useState([])

    const countLeft = clicks.filter(click => click==="L")
    const countRight = clicks.filter(click => click==="R")
    const handleClickLeft =()=>{
        // setCounters({
        //     ...counters,
        //     left: counters.left + 1,
        //     right: counters.right,
        //     // clicks: counters.clicks + 1
        // })
        setClicks(prevClicks=>([...prevClicks,'L']))
    }
    const handleClickRight =()=>{
        // setCounters({
        //     ...counters,
        //     left: counters.left,
        //     right: counters.right + 1,
        //     // clicks: counters.clicks + 1

        // })
        setClicks(prevClicks=>([...prevClicks,'R']))
    }
 

    return (
        <div className='cont'>
            {countLeft.length}
            <button onClick={handleClickLeft}>left</button>
          
            <button onClick={handleClickRight}>right</button>
            {countRight.length}
            <p>Clicks totales: {clicks.length}</p>
            {clicks.length === 0 
                ? <WarningNotUsed />
                : <ListOfClicks clicks={clicks} />
            }
        </div>
    )
}


 ReactDOM.render(
    <App />, 
    document.getElementById('root')
  )