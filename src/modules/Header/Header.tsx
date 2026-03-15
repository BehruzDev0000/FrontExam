"use client"

import { usePathname, useRouter } from "@/i18n/navigation";
import {
  MailIcon,
  PhoneIcon,
  RuIcon,
  UserIcon,
} from "@/../public/icons";
import Button from "@/components/Button";
import { useLocale, useTranslations } from "next-intl";

const Header = () => {

  const t = useTranslations("Header");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
      <div className="containers">
        <div className="flex items-center justify-between py-2.75">
          <div className="flex items-center gap-6.75">
            <a
                href={"tel:+99890758383833"}
                className="flex items-center gap-3 text-black"
            >
              <PhoneIcon />
              +998(90)758383833
            </a>
            <a
                href={"mailto:info@bmgsoft.com"}
                className="flex items-center gap-2.75 text-black"
            >
              <MailIcon />
              info@bmgsoft.com
            </a>
          </div>
          <div className="flex items-center gap-8.75">
            <div className="flex items-center gap-2">
              <RuIcon />
              <select
                className="text-[16px] text-black"
                value={locale}
                onChange={(event) => {
                  router.replace(pathname, {locale: event.target.value as "uz" | "ru" | "en"});
                }}
              >
                <option value="ru">
                  {t("languages.ru")}
                </option>
                <option value="uz">
                  {t("languages.uz")}
                </option>
                <option value="en">
                  {t("languages.en")}
                </option>
              </select>
            </div>
            <Button extraStyle="py-[3px]! px-[8px]! text-white gap-[6px]! text-[10px]">
              <UserIcon />
              {t("SignIn")}
            </Button>
          </div>
        </div>
      </div>
  );
};

export default Header;