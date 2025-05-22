import { ChevronDown } from 'lucide-react';

export default function Header() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center w-full mb-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2 sm:mb-0">
          <div className="text-2xl sm:text-3xl font-bold">Tax Harvesting</div>
          <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
            How it works?
          </a>
        </div>
      </div>
    </div>
  );
}