import { useState } from "react";
import {
  useColorMode,
  Switch,
} from "@chakra-ui/react";

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
useState("none");
  return (
    <Switch
    pl="25px"
    color="green"
    isChecked={isDark}
    onChange={toggleColorMode}
  />

  )
}
