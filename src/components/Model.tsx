import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, } from "@nextui-org/react";

interface Props{
  isOpen: boolean;
  onOpenChange: () => void
  connectWallet: () => void
}
const Model = ({ isOpen, onOpenChange,connectWallet }: Props) => {
  const walletMenu = ["MetaMask","Coinbase", "Wallet", "WalletConnect"]
  return (
    <Modal isOpen={isOpen} placement="center" backdrop="blur" onOpenChange={onOpenChange} className="bg-neutral-900 text-white">
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">Connect a wallet</ModalHeader>
        <ModalBody>
          <p className="text-sm">Select a wallet to connect to the platform</p>
          {walletMenu.map((el, i) => (
            <p key={i + 1} role="button" className="p-4 bg-primary text-black font-bold rounded-lg hover:bg-[#87a708] hover:text-neutral-900" onClick={connectWallet}>{el}</p>
          ))}
          
        </ModalBody>
        <ModalFooter>
          <p>By connecting a wallet, you agree to SupaDao Terms of Service and consent to its Privacy Policy</p>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default Model