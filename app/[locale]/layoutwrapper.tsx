"use client"

import { usePathname } from '@/i18n/navigation'
import Header from '@/modules/Header/Header'
import Footer from '@/modules/Footer/Footer'

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()

  const hideLayout =
    pathname.includes("signin") || pathname.includes("signup")

  return (
    <>
      {!hideLayout && <Header />}
      {children}
      {!hideLayout && <Footer />}
    </>
  )
}

export default LayoutWrapper