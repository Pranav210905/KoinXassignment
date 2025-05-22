import { useState } from 'react';
import { initialHoldings } from '@/data/mockData';
import { useHarvesting } from '@/hooks/useHarvesting';

import Header from '@/components/Header';
import ImportantNotes from '@/components/ImportantNotes';
import CapitalGainsCard from '@/components/CapitalGainsCard';
import HoldingsTable from '@/components/HoldingsTable';
import ShowMoreButton from '@/components/ShowMoreButton';
import Logo from '@/components/Logo';
import ThemeToggle from '@/components/ThemeToggle';

function App() {
  const {
    visibleHoldings,
    selectAll,
    harvestingResult,
    showMoreVisible,
    handleShowMore,
    handleSelectAll,
    handleSelectHolding,
    handleAmountToSellChange,
    sortHoldings
  } = useHarvesting(initialHoldings);

  return (
    <div className="min-h-screen bg-background">
      <div className="py-2 sm:py-4 px-4 sm:px-6 border-b bg-card">
        <div className="flex justify-between items-center max-w-[2000px] mx-auto">
          <Logo />
          <ThemeToggle />
        </div>
      </div>
      
      <div className="container mx-auto px-2 sm:px-4 md:px-6 py-4 sm:py-6 max-w-[2000px]">
        <Header />
        <ImportantNotes />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <CapitalGainsCard 
            title="Pre Harvesting" 
            data={harvestingResult.before} 
          />
          <CapitalGainsCard 
            title="After Harvesting" 
            data={harvestingResult.after} 
            isAfter={true} 
            savings={harvestingResult.savings}
          />
        </div>
        
        <div className="bg-card p-3 sm:p-4 md:p-6 rounded-lg shadow-sm mb-4">
          <h2 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Holdings</h2>
          
          <HoldingsTable 
            holdings={visibleHoldings}
            selectAll={selectAll}
            onSelectAll={handleSelectAll}
            onSelectHolding={handleSelectHolding}
            onAmountToSellChange={handleAmountToSellChange}
            onSort={sortHoldings}
          />
          
          <ShowMoreButton 
            onClick={handleShowMore} 
            visible={showMoreVisible}
          />
        </div>
      </div>
    </div>
  );
}

export default App;