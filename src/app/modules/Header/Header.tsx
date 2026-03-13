import Link from "next/link";
import {
  BottomArrow,
  MailIcon,
  PhoneIcon,
  RuIcon,
  UserIcon,
} from "../../../../public/icons";
import Button from "@/app/components/Button";

const Header = () => {
  return (
    <div className="containers">
      <div className="flex items-center justify-between py-[11px]">
        <div className="flex items-center gap-[27px]">
          <Link
            href={"tel:+99890758383833"}
            className="flex items-center gap-[12px] text-black"
          >
            <PhoneIcon />
            +998(90)758383833
          </Link>
          <Link
            href={"mailto:info@bmgsoft.com"}
            className="flex items-center gap-[11px] text-black"
          >
            <MailIcon />
            info@bmgsoft.com
          </Link>
        </div>
        <div className="flex items-center gap-[35px]">
          <div className="flex items-center gap-2">
            <RuIcon />

            <select className="text-[16px] text-black">
              <option value="ru">Русский</option>
              <option value="uz">O‘zbek</option>
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
