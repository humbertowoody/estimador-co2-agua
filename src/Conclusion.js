import "./Intro.css";

function Conclusion() {
  return (
    <div className="Intro">
      <div>
        <h3>¿Cómo calculamos el agua?</h3>
        <p>
          En orden para realizar la proyección del consumo de agua se tomó en
          cuenta la superficie del vegetal (diámetro de la copa del árbol), la
          evapotranspiración, un factor de corrección y la eficiencia de riego.
        </p>
        <img src="formula-agua.png" alt="Fórmula para el cálculo del Agua" />
        <p>Dónde:</p>
        <ul>
          <li>
            <b>Evapotranspiración potencial (ETP)</b>: se mide en milímetros (de
            altura de agua) por día. Es un valor que viene dado por las
            estaciones meteorológicas. La ETP representará la cantidad de agua
            necesaria para asegurar en un vegetal en plena actividad, un
            desarrollo óptimo. Las precipitaciones más el riego deberán cubrir
            este valor. Según{" "}
            <a href="https://www.cyd.conacyt.gob.mx/?p=articulo&id=480">
              CONACyT
            </a>{" "}
            para los meses secos y soleados conviene considerar 3.5mm de ETP al
            día.
          </li>
          <li>
            <b>Factor de Corrección</b>: se aplica según el tipo de vegetal (o
            especie). Por ejemplo: 1 para plantas, 0,8 para árboles o 0,35 para
            xerófilas (cactus, sábila etc.) que precisan de menos agua.
          </li>
          <li>
            <b>Eficiencia de Riego</b>: Se considera 0.9 ya que el 90% del agua
            es utilizada realmente por la planta.
          </li>
        </ul>
        <p>
          Ejemplo de medición de diámetro en <i>Granada</i>:
        </p>
        <img
          src="punica-granatum.jpg"
          alt="Imagen de la medición de la copa de un ejemplar de Punica granatum (Granada)"
        />
      </div>
      <div>
        <h3>¿Cómo calculamos el CO₂?</h3>
        <p>
          Para realizar el cálculo de la estimación de absorción de CO₂
          utilizamos la{" "}
          <a href="https://www.miteco.gob.es/es/cambio-climatico/temas/mitigacion-politicas-y-medidas/guiapa_tcm30-479094.pdf">
            guía para la estimación de absorciones de dióxido de carbono
            provista por el gobierno Español
          </a>
          , con la cual obtenemos los coeficientes de absorción en condiciones
          ideales proyectadas a 20, 25, 30, 35 y 40 años respectivamente.
        </p>
        <p>La fórmula empleada es:</p>
        <img src="formula-co2.png" alt="Fórmula para el cálculo del CO2" />
        <p>Dónde:</p>
        <ul>
          <li>
            <b>n</b>: número de años del ejemplar.
          </li>
          <li>
            <b>Vncc</b>: volumen maderable con corteza según especie para el año{" "}
            <code>n</code> en m³.
          </li>
          <li>
            <b>FC</b>: fracción de carbono de la materia seca, en t C / t m.s.
          </li>
          <li>
            <b>FEB</b>: factor de expansión de biomasa para convertir el
            incremento anual (incluída la corteza) en incremento de biomasa
            arbórea sobre el suelo, sin dimensiones.
          </li>
          <li>
            <b>D</b>: densidad madera básica en t m.s. / m³.
          </li>
          <li>
            <b>R</b>: relación raíz-vástago, sin dimensiones.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Conclusion;
