import { useState } from 'react';
import { ChevronUp, ChevronDown, Info } from 'lucide-react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ImportantNotes() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Accordion 
      type="single" 
      defaultValue="notes" 
      className="w-full border border-border rounded-lg sm:rounded-xl mb-4 sm:mb-6 bg-card"
    >
      <AccordionItem value="notes" className="border-none">
        <AccordionTrigger className="flex justify-between items-center p-3 sm:p-4 text-left hover:no-underline bg-white dark:bg-zinc-900">
          <div className="flex items-center gap-2">
            <Info className="h-4 sm:h-5 w-4 sm:w-5 text-blue-600 dark:text-blue-400" />
            <span className="text-sm sm:text-base font-medium ml-2 sm:ml-6 text-muted-foreground dark:text-white">
              Important Notes & Disclaimers
            </span>
          </div>
        </AccordionTrigger>

        <AccordionContent className="px-3 sm:px-4 pb-3 sm:pb-4">
          <ul className="list-disc ml-4 sm:ml-6 space-y-2 text-sm sm:text-base text-muted-foreground">
            <li>Tax-loss harvesting is currently not allowed under Indian tax regulations. Please consult your tax advisor before making any decisions.</li>
            <li>Tax harvesting does not apply to derivatives or futures. These are handled separately as business income under tax rules.</li>
            <li>Price and market value data is fetched from Coingecko, not from individual exchanges. As a result, values may slightly differ from the ones on your exchange.</li>
            <li>Some countries do not have a short-term / long-term bifurcation. For now, we are calculating everything as long-term.</li>
            <li>Only realized losses are considered for harvesting. Unrealized losses in held assets are not counted.</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}