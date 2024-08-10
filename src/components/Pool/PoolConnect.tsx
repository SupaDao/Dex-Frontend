import { Button } from "@nextui-org/react"
import { BsGearFill } from "react-icons/bs"
import { FaInbox } from "react-icons/fa6"


const PoolConnect = () => {
  return (
    <section className="w-full p-2">
      <div className="flex items-center justify-between mb-2">
        <div>
          <p className="text-xl font-bold">Your Liquidity Position</p>
          <p className="text-small">List of your liquidity positions</p>
        </div>
        <BsGearFill size={22} className="text-lg text-primary" role="button"/>
      </div>
      <div className="flex flex-col items-center border border-primary p-2 py-4 rounded-lg">
        <FaInbox size={80} className="text-neutral-500" />
        <p className="text-medium text-center font-bold text-neutral-500">Your active liquidity positions will appear here</p>
        <Button variant="flat" color="primary" className="font-supadao my-4 mx-auto">Connect Wallet</Button>
      </div>
      <div className="text-center">
        <Button variant="solid" color="primary" className="text-black font-bold my-4 mx-auto">New Position</Button>
      </div>
    </section>
  )
}

export default PoolConnect
