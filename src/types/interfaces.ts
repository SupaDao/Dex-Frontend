
export type TokenData = {
      name: string
      symbol: string
      image?: string
      tokenBalance: string
      tokenAddress: string
}

export type TokenList = {
      number: number
      image: string | undefined
      name:string
      symbol: string
      price: string,
      change: string
      tvl: string
      volume: string
}