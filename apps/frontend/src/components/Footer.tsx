import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  const { t } = useTranslation()

  const quickLinks = [
    { key: 'home', path: '/' },
    { key: 'courses', path: '/courses' },
    { key: 'news', path: '/news' },
    { key: 'research', path: '/research' },
    { key: 'about', path: '/about' },
    { key: 'contact', path: '/contact' },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">د</span>
              </div>
              <span className="text-xl font-bold">
                {t('home.hero.title')}
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {t(`nav.${link.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.contact')}</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 rtl:space-x-reverse text-gray-300 text-sm">
                <Mail className="w-4 h-4" />
                <span>info@daralrafah.com</span>
              </div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse text-gray-300 text-sm">
                <Phone className="w-4 h-4" />
                <span>+966 50 123 4567</span>
              </div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse text-gray-300 text-sm">
                <MapPin className="w-4 h-4" />
                <span>الرياض، المملكة العربية السعودية</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 {t('home.hero.title')}. {t('footer.rights')}.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
