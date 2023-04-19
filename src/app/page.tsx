import Image from "next/image";
import { Inter } from "next/font/google";
import { FC } from "react";
import Button from "@/components/ui/Button";

const inter = Inter({ subsets: ["latin"] });

type Page = {};

const Page: FC<Page> = () => {
  return (
    <div>
      <Button size="lg" variant="default">
        Button click
      </Button>
    </div>
  );
};

export default Page;
