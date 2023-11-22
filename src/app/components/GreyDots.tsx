import { DotFilledIcon } from "@radix-ui/react-icons";
export default function GreyDots({ count }: { count: number }) {
  const renderDots = () => {
    const dots = [];
    for (let i = 0; i < count; i++) {
      dots.push(<DotFilledIcon key={i} className="text-gray-800" />);
    }
    return dots;
  };

  if (count == 0) return null;

  return <div className="flex">{renderDots()}</div>;
}
