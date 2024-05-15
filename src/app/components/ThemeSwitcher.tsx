import { useTheme } from "next-themes";
import { VscColorMode } from "react-icons/vsc";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      className="text-2xl"
      onClick={toggleTheme}
      aria-label="theme change button"
    >
      <VscColorMode />
    </button>
  );
};
