const Footer = () => (
  <footer className="relative bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-12 shadow-2xl overflow-hidden">
    <div className="absolute inset-0 pointer-events-none">
      <div className="w-72 h-72 bg-purple-700 opacity-20 rounded-full blur-3xl animate-pulse-slow absolute -top-24 -left-24"></div>
      <div className="w-72 h-72 bg-blue-500 opacity-20 rounded-full blur-3xl animate-pulse-slow absolute -bottom-24 -right-24"></div>
    </div>
    <div className="relative container mx-auto px-4 z-10">
      <div className="flex flex-col md:flex-row md:justify-between gap-10">
        {/* Logo y descripción */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-purple-400 mb-2">Devasive</h2>
          <p className="text-sm text-gray-400 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-purple-400 transition" aria-label="Twitter">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195A4.92 4.92 0 0 0 16.616 3c-2.73 0-4.942 2.21-4.942 4.932 0 .386.045.763.127 1.124C7.728 8.807 4.1 6.884 1.671 3.965c-.423.722-.666 1.561-.666 2.475 0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.237-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.057 0 14.009-7.496 14.009-13.986 0-.213-.005-.425-.014-.636A9.936 9.936 0 0 0 24 4.557z"/></svg>
            </a>
            <a href="#" className="hover:text-purple-400 transition" aria-label="Facebook">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.597 0 0 .592 0 1.326v21.348C0 23.408.597 24 1.326 24H12.82v-9.294H9.692V11.01h3.127V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.696h-3.12V24h6.116C23.403 24 24 23.408 24 22.674V1.326C24 .592 23.403 0 22.675 0"/></svg>
            </a>
            <a href="#" className="hover:text-purple-400 transition" aria-label="Instagram">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.782 2.225 7.148 2.163 8.414 2.105 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.13 4.602.402 3.635 1.37 2.668 2.338 2.396 3.511 2.338 4.788 2.279 6.068 2.266 6.477 2.266 12c0 5.523.013 5.932.072 7.212.058 1.277.33 2.45 1.297 3.418.967.967 2.14 1.239 3.417 1.297 1.28.059 1.689.072 7.212.072s5.932-.013 7.212-.072c1.277-.058 2.45-.33 3.417-1.297.967-.967 1.239-2.14 1.297-3.417.059-1.28.072-1.689.072-7.212s-.013-5.932-.072-7.212c-.058-1.277-.33-2.45-1.297-3.417C19.45.402 18.277.13 17 .072 15.72.013 15.311 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
            </a>
          </div>
        </div>
        {/* Enlaces rápidos */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-3 text-purple-300">Enlaces rápidos</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-purple-400 transition-all">Inicio</a></li>
            <li><a href="#" className="hover:text-purple-400 transition-all">Servicios</a></li>
            <li><a href="#" className="hover:text-purple-400 transition-all">Proyectos</a></li>
            <li><a href="#" className="hover:text-purple-400 transition-all">Blog</a></li>
            <li><a href="#" className="hover:text-purple-400 transition-all">Contacto</a></li>
          </ul>
        </div>
        {/* Información de contacto */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-3 text-purple-300">Contacto</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <span className="block">Email:</span>
              <a href="mailto:info@devasive.com" className="hover:text-purple-400 transition-all">info@devasive.com</a>
            </li>
            <li>
              <span className="block">Teléfono:</span>
              <span className="text-gray-400">+34 123 456 789</span>
            </li>
            <li>
              <span className="block">Dirección:</span>
              <span className="text-gray-400">Lorem ipsum dolor sit amet, 12345, Ciudad</span>
            </li>
          </ul>
        </div>
      </div>
      {/* Línea divisoria y derechos */}
      <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between">
        <span className="text-xs tracking-wide font-light">&copy; {new Date().getFullYear()} <span className="font-semibold text-purple-400">Devasive</span>. Todos los derechos reservados.</span>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="transition-all duration-300 relative group">
            <span className="group-hover:text-purple-400">Política de privacidad</span>
            <span className="block h-0.5 bg-purple-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </a>
          <a href="#" className="transition-all duration-300 relative group">
            <span className="group-hover:text-purple-400">Términos de uso</span>
            <span className="block h-0.5 bg-purple-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
