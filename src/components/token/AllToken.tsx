import { Image, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Tooltip } from "@nextui-org/react"
import { TokenList } from "../../types/interfaces"
import { FaEthereum } from "react-icons/fa6"
import { GoTriangleUp } from "react-icons/go"
import { BsQuestion } from "react-icons/bs"


interface Props{
  allToken: TokenList[]
}
const AllToken = ({ allToken }: Props) => {

  return (
    <section>
      <article className="hidden md:block">
        <Table aria-label="Top token traded"
          classNames={{ 
            wrapper:"bg-neutral-900",
            th: "bg-black",
            td: "bg-neutral-900",
            tr: "bg-neutral-900",
            tfoot: "bg-neutral-900",
          }}
        >
          <TableHeader>
            <TableColumn className="uppercase">#</TableColumn>
            <TableColumn className="uppercase">Name</TableColumn>
            <TableColumn className="uppercase">price</TableColumn>
            <TableColumn className="uppercase">Changes</TableColumn>
            <TableColumn className="uppercase">TVL {" "}
              <Tooltip showArrow={true} color="secondary" content="Hello world toltip">
                <button className="rounded-full bg-neutral-700">
                  <BsQuestion size={12}/>
                </button>
              </Tooltip>
            </TableColumn>
            <TableColumn className="uppercase flex items-center space-x-3">
              <GoTriangleUp />{" "}
              Volume
              <Tooltip showArrow={true} color="secondary" content="Hello world toltip">
                <button className="rounded-full bg-neutral-700">
                  <BsQuestion size={12}/>
                </button>
              </Tooltip>
            </TableColumn>
          </TableHeader>
          <TableBody>
            {allToken.map(item => (
              <TableRow key={item.number}>
                <TableCell className="uppercase text-lg">{item.number}</TableCell>
                <TableCell className="my-auto">
                  <div className="flex items-center space-x-2 text-lg">
                    {item.image ? (
                    <Image src={item.image} className="w-4 h-4"/>
                    ) : <FaEthereum className="h-4 w-4" />}
                    <p>{item.name}</p>
                  </div>
                  
                </TableCell>
                <TableCell className="uppercase text-lg">${item.price}</TableCell>
                <TableCell className="uppercase text-lg">{item.change}%</TableCell>
                <TableCell className="uppercase text-lg">${item.tvl}</TableCell>
                <TableCell className="uppercase text-lg">${item.volume}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </article>
      {/* mobile */}
      <article className="md:hidden">
        <Table aria-label="Top topek traded"
          classNames={{ 
            wrapper:"bg-neutral-900",
            th: "bg-black",
            td: "bg-neutral-900",
            tr: "bg-neutral-900",
            tfoot:"bg-neutral-900"
          }}
        >
          <TableHeader>
            <TableColumn className="uppercase">Name</TableColumn>
            <TableColumn className="uppercase">symbol</TableColumn>
            <TableColumn className="uppercase">price</TableColumn>
            <TableColumn className="uppercase">change</TableColumn>
          </TableHeader>
          <TableBody>
            {allToken.map(item => (
              <TableRow key={item.number}>
                <TableCell className="flex items-center space-x-1">
                  {item.image ? (
                    <Image src={item.image} className="w-4 h-4"/>
                  ): <FaEthereum className="h-4 w-4"/>}
                  <p>{item.name}</p></TableCell>
                <TableCell className="text-tiny font-bold">{item.symbol}</TableCell>
                <TableCell className="text-tiny font-bold">${item.price}</TableCell>
                <TableCell className="text-tiny font-bold">{item.change}%</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </article>
    </section>
  )
}

export default AllToken