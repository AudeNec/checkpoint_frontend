import { ArrowUpRightIcon, Loader } from "lucide-react";
import { Empty, EmptyHeader, EmptyTitle } from "./ui/empty";
import { Button } from "./ui/button";

export function EmptyPage({ isLoading = false }: { isLoading?: boolean }) {
  return (
    <Empty>
      <EmptyHeader>
        {isLoading && <Loader />}
        <EmptyTitle>
          {isLoading ? "Loading..." : "This page is empty"}
        </EmptyTitle>
      </EmptyHeader>
      <Button
        variant="link"
        asChild
        className="text-muted-foreground"
        size="sm"
      >
        <a href="#">
          Learn More <ArrowUpRightIcon />
        </a>
      </Button>
    </Empty>
  );
}
