

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "John",
    age: 23
  }

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl"> Tailwind test </h1>
      <Card username="test"/>
    </>
  )
}

export default App
