import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';

type CalendarPickerType = {
  className?: React.HTMLAttributes<HTMLDivElement>;
};
export function CalendarDateRangePicker({ className }: CalendarPickerType) {
  return (
    <div>
      <Popover>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>Place content for the popover here.</PopoverContent>
      </Popover>
    </div>
  );
}
