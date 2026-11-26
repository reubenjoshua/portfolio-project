import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { useTheme } from "../../hooks/useTheme";

export function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line bg-paper text-ink transition hover:bg-blush/50"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
    >
      {isDark ? (
        <HiOutlineSun className="h-[18px] w-[18px]" aria-hidden />
      ) : (
        <HiOutlineMoon className="h-[18px] w-[18px]" aria-hidden />
      )}
    </button>
  );
}
