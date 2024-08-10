import { BsXLg } from "react-icons/bs"
import { TokenData } from "../types/interfaces"


interface Props{
  toggleIsOpen: () => void
  tokenData:TokenData[]
}

const TokenList = ({toggleIsOpen,tokenData}:Props) => {

  return (
    <div className="fixed z-40 inset-0 bg-neutral-950 bg-opacity-10 backdrop-blur-lg h-screen ">
      <div className=" absolute top-0 right-0  w-10/12 md:w-3/4 lg:w-1/4 bg-neutral-900 shadow-md h-full px-3 pt-4 flex flex-col animate-slideOut max-h-screen overflow-y-auto text-primary">
        <div className="flex sticky text-white items-center">
          <p>Token List</p>
          <BsXLg size={20} className="ms-auto" role="button" onClick={toggleIsOpen}/>
        </div>
        <hr className="text-secondary"/>
        <div className="h-[cal(100dvh-64px)] overflow-y-auto">
          {tokenData.map((el, i)=>(
          <div key={i + 1} className="flex space-x-2 md:space-x-4 lg:space-x-8 border-b-primary border-b-1 my-2 md:my-3 lg:my-4 p-2 items-center">
              {/*  */}
              <div className="h-12 w-12 flex justify-center items-center p-2 bg-primary rounded-full border-secondary border-2">
                <p className="text-black text-small font-bold">{el.symbol}</p>
              </div>
              <div className="flex flex-col-reverse">
                <p className="font-bold text-tiny text-neutral-600">{el.tokenBalance}</p>
                <p className="text-white font-extrabold text-lg">{el.name}</p>
              </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TokenList;