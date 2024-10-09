import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { HiEllipsisVertical } from "react-icons/hi2";
import { useOutsidClick } from "../hooks/useoOutsideClick";

type MenusContextValues = {
  openId: string;
  close: () => void;
  open: (id: string) => void;
  position: { x: number; y: number } | null;
  setPosition: (position: { x: number; y: number }) => void;
};
const MenusContext = createContext({} as MenusContextValues);

function Menus({ children }: { children: ReactNode }) {
  const [openId, setOpenId] = useState("");
  const [position, setPosition] = useState<{ x: number; y: number } | null>(
    null
  );

  useEffect(() => {
    window.addEventListener("scroll", () => setOpenId(""));
  }, []);

  const close = () => setOpenId("");
  const open = (id: string) => setOpenId(id);

  return (
    <MenusContext.Provider
      value={{ openId, close, open, position, setPosition }}
    >
      {children}
    </MenusContext.Provider>
  );
}

function Menu({ children }: { children: ReactNode }) {
  return <div className="flex items-center justify-end">{children}</div>;
}

function Toggle({ id }: { id: string }) {
  const { openId, close, open, setPosition } = useContext(MenusContext);

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    const rect = (e.target as HTMLElement)
      .closest("button")!
      .getBoundingClientRect();

    setPosition({
      x: window.innerWidth - rect.width - rect.x + 18,
      y: rect.y + rect.height - 20,
    });

    if (openId === "" || openId !== id) {
      open(id);
    } else {
      close();
    }
  }

  return (
    <button
      className="bg-none border-none p-2 rounded-sm transition-all translate-x-3 hover:bg-gray-200 dark:hover:bg-slate-600"
      onClick={handleClick}
    >
      <HiEllipsisVertical className="w-10 h-10 text-gray-700 dark:text-slate-300" />
    </button>
  );
}

function List({ id, children }: { id: string; children: ReactNode }) {
  const { openId, position, close } = useContext(MenusContext);
  const ref = useOutsidClick(close, false);

  if (openId !== id) return null;

  return createPortal(
    <div ref={ref}>
      <ul
        className="fixed list-none bg-gray-100 dark:bg-gray-600 dark:text-slate-200 shadow-sm rounded-md"
        style={{ right: position?.x, top: position?.y }}
      >
        {children}
      </ul>
    </div>,
    document.body
  );
}

type ButtonProps = {
  children: ReactNode;
  icon: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};
function Button({ children, icon, onClick, disabled }: ButtonProps) {
  const { close } = useContext(MenusContext);

  function handleClick() {
    onClick?.();
    close();
  }

  return (
    <li>
      <button
        className="w-full text-left bg-none border-none py-5 px-10 text-2xl transition-all flex items-center gap-6 hover:bg-gray-300 dark:hover:bg-gray-500"
        onClick={handleClick}
        disabled={disabled ? true : false}
      >
        <span className="w-6 h-6 text-gray-500 dark:text-slate-200 transition-all">
          {icon}
        </span>
        <span>{children}</span>
      </button>
    </li>
  );
}

Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;

export default Menus;
