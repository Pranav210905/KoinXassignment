import { Button } from '@/components/ui/button';

interface ShowMoreButtonProps {
  onClick: () => void;
  visible: boolean;
}

export default function ShowMoreButton({ onClick, visible }: ShowMoreButtonProps) {
  if (!visible) return null;
  
  return (
    <div className="flex justify-center mt-3 sm:mt-4">
      <Button
        variant="outline"
        className="text-blue-600 dark:text-blue-400 border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950 text-sm sm:text-base"
        onClick={onClick}
      >
        View all
      </Button>
    </div>
  );
}