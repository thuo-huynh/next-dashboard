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
  CommandList
} from '../command';
import { CommandEmpty } from 'cmdk';
import { CheckIcon } from 'lucide-react';

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

  const handleSelect = (value: string) => {};
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          <PlusCircledIcon className="mr-2 h-4 w-4" />
          {title}
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
                  <div>
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
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
