import { Fragment } from 'react';
import { ScrollArea } from '../ui/scroll-area';

type PageContainerTypes = {
  children: React.ReactNode;
  scrollable?: boolean;
};
export default function PageContainer({
  children,
  scrollable
}: PageContainerTypes) {
  return (
    <Fragment>
      {scrollable ? (
        <ScrollArea className="h-[calc(100dvh-52px)]">
          {' '}
          <div className="h-full p-4 md:px-8">{children}</div>
        </ScrollArea>
      ) : (
        <div className="h-full p-4 md:px-8">{children}</div>
      )}
    </Fragment>
  );
}
