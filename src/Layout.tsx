import { Outlet } from "react-router-dom";
import { Header } from "./components";

const Layout = () => {
  return (
    <div className="max-w-full bg-black text-white h-screen flex flex-col">
      <Header/>
      <div className="flex-grow overflow-y-auto">
        <Outlet/>
      </div>
    </div>
  )
}

export default Layout
