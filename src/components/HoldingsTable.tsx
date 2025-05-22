import { useState } from 'react';
import { Holding } from '@/types';
import { ArrowUpDown, Check, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';

interface HoldingsTableProps {
  holdings: Holding[];
  selectAll: boolean;
  onSelectAll: (checked: boolean) => void;
  onSelectHolding: (id: string, checked: boolean) => void;
  onAmountToSellChange: (id: string, value: number | null) => void;
  onSort: (key: keyof Holding | 'shortTermAmount' | 'longTermAmount' | 'currentValue', direction: 'asc' | 'desc') => void;
}

export default function HoldingsTable({
  holdings,
  selectAll,
  onSelectAll,
  onSelectHolding,
  onAmountToSellChange,
  onSort,
}: HoldingsTableProps) {
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Holding | 'shortTermAmount' | 'longTermAmount' | 'currentValue';
    direction: 'asc' | 'desc';
  } | null>(null);

  const handleSort = (key: keyof Holding | 'shortTermAmount' | 'longTermAmount' | 'currentValue') => {
    let direction: 'asc' | 'desc' = 'asc';
    
    if (sortConfig && sortConfig.key === key) {
      direction = sortConfig.direction === 'asc' ? 'desc' : 'asc';
    }
    
    setSortConfig({ key, direction });
    onSort(key, direction);
  };

  const getSortIcon = (key: keyof Holding | 'shortTermAmount' | 'longTermAmount' | 'currentValue') => {
    if (sortConfig && sortConfig.key === key) {
      return sortConfig.direction === 'asc' ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />;
    }
    return <ArrowUpDown className="h-4 w-4" />;
  };

  const formatCurrency = (value: number) => {
    return value.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const formatCoinAmount = (value: number, symbol: string) => {
    return `${value.toLocaleString('en-US', { 
      minimumFractionDigits: 2,
      maximumFractionDigits: symbol === 'BTC' || symbol === 'ETH' ? 4 : 2
    })} ${symbol}`;
  };

  const handleAmountChange = (id: string, value: string, maxAmount: number) => {
    const cleanValue = value.replace(/[^0-9.]/g, '');
    const numValue = parseFloat(cleanValue);
    
    if (cleanValue === '') {
      onAmountToSellChange(id, null);
    } else if (!isNaN(numValue) && numValue >= 0) {
      // Ensure the amount doesn't exceed available balance
      const finalAmount = Math.min(numValue, maxAmount);
      onAmountToSellChange(id, finalAmount);
    }
  };

  return (
    <div className="w-full overflow-x-auto rounded-lg border border-border">
      <table className="w-full">
        <thead className="bg-muted">
          <tr>
            <th className="px-4 py-4 text-left">
              <Checkbox 
                id="select-all"
                className="rounded"
                checked={selectAll}
                onCheckedChange={onSelectAll}
              />
            </th>
            <th 
              className="px-4 py-4 text-left cursor-pointer"
              onClick={() => handleSort('asset')}
            >
              <div className="flex items-center gap-1">
                Asset
                {getSortIcon('asset')}
              </div>
            </th>
            <th 
              className="px-4 py-4 text-left cursor-pointer"
              onClick={() => handleSort('currentValue')}
            >
              <div className="flex items-center gap-1 justify-end">
                <div className="flex flex-col items-center">
                  <span>Holdings</span>
                  <span className="text-xs text-muted-foreground">Current Market Rate</span>
                </div>
                {getSortIcon('currentValue')}
              </div>
            </th>
            <th className="px-4 py-4 text-right">Total Current Value</th>
            <th 
              className="px-4 py-4 text-center cursor-pointer"
              onClick={() => handleSort('shortTermAmount')}
            >
              <div className="flex items-center gap-1 justify-center">
                Short-term
                {getSortIcon('shortTermAmount')}
              </div>
            </th>
            <th 
              className="px-4 py-4 text-center cursor-pointer"
              onClick={() => handleSort('longTermAmount')}
            >
              <div className="flex items-center gap-1 justify-center">
                Long-Term
                {getSortIcon('longTermAmount')}
              </div>
            </th>
            <th className="px-4 py-4 text-center">Amount to Sell</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {holdings.map((holding) => (
            <tr key={holding.id} className="hover:bg-muted/50">
              <td className="px-4 py-4">
                <Checkbox 
                  id={`select-${holding.id}`}
                  className="rounded"
                  checked={holding.selected}
                  onCheckedChange={(checked) => onSelectHolding(holding.id, checked === true)}
                />
              </td>
              <td className="px-4 py-4">
                <div className="flex items-center gap-2">
                  <img 
                    src={holding.asset.logo} 
                    alt={holding.asset.name} 
                    className="w-8 h-8"
                  />
                  <div>
                    <div className="font-medium">{holding.asset.name}</div>
                    <div className="text-sm text-muted-foreground">{holding.asset.symbol}</div>
                  </div>
                </div>
              </td>
              <td className="px-4 py-4">
                <div className="text-right">
                  <div>{formatCoinAmount(holding.quantity, holding.asset.symbol)}</div>
                  <div className="text-sm text-muted-foreground">
                    $ {holding.avgPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}/{holding.asset.symbol}
                  </div>
                </div>
              </td>
              <td className="px-4 py-4 text-right">
                {formatCurrency(holding.quantity * holding.currentPrice)}
              </td>
              <td className="px-4 py-4">
                <div className="flex flex-col items-center">
                  <div className={cn(
                    "font-medium",
                    holding.shortTerm.amount < 0 
                      ? "text-red-600 dark:text-red-400" 
                      : "text-green-600 dark:text-green-400"
                  )}>
                    {holding.shortTerm.amount < 0 ? '-' : '+'}{formatCurrency(Math.abs(holding.shortTerm.amount))}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {formatCoinAmount(holding.shortTerm.coins, holding.asset.symbol)}
                  </div>
                </div>
              </td>
              <td className="px-4 py-4">
                <div className="flex flex-col items-center">
                  <div className={cn(
                    "font-medium",
                    holding.longTerm.amount < 0 
                      ? "text-red-600 dark:text-red-400" 
                      : "text-green-600 dark:text-green-400"
                  )}>
                    {holding.longTerm.amount < 0 ? '-' : '+'}{formatCurrency(Math.abs(holding.longTerm.amount))}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {formatCoinAmount(holding.longTerm.coins, holding.asset.symbol)}
                  </div>
                </div>
              </td>
              <td className="px-4 py-4">
                <div className="w-32 mx-auto flex items-center">
                  {holding.selected ? (
                    <Input
                      type="text"
                      value={holding.amountToSell !== null ? formatCoinAmount(holding.amountToSell, holding.asset.symbol) : ''}
                      onChange={(e) => handleAmountChange(
                        holding.id, 
                        e.target.value,
                        holding.shortTerm.coins + holding.longTerm.coins
                      )}
                      placeholder={`Enter ${holding.asset.symbol} amount`}
                      className="text-center"
                    />
                  ) : (
                    <div className="w-full text-center">-</div>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}