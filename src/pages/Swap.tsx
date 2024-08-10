import { HeroSection } from "../components"
import { TOKEN_SAMPLE as tokenData } from "../data/sampleData"


const Swap = () => {
  return (
    <div className="p-4">
      <HeroSection tokenData={tokenData} accounts={"Hello"}/>
    </div>
  )
}

export default Swap