import { useState, useEffect, useCallback } from "react"
import {AllToken} from "../components/index"
import { TokenList } from "../types/interfaces"
import { Image, Input } from "@nextui-org/react"
import images from "../assets/images"
import { BsSearch } from "react-icons/bs"

const Token = () => {
  const [allTokens, setAllTokens] = useState<TokenList[]>([
    {
      number: 1,
      name: "Ether",
      image: "",
      symbol: "ETH",
      price: "12,345",
      change: "+234.5",
      tvl: "7894.5M",
      volume:"716.5M"
    },{
      number: 2,
      name: "USD Coin",
      image: "",
      symbol: "USDC",
      price: "12,345",
      change: "+234.5",
      tvl: "7894.5M",
      volume:"716.5M"
    },
    {
      number: 3,
      name: "Wrapped BTC",
      image: "",
      symbol: "WBTC",
      price: "12,345",
      change: "+234.5",
      tvl: "7894.5M",
      volume:"716.5M"
    },
    {
      number: 4,
      name: "SupaCoin",
      image: "",
      symbol: "SPC",
      price: "12,345",
      change: "+234.5",
      tvl: "7894.5M",
      volume:"716.5M"
    }
  ])
  const [copyAllTokenList, setCopyAllTokenList] = useState<TokenList[]>(allTokens);
  const [search, setSearch] = useState<string>("");
  const [searchItem, setSearchItem] = useState<string>(search);

  const onHandleSearch = useCallback((value:string) => {
    const filteredTokens = allTokens.filter(({ name }) =>
      name.toLocaleLowerCase().includes(value.toLocaleLowerCase()
      ))
    if (filteredTokens.length === 0) {
      setAllTokens(copyAllTokenList);
    } else {
      setAllTokens(filteredTokens);
    }
  },[allTokens,copyAllTokenList])

  const onClearSearch = useCallback(() => {
    if (allTokens.length && copyAllTokenList.length) {
      setAllTokens(copyAllTokenList)
    }
  },[allTokens,copyAllTokenList])

  useEffect(() => {
    const timer = setTimeout(() => setSearch(searchItem), 1000);

    return () => clearTimeout(timer);
  }, [searchItem])
  
  useEffect(() => {
    if(search){
      onHandleSearch(search)
    } else {
      onClearSearch()
    }
  },[search,onClearSearch,onHandleSearch])

  return (
    <main className="p-2 md:p-4 w-full md:container lg:max-w-[75%] 2xl:max-w-[50%] mx-auto">
      <section>
        <p className="text-xl font-bold font-supadao text-primary">Top tokens</p>
        <div className="flex items-center space-x-6 justify-center my-4 ">
          <div className="flex space-x-3 justify-center items-center border border-primary px-2 rounded-lg py-1 w-1/4">
            <Image src={images.monad} className="h-10 w-10" alt="Monad logo"/>
            <p className="hidden sm:block text-secondary text-xl fond-bold font-supadao">Monad</p>
          </div>
          <Input
            classNames={{
            base: "max-w-[75%] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Filter token"
            value={searchItem}
            onChange={(e)=>setSearchItem(e.target.value)}
            size="sm"
            endContent={<BsSearch size={18} />}
            type="test"
          />
        </div>
      </section>
      <AllToken allToken={allTokens} />
    </main>
  )
}

export default Token