export interface Holding {
  id: string;
  asset: {
    name: string;
    symbol: string;
    logo: string;
  };
  quantity: number;
  avgPrice: number;
  currentPrice: number;
  shortTerm: {
    amount: number;
    coins: number;
  };
  longTerm: {
    amount: number;
    coins: number;
  };
  amountToSell: number | null;
  selected: boolean;
}

export interface CapitalGains {
  shortTerm: {
    profits: number;
    losses: number;
    netGains: number;
  };
  longTerm: {
    profits: number;
    losses: number;
    netGains: number;
  };
  totalRealizedGains: number;
}

export interface HarvestingResult {
  before: CapitalGains;
  after: CapitalGains;
  savings: number;
}