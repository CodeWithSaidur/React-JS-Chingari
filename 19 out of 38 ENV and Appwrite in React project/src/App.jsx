import './App.css'

function App() {
  console.log(import.meta.env.VITE_APPWRITE_URL)

  return (
    <>
      <h1 class="text-3xl font-bold bg-amber-500 rounded-2xl bg-center text-center m-2">
        Hello world!
      </h1>
    </>
  )
}

export default App
