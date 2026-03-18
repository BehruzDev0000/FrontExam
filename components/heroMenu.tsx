import { Link } from '@/i18n/navigation'
import { BasketIcon, HeartIcon, Logo } from '@/public/icons'

import Navbar, { Item } from './Navbar'
import { useTranslations } from 'next-intl'

const HeroMenu = () => {
const t=useTranslations('Hero')
    const menuItems: Item[] = [
      { id: 1, title: t('navbar.menu'),href:'/menu' },
      { id: 2, title: t('navbar.news'),href:'/news' },
      { id: 3, title: t('navbar.booking') ,href:'/booking'},
      { id: 4, title: t('navbar.about') ,href:'/about'},
      { id: 5, title: t('navbar.contact') ,href:'/contacts'},
    ]
  return (
    <div className="flex items-center justify-between">
      <Link href={'/'}>
      <Logo/>
      </Link>
      <div>
      <Navbar items={menuItems}/>
      </div>
      <div className="flex items-center gap-6.5">
      <HeartIcon/>
      <BasketIcon/>
      </div>
      </div>
  )
}

export default HeroMenu