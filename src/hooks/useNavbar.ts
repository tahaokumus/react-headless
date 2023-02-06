import { MouseEvent, useState } from "react";

export default function useNavbar() {
  const [activeMenuIndex, setActiveMenuIndex] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const setMenuIndex = (e: MouseEvent) => {
    const index = Array.from(e.currentTarget?.parentElement?.children ?? []).indexOf(
      e.currentTarget,
    );
    setActiveMenuIndex(index);
  };

  const onHamburgerClick = () => {
    document.body.classList.toggle("overflow-hidden", !isOpen);
    setIsOpen(!isOpen);
  };

  const handleMouseLeave = () => {
    setActiveMenuIndex(null);
  };
  const handleMouseEnter = (e: MouseEvent) => {
    if (!isOpen) {
      setMenuIndex(e);
    }
  };

  const onMenuClick = (e: MouseEvent) => {
    console.log(e);
  };

  return {
    handleMouseEnter,
    isOpen,
    onHamburgerClick,
    handleMouseLeave,
    activeMenuIndex,
    onMenuClick,
  };
}
