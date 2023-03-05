// import { data } from "../data";
import './List.css'

const List = (props) => {
  const { setPeople } = props
  // console.log(props)
  function clearAll() {
    setPeople([])
  }

  const {setList} = props.arr
  function listItems () {
    return setList.props.arr.length
  }
  // console.log(props.arr.length);
  return (
    <div className='main'>
      <ul className="container" > 
          <h2>{listItems=props.arr.length}birthdays today</h2>
      
        {props.arr.map((itemObej) => {
          return (
            <li key={itemObej.id}>
              <div className="preson">
                <img
                  className="image"
                  src={itemObej.image}
                  alt="no image"
                  width={100}
                  height={100}
                />
                <div>
                  <h3>{itemObej.name}</h3>
                  <p>{itemObej.age}</p>
                </div>
              </div>
            </li>
          )
        })}
      <button className='clear-all' onClick={clearAll}>clear all</button>
      </ul>
    </div>
  )
}

export default List
