import React from 'react';
import './footer.css';


function Footer() {
    return (
        <footer class="footerContainer">
            <section className="columns">
                <div className="column">
                    <h3>DECATHLON EMPRESA</h3>
                    <ul className="footer-links">
                        <li><a href="/">Quiénes somos</a></li>
                        <li><a href="/">Canal ético</a></li>
                        <li><a href="/">Trabaja con nosotros</a></li>
                        <li><a href="/">Sala de prensa</a></li>
                        <li><a href="/">Canal ético</a></li>
                        <li><a href="/">Decathlon afiliados</a></li>
                        <li><a href="/">Decathlon Marketplace</a></li>
                        <li><a href="/">Vende en Decathlon.es</a></li>
                        <li><a href="/">Sostenibilidad</a></li>
                        <li><a href="/">Innovación</a></li>
                    </ul>
                </div>

                <div className="column">
                    <h3>COMPRA</h3>
                    <ul className="footer-links">
                    <li><a href="/">Método de entrega/Gasto de envío</a></li>
                        <li><a href="/">Métodos de pago</a></li>
                        <li><a href="/">Preguntas frecuentes</a></li>
                        <li><a href="/">Envío Canarias/Ceuta/Melilla/Andorra</a></li>
                        <li><a href="/">Single Day</a></li>
                        <li><a href="/">Regalos para deportistas</a></li>
                        <li><a href="/">Rebajas</a></li>
                        <li><a href="/">Botas de futbol</a></li>
                    </ul>
                </div>

                <div className="column">
                    <h3>POST-COMPRA</h3>
                    <ul className="footer-links">
                        <li><a href="/">Cambios y devoluciones</a></li>
                        <li><a href="/">Factura formato electrónico</a></li>
                        <li><a href="/">Tu opinión cuenta</a></li>
                        <li><a href="/">Comunicados seguridad</a></li>
                        <li><a href="/">Tax free</a></li>
                        <li><a href="/">Clasificación de nuestros productos</a></li>
                        <li><a href="/">Servicio de montaje</a></li>
                    </ul>
                </div>

                <div className="column">
                    <h3>SERVICIOS</h3>
                    <ul className="footer-links">
                        <li><a href="/">Alquiler</a></li>
                        <li><a href="/">Soporte técnico</a></li>
                        <li><a href="/">Tarjeta regalo</a></li>
                        <li><a href="/">Clubes, colegios y empresas</a></li>
                        <li><a href="/">Personalización</a></li>
                        <li><a href="/">Financiación</a></li>
                        <li><a href="/">Extensión de garantía</a></li>
                        <li><a href="/">Equipaciones clubes</a></li>
                        <li><a href="/">Postventa</a></li>
                    </ul>
                </div>

                <div className="column">
                    <h3>VENTAJAS</h3>
                    <ul className="footer-links">
                        <li><a href="/">Decathlon Live</a></li>
                        <li><a href="/">Decathlon Live</a></li>
                        <li><a href="/">Decathlon segunda vida</a></li>
                        <li><a href="/">Revender mis productos</a></li>
                    </ul>
                </div>

            </section>

            <section className="icons">
                <div className="icon">
                    <h5>PREGÚNTANOS LO QUE QUIERAS</h5>
                    <ul className="footer-links">
                        <li><a href="/">Lunes a sabado, 10:00h-22:00h                        </a></li>

                    </ul>
                </div>

                <div className="icon">
                    <h5>APP DECATHLON</h5>
                    <ul className="footer-links">
                        <li><a href="/">Apple Store/</a></li>
                        <li><a href="/">Google Play</a></li>
                    </ul>
                </div>

                <div className="icon">
                    <h5>REDES SOCIALES</h5>
                    <ul className="footer-links">
                        <li><a href="/">FB</a></li>
                        <li><a href="/">YouTube</a></li>
                        <li><a href="/">Insta</a></li>
                        <li><a href="/">Twitter</a></li>
                        <li><a href="/">Pinterest</a></li>

                    </ul>
                </div>

                <div className="icon">
                    <h5>PARTNER</h5>
                    <ul className="footer-links">
                        <li><a href="/">Lemonway</a></li>
                    </ul>
                </div>
                

            </section>

            <section>
                
                <ul className="legalLink">
                <li className="linkList"><a hrfe="/">C.G.V</a></li>
                <li className="linkList"><a hrfe="/"> C.G.U</a></li>
                <li className="linkList"><a hrfe="/">Menciones Legales</a></li>
                <li className="linkList"><a hrfe="/"></a>Política de privacidad Y cookies</li>
                <li className="linkList"><a hrfe="/">FAQ</a></li>
                <li className="linkList"><a hrfe="/">Ayuda / Contacto</a></li>
                <li className="linkList"><a hrfe="/">Tiendas Decathlon</a></li>
                </ul>
            </section>
                
            <section>
                 <p className="lastInfo">
                    *Consulta los métodos, plazios y gastos de envío disponibles an el siguiente enlace.
                    **Los precios de venta de los artículos de nuestro catálogo incluyen IVA. Los precios 
                    para las entregas con destino a Canarias, Ceuta, Melilla y Andorra incluyen impuestos 
                    indirectos. Los precios de los artículos de nuestro catálogo son los recomendados desde 
                    centrala día de ayer.Gastos de envío no incluidos. Fotos de los productos no contratuales.
                </p>
            </section>

        </footer>
    );
}

export default Footer;