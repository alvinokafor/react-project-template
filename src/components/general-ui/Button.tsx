import { Button as RadixButton } from "@radix-ui/themes";
import { LoadingIcon } from "@/assets/icons";

interface IButtonProps {
  text: string;
  handleClick: () => void;
  isDisabled: boolean;
  isPending: boolean;
  variant: "soft" | "ghost" | "solid" | "surface";
}

export default function Button({
  text,
  handleClick,
  isDisabled,
  isPending,
  variant,
}: IButtonProps) {
  return (
    <RadixButton variant={variant} disabled={isDisabled} onClick={handleClick}>
      {!isPending ? <LoadingIcon /> : text}
    </RadixButton>
  );
}
