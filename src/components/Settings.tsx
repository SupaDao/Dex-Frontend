import { Modal, ModalContent, ModalHeader, ModalBody, Tooltip, Button, Input, Switch } from "@nextui-org/react";
import { BsCircle, BsQuestion } from "react-icons/bs";
import { TbMinusVertical } from "react-icons/tb";

interface Props{
  isOpen: boolean;
  onOpenChange: () => void
  closeSettings: () => void
}
const Settings = ({isOpen, onOpenChange,closeSettings}:Props) => {
  return (
    <Modal isOpen={isOpen} placement="center" backdrop="blur" onClose={closeSettings} onOpenChange={onOpenChange} className="bg-neutral-900 text-white">
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">Settings</ModalHeader>
        <ModalBody>
          <div className="flex items-center space-x-2">
            <p>Slippage tollerance</p>
            <Tooltip showArrow={true} color="secondary" content="Hello world toltip">
              <button className="rounded-full p-1 bg-neutral-700">
                <BsQuestion size={16}/>
              </button>
            </Tooltip>
          </div>
          <div className="flex my-2 justify-between items-center space-x-2">
            <Button variant="flat" color="secondary">Auto</Button>
            <Input
              color="primary"
              variant="bordered"
              placeholder="0.1"
              endContent={<p className="pe-3  text-neutral-500">%</p>}
              classNames={{ 
                mainWrapper: "h-full",
                input: "text-medium text-end",
                inputWrapper: "h-full font-normal text-white bg-transparent border-primary border pe-0 rounded-lg hover:border-secondary",
              }}
            />
          </div>
          <div className="flex items-center space-x-2">
            <p>Slippage tollerance</p>
            <Tooltip showArrow={true} color="secondary" content="Hello world toltip">
              <button className="rounded-full p-1 bg-neutral-700">
                <BsQuestion size={16}/>
              </button>
            </Tooltip>
          </div>
          <div className="flex my-2 justify-between items-center space-x-2">
            
            <Input
              color="primary"
              variant="bordered"
              endContent={<p className="pe-3  text-neutral-500">sec</p>}
              classNames={{ 
                mainWrapper: "h-full",
                input: "text-medium text-end",
                inputWrapper: "h-full font-normal text-white bg-transparent border-primary border pe-0 rounded-lg",
              }}
            />
            <Button variant="flat" color="secondary" isDisabled>Minutes</Button>
          </div>

          <div className="my-2">
            <p className="font-bold text-lg capitalize">Interface setting</p>
            <div className="flex space-x-3 items-center">
              <p className="w-3/4 ">Transaction Deadline</p>
              <div className="w-1/4 text-center">
                <Switch color="secondary" size="lg" thumbIcon={({ isSelected,className }) =>
                  isSelected ? (<TbMinusVertical className={className} />) : <BsCircle className={className} />} />
              </div>
            </div>
          </div>

        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default Settings