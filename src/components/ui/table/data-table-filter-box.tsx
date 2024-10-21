'use client';

import { Options } from 'nuqs';
import { useMemo } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '../popover';
import { Button } from '../button';
import { PlusCircledIcon } from '@radix-ui/react-icons';
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator
} from '../command';
import { CommandEmpty } from 'cmdk';
import { CheckIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Separator } from '../separator';
import { Badge } from '../badge';

interface FilterOption {
  value: string;
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface FilterBoxProps {
  filterKey: string;
  title: string;
  options: FilterOption[];
  setFilterValue: (
    value: string | ((old: string) => string | null) | null,
    options?: Options<any> | undefined
  ) => Promise<URLSearchParams>;
  filterValue: string;
}

export function DataTableFilterBox({
  filterKey,
  title,
  options,
  setFilterValue,
  filterValue
}: FilterBoxProps) {
  const selectedValuesSet = useMemo(() => {
    if (!filterValue) return new Set<string>();
    const values = filterValue.split('.');
    return new Set(values.filter((value) => value !== ''));
  }, [filterValue]);

  const handleSelect = (value: string) => {
    const newSet = new Set(selectedValuesSet);
    if (newSet.has(value)) {
      newSet.delete(value);
    } else {
      newSet.add(value);
    }
    setFilterValue(Array.from(newSet).join('.') || null);
  };

  const resetFilter = () => setFilterValue(null);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          <PlusCircledIcon className="mr-2 h-4 w-4" />
          {title}
          {selectedValuesSet.size > 0 && (
            <>
              <Separator orientation="vertical" className="mx-2 h-4" />
              {/* <Badge
                variant="secondary"
                className="rounded-sm px-1 font-normal lg:hidden"
              >
                {selectedValuesSet.size}
              </Badge> */}
              <div className="hidden space-x-1 lg:flex">
                {selectedValuesSet.size > 2 ? (
                  <Badge
                    variant="secondary"
                    className="rounded-sm px-1 font-normal"
                  >
                    {selectedValuesSet.size} selected
                  </Badge>
                ) : (
                  Array.from(selectedValuesSet).map((value) => (
                    <Badge
                      key={value}
                      variant="secondary"
                      className="rounded-sm px-1 font-normal"
                    >
                      {' '}
                      {options.find((option) => option.value === value)
                        ?.label || value}
                    </Badge>
                  ))
                )}
              </div>
            </>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0" align="start">
        <Command>
          <CommandInput placeholder={title} />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  key={option.value}
                  onSelect={() => handleSelect(option.value)}
                >
                  <div
                    className={cn(
                      'mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary',
                      selectedValuesSet.has(option.value)
                        ? 'bg-primary text-primary-foreground'
                        : 'opacity-50 [&_svg]:invisible'
                    )}
                  >
                    <CheckIcon className="h-4 w-4" aria-hidden="true" />
                  </div>
                  {option.icon && (
                    <option.icon
                      className="mr-2 h-4 w-4 text-muted-foreground"
                      aria-hidden="true"
                    />
                  )}
                  <span>{option.label}</span>
                </CommandItem>
              ))}
            </CommandGroup>
            {selectedValuesSet.size > 0 && (
              <>
                <CommandSeparator />
                <CommandGroup>
                  <CommandItem
                    onSelect={resetFilter}
                    className="justify-center text-center"
                  >
                    Clear filters
                  </CommandItem>
                </CommandGroup>
              </>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
