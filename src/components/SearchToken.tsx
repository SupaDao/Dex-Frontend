import { Modal, ModalContent, ModalHeader, ModalBody, Input, Image } from "@nextui-org/react";
import { SetStateAction, useState } from "react";
import { TokenData } from "../types/interfaces";
import { BsSearch } from "react-icons/bs";
import { FaEthereum } from "react-icons/fa6";

interface Props{
  isOpen: boolean;
  onOpenChange: () => void
  closeSettings: () => void
  tokenData: TokenData[]
  setToken: React.Dispatch<SetStateAction<TokenData>>
}

const SearchToken = ({ isOpen, onOpenChange, closeSettings, setToken, tokenData }: Props) => {

  const [active, setActive] = useState(1)
  const selectToken = (index:number, element:TokenData) => {
    setActive(index + 1)
    setToken({ name: element.name, image: element.image,symbol:element.symbol, tokenBalance:element.tokenBalance,tokenAddress:element.tokenAddress })
    closeSettings()
  }
  return (
    <Modal isOpen={isOpen} placement="bottom-center" scrollBehavior="inside" backdrop="blur" onClose={closeSettings} onOpenChange={onOpenChange} className="bg-neutral-900 text-white">
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">Select a token</ModalHeader>
        <ModalBody className="mb-4">
          <Input
            color="primary"
            variant="underlined"
            type="search"
            placeholder="Search name or paste contract address"
            startContent={<BsSearch className="text-neutral-500"/>}
            />
          <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
            {tokenData.map((el, i) => (
              <div role="button" className={active === i+1 ? "flex items-center rounded-xl space-x-2 border-primary px-2 py-1 border bg-primary text-black" : "flex items-center rounded-xl space-x-2 border-primary px-2 py-1 border"} key={i+1} onClick={()=>selectToken(i,el)}>
                {el.image ? <Image src={el.image}/>:<FaEthereum size={18}/>}
                <p className="uppercase font-bold">{el.symbol}</p>
              </div>
            ))}
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default SearchToken