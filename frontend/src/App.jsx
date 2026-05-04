import logoFav from './assets/logozodev-fav.png'
import logoWordmark from './assets/LogozoDev Logo White.png'

function GlobeIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.25 21.898C6.15 21.164 2.4 17 2.4 12c0-.588.056-1.163.162-1.72l6.688 6.688v1.2c0 .663.537 1.2 1.2 1.2l.3 2.53zm8.614-3.155C19.003 18.069 17.73 17.4 16.8 17.4h-1.2v-3.6c0-.663-.537-1.2-1.2-1.2H7.2V10.2h2.4c.663 0 1.2-.537 1.2-1.2V6.6h2.4c1.325 0 2.4-1.075 2.4-2.4V3.73C17.977 5.04 20.4 8.231 20.4 12c0 2.45-.87 4.7-2.286 6.443l.25.3z"
      />
    </svg>
  )
}

function ArrowRightIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6z"
      />
    </svg>
  )
}

const SOCIAL_LINKS = [
  {
    href: 'https://www.tiktok.com/@logozodev?_r=1&_t=ZS-9658HhkkaH3',
    label: 'TIKTOK',
    delayClass: '[animation-delay:350ms]',
    path: 'M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z',
  },
  {
    href: 'https://www.instagram.com/logozodev?igsh=ZmM1OTVudDRoYmQw',
    label: 'INSTAGRAM',
    delayClass: '[animation-delay:430ms]',
    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
  },
  {
    href: 'https://www.facebook.com/share/1GnvTCj7jM/?mibextid=wwXIfr',
    label: 'FACEBOOK',
    delayClass: '[animation-delay:510ms]',
    path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  },
  {
    href: 'https://www.linkedin.com/company/logozodev/posts/',
    label: 'LINKEDIN',
    delayClass: '[animation-delay:590ms]',
    path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  },
  {
    href: 'https://www.logozodev.com',
    label: 'WEBSITE',
    delayClass: '[animation-delay:670ms]',
    isGlobe: true,
  },
]

export default function App() {
  return (
    <div className="flex w-full max-w-[440px] min-h-screen flex-col items-center justify-center bg-black px-4 pb-12 pt-[60px] font-sans sm:px-5 max-[380px]:pb-9 max-[380px]:pt-[50px]">
      {/* Logo */}
      <div
        className="relative mb-[22px] flex h-[100px] w-[100px] shrink-0 items-center justify-center rounded-full border-[2.5px] border-brand-green opacity-0 animate-fadeD [animation-delay:50ms]"
        aria-hidden
      >
        <div className="flex items-center justify-center">
          <img
            src={logoFav}
            alt="Logozo Dev logo"
            className="h-[50px] w-[50px] -translate-x-1 object-contain"
          />
        </div>
      </div>

      {/* Brand */}
      <div className="mb-3 opacity-0 animate-fadeD [animation-delay:150ms]">
        <img
          src={logoWordmark}
          alt="Logozo Dev"
          className="h-auto w-[230px] object-contain max-[380px]:w-[200px]"
        />
      </div>
      <div className="mb-11 text-[9px] font-normal uppercase tracking-[4px] text-brand-muted opacity-0 animate-fadeD [animation-delay:250ms]">
        Innovate. Build. Grow.
      </div>

      {/* Links */}
      <nav className="flex w-full flex-col gap-3.5" aria-label="Social links">
        {SOCIAL_LINKS.map(({ href, label, delayClass, path, isGlobe }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative flex h-[68px] items-center overflow-hidden rounded-2xl border-[0.5px] border-white/5 bg-[linear-gradient(90deg,rgba(9,14,12,0.96),rgba(3,6,8,0.99))] px-[15px] no-underline opacity-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02),0_8px_26px_rgba(0,0,0,0.48)] transition-all duration-300 hover:border-brand-green/30 hover:shadow-[0_0_0_1px_rgba(62,207,62,0.18),0_0_16px_rgba(62,207,62,0.12)] animate-fadeU ${delayClass}`}
          >
            <div className="pointer-events-none absolute left-4 right-4 top-0 h-px bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,0.22),rgba(255,255,255,0))] opacity-70" />
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-[radial-gradient(circle_at_left,rgba(62,207,62,0.32),rgba(62,207,62,0)_72%)] opacity-60 transition-opacity duration-300 group-hover:opacity-85" />

            <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-[1.5px] border-brand-green bg-black/45 transition-[background-color,border-color,box-shadow] duration-300 group-hover:bg-brand-green/10 group-hover:shadow-[0_0_12px_rgba(62,207,62,0.28)]">
              {isGlobe ? (
                <GlobeIcon className="h-[17px] w-[17px] text-white transition-colors duration-[250ms]" />
              ) : (
                <svg
                  className="h-[17px] w-[17px] fill-white transition-[fill] duration-[250ms]"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path d={path} />
                </svg>
              )}
            </div>
            <div className="relative z-10 mx-[18px] h-8 w-px shrink-0 bg-white/16" />
            <div className="relative z-10 text-[11px] font-semibold uppercase tracking-[6px] text-white/85 transition-colors duration-[250ms] group-hover:text-white max-[380px]:tracking-[5px]">
              {label}
            </div>
            <ArrowRightIcon className="relative z-10 ml-auto mr-0.5 h-[18px] w-[18px] text-brand-green/90 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-brand-green" />
          </a>
        ))}
      </nav>
    </div>
  )
}
