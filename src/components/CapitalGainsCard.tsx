import { CapitalGains } from '@/types';
import { cn } from '@/lib/utils';
import { PartyPopper } from 'lucide-react';

interface CapitalGainsCardProps {
  title: string;
  data: CapitalGains;
  isAfter?: boolean;
  savings?: number;
}

export default function CapitalGainsCard({ 
  title, 
  data, 
  isAfter = false,
  savings 
}: CapitalGainsCardProps) {
  const formatCurrency = (value: number) => {
    const absValue = Math.abs(value);
    return value < 0 
      ? `- $ ${absValue.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}` 
      : `$ ${absValue.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
  };

  return (
    <div className={cn(
      "p-4 sm:p-5 rounded-lg",
      isAfter ? "bg-blue-500 dark:bg-blue-700 text-white dark:text-gray-100" : "bg-card-primary"
    )}>
      <h3 className="text-lg sm:text-xl font-medium mb-4">{title}</h3>
      
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        <div>
          <h4 className="text-sm font-medium opacity-80">Short-term</h4>
        </div>
        <div>
          <h4 className="text-sm font-medium opacity-80">Long-term</h4>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-2">
        <div>
          <h4 className="text-xs sm:text-sm opacity-70 mb-1">Profits</h4>
          <p className={cn(
            "text-sm sm:text-base font-semibold", 
            !isAfter && "text-green-600 dark:text-green-400"
          )}>{formatCurrency(data.shortTerm.profits)}</p>
        </div>
        <div>
          <h4 className="text-xs sm:text-sm opacity-70 mb-1">Profits</h4>
          <p className={cn(
            "text-sm sm:text-base font-semibold",
            !isAfter && "text-green-600 dark:text-green-400"
          )}>{formatCurrency(data.longTerm.profits)}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-3">
        <div>
          <h4 className="text-xs sm:text-sm opacity-70 mb-1">Losses</h4>
          <p className={cn(
            "text-sm sm:text-base font-semibold", 
            !isAfter && "text-red-600 dark:text-red-400"
          )}>{formatCurrency(data.shortTerm.losses)}</p>
        </div>
        <div>
          <h4 className="text-xs sm:text-sm opacity-70 mb-1">Losses</h4>
          <p className={cn(
            "text-sm sm:text-base font-semibold",
            !isAfter && "text-red-600 dark:text-red-400"
          )}>{formatCurrency(data.longTerm.losses)}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-3">
        <div>
          <h4 className="text-xs sm:text-sm opacity-70 mb-1">Net Capital Gains</h4>
          <p className={cn(
            "text-sm sm:text-base font-semibold",
            !isAfter && (data.shortTerm.netGains >= 0 
              ? "text-green-600 dark:text-green-400" 
              : "text-red-600 dark:text-red-400")
          )}>{formatCurrency(data.shortTerm.netGains)}</p>
        </div>
        <div>
          <h4 className="text-xs sm:text-sm opacity-70 mb-1">Net Capital Gains</h4>
          <p className={cn(
            "text-sm sm:text-base font-semibold",
            !isAfter && (data.longTerm.netGains >= 0 
              ? "text-green-600 dark:text-green-400" 
              : "text-red-600 dark:text-red-400")
          )}>{formatCurrency(data.longTerm.netGains)}</p>
        </div>
      </div>
      
      <div className="mt-4 sm:mt-5 pt-3 border-t border-white/20">
        <div className="flex justify-between items-center">
          <h4 className="text-sm sm:text-base font-medium">
            {isAfter ? "Effective Capital Gains:" : "Realised Capital Gains:"}
          </h4>
          <p className={cn(
            "text-xl sm:text-2xl font-bold",
            isAfter 
              ? ""
              : data.totalRealizedGains >= 0 
                ? "text-green-600 dark:text-green-400" 
                : "text-red-600 dark:text-red-400"
          )}>
            {formatCurrency(data.totalRealizedGains)}
          </p>
        </div>
      </div>
      
      {isAfter && savings && savings > 0 && (
        <div className="mt-3 sm:mt-4 flex items-center gap-2 text-yellow-300">
          <PartyPopper className="h-4 sm:h-5 w-4 sm:w-5" />
          <span className="text-xs sm:text-sm">You are going to save upto {formatCurrency(savings)}</span>
        </div>
      )}
    </div>
  );
}