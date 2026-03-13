import { useState } from "react";
import { BottomArrow } from "../../../public/icons";

const languages = [
  { value: "ru", label: "Русский", flag: "🇷🇺" },
  { value: "uz", label: "O'zbekcha", flag: "🇺🇿" },
  { value: "en", label: "English", flag: "🇺🇸" },
];

export default function LanguageSelect() {
  const [selected, setSelected] = useState(languages[0]);
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-48">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-2 border rounded-lg w-full bg-white"
      >
        <span>{selected.flag}</span>
        <span>{selected.label}</span>
        <span className="ml-auto"><BottomArrow/></span>
      </button>

      {open && (
        <ul className="absolute z-10 mt-1 w-full bg-white border rounded-lg shadow-lg">
          {languages.map((lang) => (
            <li
              key={lang.value}
              onClick={() => { setSelected(lang); setOpen(false); }}
              className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer"
            >
              <span>{lang.flag}</span>
              <span>{lang.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}