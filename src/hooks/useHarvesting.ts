import { useState, useEffect, useMemo } from 'react';
import { Holding, HarvestingResult } from '@/types';
import { initialHarvestingResult } from '@/data/mockData';

export const useHarvesting = (holdings: Holding[]) => {
  const [visibleCount, setVisibleCount] = useState(5);
  const [selectAll, setSelectAll] = useState(false);
  const [localHoldings, setLocalHoldings] = useState<Holding[]>(holdings);
  const [harvestingResult, setHarvestingResult] = useState<HarvestingResult>(initialHarvestingResult);

  const visibleHoldings = useMemo(() => {
    return localHoldings.slice(0, visibleCount);
  }, [localHoldings, visibleCount]);

  const handleShowMore = () => {
    setVisibleCount(prev => Math.min(prev + 5, localHoldings.length));
  };

  const handleSelectAll = (checked: boolean) => {
    setSelectAll(checked);
    setLocalHoldings(prev => 
      prev.map(holding => ({
        ...holding,
        selected: checked,
        amountToSell: null // Reset amount when selection changes
      }))
    );
  };

  const handleSelectHolding = (id: string, checked: boolean) => {
    setLocalHoldings(prev => 
      prev.map(holding => 
        holding.id === id 
          ? { ...holding, selected: checked, amountToSell: null } // Reset amount when selection changes
          : holding
      )
    );
  };

  const updateHoldingAmounts = (holding: Holding, amountToSell: number | null) => {
    if (amountToSell === null || amountToSell === 0) {
      return {
        ...holding,
        amountToSell: null,
        shortTerm: { ...holding.shortTerm },
        longTerm: { ...holding.longTerm }
      };
    }

    const totalCoins = holding.shortTerm.coins + holding.longTerm.coins;
    if (amountToSell > totalCoins) {
      return holding; // Don't allow selling more than available
    }

    // Calculate the proportion of short-term and long-term coins to sell
    const shortTermRatio = holding.shortTerm.coins / totalCoins;
    const longTermRatio = holding.longTerm.coins / totalCoins;

    const shortTermToSell = amountToSell * shortTermRatio;
    const longTermToSell = amountToSell * longTermRatio;

    // Calculate the new amounts based on current price
    const shortTermAmount = -(shortTermToSell * holding.currentPrice);
    const longTermAmount = -(longTermToSell * holding.currentPrice);

    return {
      ...holding,
      amountToSell,
      shortTerm: {
        coins: shortTermToSell,
        amount: shortTermAmount
      },
      longTerm: {
        coins: longTermToSell,
        amount: longTermAmount
      }
    };
  };

  const handleAmountToSellChange = (id: string, value: number | null) => {
    setLocalHoldings(prev => 
      prev.map(holding => 
        holding.id === id 
          ? updateHoldingAmounts(holding, value)
          : holding
      )
    );
  };

  const calculateHarvestingResult = (holdings: Holding[]): HarvestingResult => {
    const selectedHoldings = holdings.filter(h => h.selected && h.amountToSell !== null);
    
    if (selectedHoldings.length === 0) {
      return initialHarvestingResult;
    }

    const result: HarvestingResult = {
      before: initialHarvestingResult.before,
      after: {
        shortTerm: {
          profits: initialHarvestingResult.before.shortTerm.profits,
          losses: initialHarvestingResult.before.shortTerm.losses,
          netGains: 0
        },
        longTerm: {
          profits: initialHarvestingResult.before.longTerm.profits,
          losses: initialHarvestingResult.before.longTerm.losses,
          netGains: 0
        },
        totalRealizedGains: 0
      },
      savings: 0
    };

    // Add the impact of selling
    selectedHoldings.forEach(holding => {
      if (holding.shortTerm.amount < 0) {
        result.after.shortTerm.losses += holding.shortTerm.amount;
      } else {
        result.after.shortTerm.profits += holding.shortTerm.amount;
      }

      if (holding.longTerm.amount < 0) {
        result.after.longTerm.losses += holding.longTerm.amount;
      } else {
        result.after.longTerm.profits += holding.longTerm.amount;
      }
    });

    // Calculate net gains
    result.after.shortTerm.netGains = result.after.shortTerm.profits + result.after.shortTerm.losses;
    result.after.longTerm.netGains = result.after.longTerm.profits + result.after.longTerm.losses;
    result.after.totalRealizedGains = result.after.shortTerm.netGains + result.after.longTerm.netGains;

    // Calculate tax savings (simplified: 30% of the difference in total realized gains)
    result.savings = Math.abs(
      Math.round((initialHarvestingResult.before.totalRealizedGains - result.after.totalRealizedGains) * 0.3)
    );

    return result;
  };

  useEffect(() => {
    const newHarvestingResult = calculateHarvestingResult(localHoldings);
    setHarvestingResult(newHarvestingResult);
  }, [localHoldings]);

  useEffect(() => {
    const allSelected = localHoldings.length > 0 && localHoldings.every(h => h.selected);
    setSelectAll(allSelected);
  }, [localHoldings]);

  const sortHoldings = (key: keyof Holding | 'shortTermAmount' | 'longTermAmount' | 'currentValue', direction: 'asc' | 'desc') => {
    setLocalHoldings(prev => {
      const sorted = [...prev].sort((a, b) => {
        let valueA, valueB;
        
        switch(key) {
          case 'asset':
            valueA = a.asset.name;
            valueB = b.asset.name;
            break;
          case 'shortTermAmount':
            valueA = a.shortTerm.amount;
            valueB = b.shortTerm.amount;
            break;
          case 'longTermAmount':
            valueA = a.longTerm.amount;
            valueB = b.longTerm.amount;
            break;
          case 'currentValue':
            valueA = a.quantity * a.currentPrice;
            valueB = b.quantity * b.currentPrice;
            break;
          default:
            valueA = a[key as keyof Holding];
            valueB = b[key as keyof Holding];
        }
        
        if (typeof valueA === 'string' && typeof valueB === 'string') {
          return direction === 'asc' 
            ? valueA.localeCompare(valueB)
            : valueB.localeCompare(valueA);
        }
        
        return direction === 'asc'
          ? Number(valueA) - Number(valueB)
          : Number(valueB) - Number(valueA);
      });
      
      return sorted;
    });
  };

  return {
    visibleHoldings,
    selectAll,
    harvestingResult,
    showMoreVisible: visibleCount < localHoldings.length,
    handleShowMore,
    handleSelectAll,
    handleSelectHolding,
    handleAmountToSellChange,
    sortHoldings
  };
};