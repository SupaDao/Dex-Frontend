import { AddLiquidity,PoolConnect } from "../components"

const Pool = () => {
  return (
    <div className="w-full md:w-3/4 xl:w-1/2 mx-auto p-2 md:p-4 min-h-[80vh] flex flex-col items-center justify-center">
      <AddLiquidity />
      <PoolConnect/>
    </div>
  )
}

export default Pool