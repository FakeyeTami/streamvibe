import { Card } from "@radix-ui/themes";

export default function CategoryCard(genre: string) {
  return (
    <Card>
      <div></div>
      <div>{genre}</div>
    </Card>
  );
}
