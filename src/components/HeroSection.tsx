import { useState } from "react"
import {SearchToken, Settings} from "./index"
import { TokenData } from "../types/interfaces"
import { BsGearFill } from "react-icons/bs"
import { Button, Image, Input, Spinner, useDisclosure } from "@nextui-org/react"
import { FaEthereum } from "react-icons/fa6"

const HeroSection = ({ accounts,tokenData }) => {
  const { isOpen, onOpen, onOpenChange,onClose } = useDisclosure();
  const [openSetting, setOpenSetting] = useState<boolean>(false)
  const [openToken, setOpenToken] = useState<boolean>(false)
  const [openTokenTwo, setOpenTokenTwo] = useState<boolean>(false);
  const [tokenSwapOutput, setTokenSwapOutput] = useState<number>(0);
  const [poolMessage, setPoolMessage] = useState<string>("");
  const [search, setSearch] = useState<boolean>(false);
  const [swapAmount, setSwapAmount] = useState<number>(0)
  const [fee,setFee] = useState<number>(0)
  //Token 1 states
  const [tokenOne, setTokenOne] = useState<TokenData>({
    name: "",
    image: "",
    symbol: "",
    tokenAddress: "",
    tokenBalance:""
  });
  //Token 1 states
  const [tokenTwo, setTokenTwo] = useState<TokenType>({
    name: "",
    image: "",
    symbol:"",
    tokenAddress: "",
    tokenBalance:""
  })

  const toggleSetting = () => {
    if (!openSetting) {
      setOpenSetting(!openSetting)
      onOpen()
    } else {
      onClose()
      setOpenSetting(!openSetting)
    }
  }


  const toggleSearchTokenOne = () =>
  {
    if (!openToken) {
      setOpenToken(!openToken)
      onOpen()
    } else {
      onClose()
      setOpenToken(!openToken)
    }
  }
  const toggleSearchTokenTwo = () => {
    if (!openTokenTwo) {
      setOpenTokenTwo(!openTokenTwo)
      onOpen()
    } else {
      onClose()
      setOpenTokenTwo(!openTokenTwo)
    }
  }


  
  return (
    <div className="flex items-center justify-center h-[calc(100dvh-20dvh)]  p-4">
      <div className="bg-neutral-900 border border-primary w-full md:w-1/2 xl:w-1/4 rounded-xl p-4">
        <div className="flex justify-between items-center">
          <p>Swap</p>
          <BsGearFill role="button" onClick={toggleSetting} size={20}/>
        </div>
        <div className="flex flex-col space-y-4 my-4">
          <Input
            color="primary"
            placeholder="0"
            variant="bordered"
            type="number"
            endContent={
              <div className="flex bg-primary p-2 text-black font-bold items-center justify-between w-72 rounded-lg" role="button" onClick={toggleSearchTokenOne}>
                {tokenOne.image ?
                <Image src={tokenOne.image } width={18} height={18}/> : <FaEthereum size={18}/>}
                <p className="uppercase">{tokenOne.symbol || "ETH"}</p>
                <p>{tokenOne.tokenBalance.slice(0,7) || 0.0}</p>
              </div>
            }
            onChange={(e) => (
              setSwapAmount(parseInt(e.target.value)),
              setSearch(true)
            )}
            classNames={{ 
            mainWrapper: "h-full",
            input: "text-medium",
            inputWrapper: "h-full font-normal text-neutral-300 bg-transparent border-primary border pe-0 rounded-lg",
            }} />
          {search ? <div className="h-2 flex justify-center items-center"><Spinner size="sm" color="primary"/></div>:<div className="h-2"></div>}
          <Input
            color="primary"
            placeholder="0"
            type="number"
            isDisabled = {search}
            value={tokenSwapOutput.toString()}
            variant="bordered"
            endContent={
              <div className="flex bg-primary p-2 text-black font-bold items-center justify-between w-72 rounded-lg" role="button" onClick={toggleSearchTokenTwo}>
                {tokenTwo.image ?
                <Image src={tokenTwo.image } width={18} height={18}/> : <FaEthereum size={18}/>}
                <p className="uppercase">{tokenTwo.symbol || "Select"}</p>
                <p>{tokenTwo.tokenBalance.slice(0,7)}</p>
              </div>
            }
            classNames={{ 
            mainWrapper: "h-full",
            input: "text-medium",
            inputWrapper: "h-full font-normal text-neutral-300 bg-transparent border-primary border pe-0 rounded-lg",
          }}/>
        </div>
        {search ? <div className="h-2 flex justify-start items-center mt-2 mb-3 space-x-3"><p>Fetching Price: </p><Spinner size="sm" color="primary" /></div> : <p>Best Price: {poolMessage}</p>}
        {accounts ? (
          <Button className="w-full font-supadao" radius="full" color="primary" variant="flat" >Swap</Button>
        ) : (
            <Button className="w-full font-supadao" radius="full" color="primary" variant="flat" >Connect Wallet</Button>
        )}
      </div>
      {openSetting && (
        <Settings isOpen={isOpen} onOpenChange={onOpenChange} closeSettings={toggleSetting}/>
      )}
      {openToken && (
        <SearchToken isOpen={isOpen} onOpenChange={onOpenChange} closeSettings={toggleSearchTokenOne} setToken={setTokenOne} tokenData={tokenData}/>
      )}
      {openTokenTwo && (
        <SearchToken isOpen={isOpen} onOpenChange={onOpenChange} closeSettings={toggleSearchTokenTwo} setToken={setTokenTwo} tokenData={tokenData}/>
      )}
    </div>
  )
}

export default HeroSection;