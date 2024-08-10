import { useState } from "react"
import SearchToken from "../SearchToken"
import { Button, Image, Input, useDisclosure } from "@nextui-org/react"
import images from "../../assets/images"
import { BsArrowDown, BsArrowLeft, BsDash, BsGearFill, BsPlus } from "react-icons/bs"
import { FaEthereum, FaInbox } from "react-icons/fa6"
import Settings from "../Settings"
import { TokenData } from "../../types/interfaces"
import { TOKEN_SAMPLE as tokenData } from "../../data/sampleData"

const AddLiquidity = () => {
  const [openSetting, setOpenSetting] = useState<boolean>(false)
  const { isOpen, onOpen, onOpenChange,onClose } = useDisclosure();
  const [openToken, setOpenToken] = useState<boolean>(false)
  const [openTokenTwo, setOpenTokenTwo] = useState<boolean>(false)
  const [active, setActive] = useState<number>(1);
  const [openFee, setOpenFee] = useState<boolean>(true);
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(0);
  //Token 1 states
  const [tokenOne, setTokenOne] = useState<TokenData>(tokenData[0]);
  //Token 1 states
  const [tokenTwo, setTokenTwo] = useState<TokenData>(tokenData[1])
  const feePairs = [
    {
      fee: "0.01%",
      info: "Best for very stable pairs",
      number: "0% select"
    },
    {
      fee: "0.05%",
      info: "Best for stable pairs",
      number: "1% select"
    },
    {
      fee: "0.3%",
      info: "Best for most Pairs",
      number:"99% select"
    },
    {
      fee: "1%",
      info: "Best for Extotic pairs",
      number:"0% select"
    }
  ] 

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

  const minPriceRange = (text: string) => {
    if (text === "+") {
      setMinPrice(minPrice+1);
    } else if (text === "-") {
      setMinPrice(minPrice === 0 ? 0 : minPrice - 1)
    }
  }

  const maxPriceRange = (text:string) => {
    if (text === "+") {
      setMaxPrice(maxPrice+ 1);
    } else if (text === "-") {
      setMaxPrice(maxPrice ===0 ? 0 : maxPrice - 1)
    }
  }


  return (
      <section className="p-2 w-full">
        <div className="p-4 border border-primary rounded-t-lg pb-8">
          <div className="flex justify-between items-center">
            <p className="text-md md:text-lg border border-primary bg-neutral-900 py-1 px-2 bg-opacity-90 rounded-lg font-bold text-primary">Liquidity Pool</p>
            <div className="flex justify-evenly space-x-2 items-center">
              <Image src={images.monad} className="w-10 h-10"/>
              <Button color="primary" className="text-black">
                Connect
              </Button>
            </div>
          </div>
        </div>
        <div className="border border-primary p-4 rounded-lg">
          <div className="flex items-center text-primary justify-between mb-4">
            <div className="flex items-center  space-x-2 text-lg font-bold">
              <BsArrowLeft/>
              <p className="capitalize">Add liquidity</p>
            </div>
            <BsGearFill size={22} className="text-lg" role="button" onClick={toggleSetting}/>
          </div>
          <hr className="border border-primary" />
          <div className="mt-2">
            <p className="capitalize font-bold text-medium">Select pairs</p>
            <div className="flex justify-between space-x-2 mt-2 items center">
              <Button variant="bordered" color="primary" className="flex space-x-3" onClick={toggleSearchTokenOne}>
                {!tokenOne.image && tokenOne.name === "Select Token" ?null : tokenOne.image && tokenOne.name !== "Select Token"  ?
                <Image src={tokenOne.image } width={18} height={18}/> : <FaEthereum size={18}/>}
                <p className="uppercase font-bold">{ tokenOne.symbol }</p>
                <BsArrowDown/>
              </Button>
              <Button variant="flat" color="primary" className="flex space-x-2" onClick={toggleSearchTokenTwo}>
                {!tokenTwo.image && tokenTwo.name === "Select Token" ?null : tokenTwo.image && tokenTwo.name !== "Select Token"  ?
                <Image src={tokenTwo.image } width={18} height={18}/> : <FaEthereum size={18}/>}
                <p className="uppercase">{tokenTwo.symbol}</p>
                <BsArrowDown/>
              </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 md:col-span-1">
              {/* Fee Tier */}
              <div className="flex items-center justify-between my-4">
                <div>
                  <p className="capitalize font-bold text-medium">Fee tier</p>
                  <p className="text-small">The % you'll earn in fees.</p>
                </div>
                <Button variant="bordered" color="primary" onClick={()=>setOpenFee(prev => !prev)}>
                  {openFee ? "Hide" : "Show"}
                </Button>
              </div>
              {/* Fees */}
              <div className={openFee ? "grid grid-cols-4 gap-2 mb-3 animate-appearance-in" : "hidden"}>
                {feePairs.map(fee => (
                  <div role="button" className={active === feePairs.indexOf(fee)+1 ? "col-span-1 p-1 rounded-lg border border-primary bg-[#d4d804] text-black" :"col-span-1 p-1 rounded-lg border border-primary"} key={feePairs.indexOf(fee)+1} onClick={()=>setActive(feePairs.indexOf(fee)+1)}>
                    <p className="font-bold text-medium">{fee.fee}</p>
                    <p className={active === feePairs.indexOf(fee) + 1 ? "text-tiny text-neutral-800" : "text-tiny text-neutral-500"}>{fee.info}</p>
                    <p className="text-tiny mt-3 bg-neutral-900 text-neutral-300 p-1 rounded-lg text-center">{fee.number}</p>
                  </div>
                ))}
              </div>
            <hr className="border border-primary" />
            {/* Price Range */}
              <div className="mt-6">
                <div className="flex justify-between items-center mb-3">
                  <p className="capitalize font-bold text-medium">Select Price Range</p>
                  <Button variant="bordered" color="primary" size="sm">
                    Full Range
                  </Button>
                </div>
                <div className="rounded-lg bg-neutral-900 p-2">
                  <div className="flex justify-between items-center">
                    <p className="capitalize text-small font-bold">low price</p>
                    <BsPlus size={18} role="button" onClick={()=>minPriceRange("+")}/>
                  </div>
                  <Input
                    type="number"
                    className="text-white my-2"
                    variant="faded"
                    classNames={{ 
                      inputWrapper:"bg-neutral-800 border-0 text-white overflow-hidden px-0 rounded-lg",
                      input:"bg-neutral-800 px-4 text-white",
                      innerWrapper:'bg-neutral-800 text-white',
                    }}
                    min={0}
                    value={minPrice.toString()}
                    onChange={(e)=>setMinPrice(parseInt(e.target.value))}
                  />
                  <div className="flex justify-between items-center">
                    <p className="capitalize text-small font-bold">per ETH</p>
                    <BsDash size={18} role="button" onClick={()=>minPriceRange("-")}/>
                  </div>
                </div>

                <div className="rounded-lg bg-neutral-900 p-2 mt-4">
                  <div className="flex justify-between items-center">
                    <p className="capitalize text-small font-bold">high price</p>
                    <BsPlus size={18} role="button" onClick={()=>maxPriceRange("+")}/>
                  </div>
                  <Input
                    type="number"
                    className="text-white my-2"
                    variant="faded"
                    classNames={{ 
                      inputWrapper:"bg-neutral-800 border-0 text-white overflow-hidden px-0 rounded-lg",
                      input:"bg-neutral-800 px-4 text-white",
                      innerWrapper:'bg-neutral-800 text-white',
                    }}
                    min={0}
                    value={maxPrice.toString()}
                    onChange={(e)=>setMaxPrice(parseInt(e.target.value))}
                  />
                  <div className="flex justify-between items-center">
                    <p className="capitalize text-small font-bold">per ETH</p>
                    <BsDash size={18} role="button" onClick={()=>maxPriceRange("-")}/>
                  </div>
                </div>
              </div>
            </div>

            {/* Liquidity Position FalnBos*/}
            <div className="col-span-2 md:col-span-1">
              <div className="h-[19.3rem] flex flex-col items-center justify-center">
                <FaInbox size={100} className="text-neutral-900" />
                <p className="text-lg text-center font-bold text-neutral-900">Your position will appear here</p>
              </div>
              {/* Deposit Amount */}
              <div className="rounded-lg bg-neutral-900 p-2">
                <div className="flex justify-between items-center space-x-2">
                  <Input
                    type="number"
                    className="text-white my-2 w-3/4"
                    variant="faded"
                    classNames={{ 
                      inputWrapper:"bg-neutral-800 border-0 text-white overflow-hidden px-0 rounded-lg",
                      input:"bg-neutral-800 px-4 text-white",
                      innerWrapper:'bg-neutral-800 text-white',
                    }}
                    min={0}
                    value={minPrice.toString()}
                    onChange={(e)=>setMinPrice(parseInt(e.target.value))}
                  />
                  <Button variant="bordered" color="primary" className="flex space-x-2">
                    {!tokenOne.image && tokenOne.name === "Select Token" ?null : tokenOne.image && tokenOne.name !== "Select Token"  ?
                    <Image src={tokenOne.image } width={18} height={18}/> : <FaEthereum size={18}/>}
                    <p className="uppercase font-bold">{ tokenOne.symbol }</p>
                  </Button>
                </div>
                <p className="text-small">$1.0</p>
              </div>
              <div className="rounded-lg bg-neutral-900 p-2 mt-2">
                <div className="flex justify-between items-center space-x-2">
                  <Input
                    type="number"
                    className="text-white my-2 w-3/4"
                    variant="faded"
                    classNames={{ 
                      inputWrapper:"bg-neutral-800 border-0 text-white overflow-hidden px-0 rounded-lg",
                      input:"bg-neutral-800 px-4 text-white",
                      innerWrapper:'bg-neutral-800 text-white',
                    }}
                    min={0}
                    value={minPrice.toString()}
                    onChange={(e)=>setMinPrice(parseInt(e.target.value))}
                  />
                  <Button variant="bordered" color="primary" className="flex space-x-2">
                    {!tokenTwo.image && tokenTwo.name === "Select Token" ?null : tokenTwo.image && tokenTwo.name !== "Select Token"  ?
                  <Image src={tokenTwo.image } width={18} height={18}/> : <FaEthereum size={18}/>}
                  <p className="uppercase">{tokenTwo.symbol}</p>
                  </Button>
                </div>
                <p className="text-small">$1.0</p>
              </div>
            </div>
          </div>
          </div>
      </div>
      {openSetting && <Settings isOpen={isOpen} onOpenChange={onOpenChange} closeSettings={toggleSetting} />}
      {openToken && <SearchToken setToken={setTokenOne} tokenData={tokenData} isOpen={isOpen} onOpenChange={onOpenChange} closeSettings={toggleSearchTokenOne} />}
      {openTokenTwo && <SearchToken setToken={setTokenTwo} tokenData={tokenData} isOpen={isOpen } onOpenChange={onOpenChange} closeSettings={toggleSearchTokenTwo} />}
      </section>

      
  )
}

export default AddLiquidity
