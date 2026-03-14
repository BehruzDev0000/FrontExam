import Link from "next/link";
import {
  MailIcon,
  PhoneIcon,
  RuIcon,
  UserIcon,
} from "@/../public/icons";
import Button from "@/components/Button";

const Header = () => {
  return (
    <div className="containers">
      <div className="flex items-center justify-between py-2.75">
        <div className="flex items-center gap-6.75">
          <Link
            href={"tel:+99890758383833"}
            className="flex items-center gap-3 text-black"
          >
            <PhoneIcon />
            +998(90)758383833
          </Link>
          <Link
            href={"mailto:info@bmgsoft.com"}
            className="flex items-center gap-2.75 text-black"
          >
            <MailIcon />
            info@bmgsoft.com
          </Link>
        </div>
        <div className="flex items-center gap-8.75">
          <div className="flex items-center gap-2">
            <RuIcon />

            <select className="text-[16px] text-black">
              <option value="ru">Русский</option>
              <option value="uz">Uzbek</option>
              <option value="en">English</option>
            </select>
          </div>
          <Button extraStyle="py-[3px]! px-[8px]! text-white gap-[6px]! text-[10px]">
            <UserIcon />
            Вход в аккаунт
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
