import { useState } from "react";
import { EyeOpenIcon, EyeClosedIcon } from "@radix-ui/react-icons";

export default function useObfuscationToggle() {
  const [visible, setVisible] = useState(false);

  const icon = visible ? (
    <EyeOpenIcon width={18} height={18} />
  ) : (
    <EyeClosedIcon width={18} height={18} />
  );
  const inputType = visible ? "text" : "password";

  return [inputType, icon, setVisible] as const;
}
