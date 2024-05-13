import { useTheme } from "next-themes";
import { VscColorMode } from "react-icons/vsc";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <button
        className={`${theme === "light" && "hidden"} text-xl`}
        onClick={() => setTheme("light")}
      >
        <VscColorMode />
      </button>
      <button
        className={`${theme === "dark" && "hidden"} text-xl`}
        onClick={() => setTheme("dark")}
      >
        <VscColorMode />
      </button>
    </div>
  );
};
