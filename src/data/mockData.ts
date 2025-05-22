import { Holding, HarvestingResult } from '@/types';

export const initialHoldings: Holding[] = [
  {
    id: '1',
    asset: {
      name: 'Bitcoin',
      symbol: 'BTC',
      logo: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
    },
    quantity: 0.63776,
    avgPrice: 85320.15,
    currentPrice: 86732.44,
    shortTerm: {
      amount: -1200,
      coins: 0.338,
    },
    longTerm: {
      amount: 2400,
      coins: 0.300,
    },
    amountToSell: null,
    selected: false,
  },
  {
    id: '2',
    asset: {
      name: 'Ethereum',
      symbol: 'ETH',
      logo: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
    },
    quantity: 5.6736,
    avgPrice: 1620.15,
    currentPrice: 1643.20,
    shortTerm: {
      amount: 55320.15,
      coins: 2.332,
    },
    longTerm: {
      amount: 8239.29,
      coins: 3.245,
    },
    amountToSell: null,
    selected: true,
  },
  {
    id: '3',
    asset: {
      name: 'Tether',
      symbol: 'USDT',
      logo: 'https://cryptologos.cc/logos/tether-usdt-logo.png',
    },
    quantity: 3096.54,
    avgPrice: 1.15,
    currentPrice: 1.01,
    shortTerm: {
      amount: -1200,
      coins: 2011.23,
    },
    longTerm: {
      amount: 2400,
      coins: 902.47,
    },
    amountToSell: null,
    selected: false,
  },
  {
    id: '4',
    asset: {
      name: 'Polygon',
      symbol: 'MATIC',
      logo: 'https://cryptologos.cc/logos/polygon-matic-logo.png',
    },
    quantity: 2210,
    avgPrice: 2.31,
    currentPrice: 2.11,
    shortTerm: {
      amount: -1200,
      coins: 802,
    },
    longTerm: {
      amount: 2400,
      coins: 1402,
    },
    amountToSell: null,
    selected: false,
  },
  {
    id: '5',
    asset: {
      name: 'Cardano',
      symbol: 'ADA',
      logo: 'https://cryptologos.cc/logos/cardano-ada-logo.png',
    },
    quantity: 4500,
    avgPrice: 0.45,
    currentPrice: 0.51,
    shortTerm: {
      amount: 3200,
      coins: 2100,
    },
    longTerm: {
      amount: 1100,
      coins: 2400,
    },
    amountToSell: null,
    selected: false,
  },
  {
    id: '6',
    asset: {
      name: 'Solana',
      symbol: 'SOL',
      logo: 'https://cryptologos.cc/logos/solana-sol-logo.png',
    },
    quantity: 24.5,
    avgPrice: 108.32,
    currentPrice: 142.65,
    shortTerm: {
      amount: 4200,
      coins: 12.3,
    },
    longTerm: {
      amount: 3600,
      coins: 12.2,
    },
    amountToSell: null,
    selected: false,
  },
  {
    id: '7',
    asset: {
      name: 'Binance Coin',
      symbol: 'BNB',
      logo: 'https://cryptologos.cc/logos/bnb-bnb-logo.png',
    },
    quantity: 8.32,
    avgPrice: 421.50,
    currentPrice: 568.21,
    shortTerm: {
      amount: 1520,
      coins: 4.1,
    },
    longTerm: {
      amount: 2600,
      coins: 4.22,
    },
    amountToSell: null,
    selected: false,
  },
  {
    id: '8',
    asset: {
      name: 'XRP',
      symbol: 'XRP',
      logo: 'https://cryptologos.cc/logos/xrp-xrp-logo.png',
    },
    quantity: 5430,
    avgPrice: 0.56,
    currentPrice: 0.51,
    shortTerm: {
      amount: -1200,
      coins: 2530,
    },
    longTerm: {
      amount: -850,
      coins: 2900,
    },
    amountToSell: null,
    selected: false,
  },
  {
    id: '9',
    asset: {
      name: 'Dogecoin',
      symbol: 'DOGE',
      logo: 'https://cryptologos.cc/logos/dogecoin-doge-logo.png',
    },
    quantity: 12500,
    avgPrice: 0.082,
    currentPrice: 0.105,
    shortTerm: {
      amount: 2200,
      coins: 6200,
    },
    longTerm: {
      amount: 1950,
      coins: 6300,
    },
    amountToSell: null,
    selected: false,
  },
  {
    id: '10',
    asset: {
      name: 'Polkadot',
      symbol: 'DOT',
      logo: 'https://cryptologos.cc/logos/polkadot-new-dot-logo.png',
    },
    quantity: 342.5,
    avgPrice: 7.82,
    currentPrice: 6.35,
    shortTerm: {
      amount: -1840,
      coins: 170.2,
    },
    longTerm: {
      amount: -1320,
      coins: 172.3,
    },
    amountToSell: null,
    selected: false,
  },
  {
    id: '11',
    asset: {
      name: 'Chainlink',
      symbol: 'LINK',
      logo: 'https://cryptologos.cc/logos/chainlink-link-logo.png',
    },
    quantity: 205.8,
    avgPrice: 14.25,
    currentPrice: 17.65,
    shortTerm: {
      amount: 1240,
      coins: 102.2,
    },
    longTerm: {
      amount: 1670,
      coins: 103.6,
    },
    amountToSell: null,
    selected: false,
  },
  {
    id: '12',
    asset: {
      name: 'Uniswap',
      symbol: 'UNI',
      logo: 'https://cryptologos.cc/logos/uniswap-uni-logo.png',
    },
    quantity: 310.6,
    avgPrice: 6.72,
    currentPrice: 5.45,
    shortTerm: {
      amount: -980,
      coins: 155.3,
    },
    longTerm: {
      amount: -1250,
      coins: 155.3,
    },
    amountToSell: null,
    selected: false,
  },
  {
    id: '13',
    asset: {
      name: 'Litecoin',
      symbol: 'LTC',
      logo: 'https://cryptologos.cc/logos/litecoin-ltc-logo.png',
    },
    quantity: 18.4,
    avgPrice: 94.52,
    currentPrice: 69.30,
    shortTerm: {
      amount: -760,
      coins: 9.2,
    },
    longTerm: {
      amount: -920,
      coins: 9.2,
    },
    amountToSell: null,
    selected: false,
  },
  {
    id: '14',
    asset: {
      name: 'Avalanche',
      symbol: 'AVAX',
      logo: 'https://cryptologos.cc/logos/avalanche-avax-logo.png',
    },
    quantity: 78.5,
    avgPrice: 32.15,
    currentPrice: 35.70,
    shortTerm: {
      amount: 860,
      coins: 39.25,
    },
    longTerm: {
      amount: 1050,
      coins: 39.25,
    },
    amountToSell: null,
    selected: false,
  },
  {
    id: '15',
    asset: {
      name: 'Cosmos',
      symbol: 'ATOM',
      logo: 'https://cryptologos.cc/logos/cosmos-atom-logo.png',
    },
    quantity: 124.2,
    avgPrice: 11.85,
    currentPrice: 8.70,
    shortTerm: {
      amount: -1240,
      coins: 62.1,
    },
    longTerm: {
      amount: -980,
      coins: 62.1,
    },
    amountToSell: null,
    selected: false,
  },
  {
    id: '16',
    asset: {
      name: 'Stellar',
      symbol: 'XLM',
      logo: 'https://cryptologos.cc/logos/stellar-xlm-logo.png',
    },
    quantity: 6250,
    avgPrice: 0.12,
    currentPrice: 0.10,
    shortTerm: {
      amount: -720,
      coins: 3125,
    },
    longTerm: {
      amount: -625,
      coins: 3125,
    },
    amountToSell: null,
    selected: false,
  },
  {
    id: '17',
    asset: {
      name: 'VeChain',
      symbol: 'VET',
      logo: 'https://cryptologos.cc/logos/vechain-vet-logo.png',
    },
    quantity: 18500,
    avgPrice: 0.028,
    currentPrice: 0.032,
    shortTerm: {
      amount: 560,
      coins: 9250,
    },
    longTerm: {
      amount: 740,
      coins: 9250,
    },
    amountToSell: null,
    selected: false,
  },
  {
    id: '18',
    asset: {
      name: 'Algorand',
      symbol: 'ALGO',
      logo: 'https://cryptologos.cc/logos/algorand-algo-logo.png',
    },
    quantity: 3250,
    avgPrice: 0.18,
    currentPrice: 0.15,
    shortTerm: {
      amount: -520,
      coins: 1625,
    },
    longTerm: {
      amount: -490,
      coins: 1625,
    },
    amountToSell: null,
    selected: false,
  },
  {
    id: '19',
    asset: {
      name: 'Filecoin',
      symbol: 'FIL',
      logo: 'https://cryptologos.cc/logos/filecoin-fil-logo.png',
    },
    quantity: 86.3,
    avgPrice: 6.25,
    currentPrice: 4.85,
    shortTerm: {
      amount: -380,
      coins: 43.15,
    },
    longTerm: {
      amount: -420,
      coins: 43.15,
    },
    amountToSell: null,
    selected: false,
  },
  {
    id: '20',
    asset: {
      name: 'Tezos',
      symbol: 'XTZ',
      logo: 'https://cryptologos.cc/logos/tezos-xtz-logo.png',
    },
    quantity: 425,
    avgPrice: 1.45,
    currentPrice: 1.09,
    shortTerm: {
      amount: -460,
      coins: 212.5,
    },
    longTerm: {
      amount: -510,
      coins: 212.5,
    },
    amountToSell: null,
    selected: false,
  },
  {
    id: '21',
    asset: {
      name: 'Aave',
      symbol: 'AAVE',
      logo: 'https://cryptologos.cc/logos/aave-aave-logo.png',
    },
    quantity: 14.2,
    avgPrice: 98.45,
    currentPrice: 110.25,
    shortTerm: {
      amount: 640,
      coins: 7.1,
    },
    longTerm: {
      amount: 580,
      coins: 7.1,
    },
    amountToSell: null,
    selected: false,
  },
  {
    id: '22',
    asset: {
      name: 'Compound',
      symbol: 'COMP',
      logo: 'https://cryptologos.cc/logos/compound-comp-logo.png',
    },
    quantity: 9.8,
    avgPrice: 67.32,
    currentPrice: 52.18,
    shortTerm: {
      amount: -320,
      coins: 4.9,
    },
    longTerm: {
      amount: -380,
      coins: 4.9,
    },
    amountToSell: null,
    selected: false,
  },
  {
    id: '23',
    asset: {
      name: 'Maker',
      symbol: 'MKR',
      logo: 'https://cryptologos.cc/logos/maker-mkr-logo.png',
    },
    quantity: 2.4,
    avgPrice: 1850.25,
    currentPrice: 2145.80,
    shortTerm: {
      amount: 420,
      coins: 1.2,
    },
    longTerm: {
      amount: 510,
      coins: 1.2,
    },
    amountToSell: null,
    selected: false,
  },
  {
    id: '24',
    asset: {
      name: 'Yearn.finance',
      symbol: 'YFI',
      logo: 'https://cryptologos.cc/logos/yearn-finance-yfi-logo.png',
    },
    quantity: 0.12,
    avgPrice: 12500.00,
    currentPrice: 10870.45,
    shortTerm: {
      amount: -280,
      coins: 0.06,
    },
    longTerm: {
      amount: -310,
      coins: 0.06,
    },
    amountToSell: null,
    selected: false,
  },
  {
    id: '25',
    asset: {
      name: 'Decentraland',
      symbol: 'MANA',
      logo: 'https://cryptologos.cc/logos/decentraland-mana-logo.png',
    },
    quantity: 1850,
    avgPrice: 0.48,
    currentPrice: 0.39,
    shortTerm: {
      amount: -520,
      coins: 925,
    },
    longTerm: {
      amount: -560,
      coins: 925,
    },
    amountToSell: null,
    selected: false,
  },
];

export const initialHarvestingResult: HarvestingResult = {
  before: {
    shortTerm: {
      profits: 1540,
      losses: -743,
      netGains: 787,
    },
    longTerm: {
      profits: 1200,
      losses: -650,
      netGains: 550,
    },
    totalRealizedGains: 1337,
  },
  after: {
    shortTerm: {
      profits: 1540,
      losses: -2343,
      netGains: -987,
    },
    longTerm: {
      profits: 1200,
      losses: -3650,
      netGains: -2450,
    },
    totalRealizedGains: -2353,
  },
  savings: 862,
};