import './App.css'
import Counter from './Counter';
import Team from './Team';
import Users from './Users';

function App() {

  function handleClick(){
    alert('button clicked');
  }

  const handleClick2 = () =>{
    alert('button 2 clicked')
  }

  const addToFive = (num) =>{
    alert(num + 5);
  }

  return (
    <>
      <h3>React core concepts 2</h3>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>
      

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me2</button>
      <button onClick={() =>{alert('third clicked')}}>third</button>
      {/* vejailla */}
      <button onClick={() => addToFive(3)}>Four</button>
    </>
  )
}

export default App
