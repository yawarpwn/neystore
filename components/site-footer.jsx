import { siteConfig } from '@/config/site'

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer container mt-10">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <div>
          <span className=" font-bold">Nosotros</span>
          <div className="text-sm">
            Somos una empresa dedicada a la fabricación y venta al por mayor y
            menor de&nbsp;juegos didácticos para niños, abastecemos de juegos
            educativos a colegios, nidos, etc. Somos proveedores del estado y
            trabajamos con entidades públicas y privadas.
          </div>
        </div>
        <div className="">
          <span className="font-bold">Atención al cliente</span>
          <div className="text-sm">
            <ul>
              <li>
                <a href="#">Nuestra política</a>
              </li>
              <li>
                <a href="#">Preguntas frecuentes</a>
              </li>
              <li>
                <a href="#">Terminos y condiciones</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>
        </div>
        <div id="text-8" className="widget widget_text">
          <span className="font-bold">Contacto</span>
          <div className="textwidget">
            <ul>
              <li>
                <strong>Correo: </strong>
                <a href="mailto:contacto@intelikidsperu.pe">
                  neyda.mili11@gmail.com
                </a>
              </li>
              <li>
                <strong>Tienda: </strong>
                <span>Av. Argentina 538 - Int 1160 - Lima</span>
              </li>
              <li>
                <strong>Teléfono: </strong>
                <a href="tel:+51971531018">971531018</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <span className=" font-bold">Síguenos:</span>
          <div className="textwidget custom-html-widget">
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            />
            <style
              dangerouslySetInnerHTML={{
                __html:
                  'a.fa {\n padding: 20px;\n font-size: 20px;\n text-align: center;\n text-decoration: none;\n margin: 10px 4px;\n}\na.fa:hover {\n opacity: 0.7;\n}\na.fa-facebook {\n background: #3B5998;\n color: white;\n}\na.fa-youtube {\n background: #bb0000;\n color: white;\n}\na.fa-instagram {\n background: #e95950;\n color: white;\n}',
              }}
            />
            <div>
              {' '}
              <a
                href="https://www.facebook.com/intelikids.pe"
                className="fa fa-facebook"
              />{' '}
              <a
                href="https://www.youtube.com/channel/UCD459yvj5KwsmCnJQkwDwPw/featured"
                className="fa fa-youtube"
              />{' '}
              <a
                href="https://www.instagram.com/intelikids.pe/"
                className="fa fa-instagram"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 md:px-8 md:py-0">
        <div className="container flex flex-col items-center justify-center mb-8">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            ©{year} {siteConfig.name}. Todos los derechos reservados. Hecho con
            mucho ❤️
          </p>
        </div>
      </div>
    </footer>
  )
}
