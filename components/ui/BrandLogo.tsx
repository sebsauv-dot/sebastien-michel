import Image from "next/image";

import Card from "../ui/Card";

type Props = {
  logo: string;
  name: string;
};

export default function BrandLogo({
  logo,
  name,
}: Props) {
  return (
    <Card
      className="
      flex
      h-40
      flex-col
      items-center
      justify-center
      gap-5
      p-6
      "
    >
      <Image
        src={logo}
        alt={name}
        width={70}
        height={70}
      />

      <span className="font-semibold">
        {name}
      </span>
    </Card>
  );
}