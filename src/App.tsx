import TopBar from "./components/top-bar/top-bar.component"
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <TopBar />
      {/* <Landing /> */}
      <Outlet />
    </>
  )
}

export default App
