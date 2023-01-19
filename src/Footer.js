import "./Footer.css";

function Footer() {
  return (
    <footer className="Footer">
      <div>
        <h4>Referencias</h4>
        <ul>
          <li>
            <a href="https://www.cyd.conacyt.gob.mx/?p=articulo&id=480">
              CONACyT ¿Cómo calcular la evapotranspiración?
            </a>
          </li>
          <li>
            <a href="https://myb.ojs.inecol.mx/index.php/myb/article/view/e2531824">
              Tasas de creimiento de especies de árboles valiosas en bosque
              mesófilo de montaña secundario en México.
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h4>Sitios de Interés</h4>
        <ul>
          <li>
            <a href="https://www.miteco.gob.es/es/cambio-climatico/temas/mitigacion-politicas-y-medidas/calculadoras.aspx">
              Calculadora de huella de carbono.
            </a>
          </li>
          <li>
            <a href="http://dgeiawf.semarnat.gob.mx:8080/ibi_apps/WFServlet?IBIF_ex=D3_AGUA01_04&IBIC_user=dgeia_mce&IBIC_pass=dgeia_mce&NOMBREANIO=*">
              Evapotranspiración media anual en México (SEMARNAT).
            </a>
          </li>
          <li>
            <a href="http://www.gea.uchile.cl/archivos/Como_determinar_cuando_y_cuanto_regar_Conadi.pdf">
              Determinar cuándo y cuánto regar.
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
