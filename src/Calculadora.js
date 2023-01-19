import React from "react";
import "./Calculadora.css";

const arboles = [
  { nombre: "Abies alba", valores: [0.06, 0.08, 0.1, 0.11, 0.13] },
  { nombre: "Abies pinsapo", valores: [0.22, 0.27, 0.33, 0.38, 0.44] },
  { nombre: "Acer spp.", valores: [0.15, 0.19, 0.22, 0.26, 0.3] },
  { nombre: "Alnus spp.", valores: [0.06, 0.08, 0.1, 0.11, 0.13] },
  { nombre: "Amelanchier ovalis", valores: [0.04, 0.11, 0.21, 0.35, 0.4] },
  { nombre: "Arbutus unedo", valores: [0.06, 0.07, 0.09, 0.1, 0.12] },
  { nombre: "Betula spp.", valores: [0.06, 0.08, 0.09, 0.11, 0.12] },
  { nombre: "Carpinus betulus", valores: [0.06, 0.08, 0.09, 0.11, 0.12] },
  { nombre: "Castanea sativa", valores: [0.12, 0.16, 0.19, 0.22, 0.25] },
  { nombre: "Ceratonia siliqua", valores: [0.06, 0.08, 0.09, 0.11, 0.12] },
  { nombre: "Cedrus atlantica", valores: [0.35, 0.63, 1.3, 2.88, 3.4] },
  { nombre: "Celtis australis", valores: [0.29, 0.72, 1.01, 1.44, 1.9] },
  {
    nombre: "Chamaecyparis lawsoniana",
    valores: [0.01, 0.01, 0.01, 0.01, 0.01],
  },
  { nombre: "Cornus sanguinea", valores: [0.04, 0.11, 0.21, 0.35, 0.4] },
  { nombre: "Corylus avellana", valores: [0.08, 0.1, 0.12, 0.14, 0.16] },
  { nombre: "Crataegus spp.", valores: [0.04, 0.11, 0.21, 0.35, 0.4] },
  { nombre: "Cupressus arizonica", valores: [0.03, 0.05, 0.06, 0.12, 0.15] },
  { nombre: "Cupressus macrocarpa", valores: [0.03, 0.05, 0.06, 0.12, 0.15] },
  { nombre: "Cupressus sempervirens", valores: [0.03, 0.05, 0.06, 0.12, 0.15] },
  {
    nombre: "Erica arborea (Canarias)",
    valores: [0.04, 0.11, 0.21, 0.35, 0.4],
  },
  { nombre: "Eucalyptus camaldulensis", valores: [0.4, 1.0, 1.57, 2.23, 3.53] },
  { nombre: "Eucalyptus globulus", valores: [0.57, 1.39, 2.04, 3.0, 4.87] },
  { nombre: "Fagus sylvatica", valores: [0.0, 0.02, 0.03, 0.07, 0.23] },
  { nombre: "Fraxinus spp.", valores: [0.09, 0.11, 0.18, 0.29, 0.33] },
  { nombre: "Ilex aquifolium", valores: [0.03, 0.04, 0.05, 0.08, 0.1] },
  { nombre: "Ilex canariensis", valores: [0.04, 0.04, 0.05, 0.12, 0.14] },
  { nombre: "Juglans regia", valores: [0.12, 0.16, 0.19, 0.22, 0.25] },
  {
    nombre: "Juniperus oxycedrus, J. communis",
    valores: [0.01, 0.01, 0.02, 0.02, 0.02],
  },
  { nombre: "Juniperus phoenicea", valores: [0.02, 0.02, 0.03, 0.03, 0.04] },
  { nombre: "Juniperus thurifera", valores: [0.01, 0.02, 0.02, 0.02, 0.03] },
  { nombre: "Larix spp.", valores: [0.34, 0.43, 0.52, 0.6, 0.69] },
  { nombre: "Laurus azorica", valores: [0.04, 0.11, 0.21, 0.35, 0.4] },
  { nombre: "Laurus nobilis", valores: [0.04, 0.11, 0.21, 0.35, 0.4] },
  { nombre: "Malus sylvestris", valores: [0.15, 0.19, 0.22, 0.26, 0.3] },
  { nombre: "Myrica faya", valores: [0.04, 0.11, 0.21, 0.35, 0.4] },
  { nombre: "Myrtus communis", valores: [0.04, 0.11, 0.21, 0.35, 0.4] },
  { nombre: "Olea europaea", valores: [0.04, 0.05, 0.08, 0.1, 0.11] },
  { nombre: "Phillyrea latifolia", valores: [0.03, 0.03, 0.09, 0.17, 0.2] },
  { nombre: "Phoenix spp.", valores: [0.31, 0.57, 0.9, 1.24, 1.37] },
  { nombre: "Picea abies", valores: [0.35, 0.63, 1.3, 2.88, 3.4] },
  { nombre: "Pinus canariensis", valores: [0.03, 0.07, 0.14, 0.16, 0.18] },
  { nombre: "Pinus halepensis", valores: [0.03, 0.04, 0.08, 0.14, 0.16] },
  {
    nombre: "Pinus nigra Sistema Ibérico",
    valores: [0.03, 0.04, 0.05, 0.11, 0.13],
  },
  { nombre: "Pinus nigra (Resto)", valores: [0.03, 0.03, 0.08, 0.09, 0.11] },
  {
    nombre: "Pinus pinaster ssp. atlantica Zona Norte interior",
    valores: [0.23, 0.41, 0.58, 0.74, 0.91],
  },
  {
    nombre: "Pinus pinaster ssp. atlantica Zona Norte costera",
    valores: [0.33, 0.54, 0.69, 0.81, 0.92],
  },
  {
    nombre: "Pinus pinaster ssp. mesogeensis Sistema Central",
    valores: [0.12, 0.15, 0.18, 0.26, 0.36],
  },
  { nombre: "Pinus pinaster (Resto)", valores: [0.02, 0.03, 0.03, 0.08, 0.09] },
  { nombre: "Pinus pinea", valores: [0.06, 0.1, 0.17, 0.2, 0.29] },
  { nombre: "Pinus radiata", valores: [0.46, 0.79, 1.17, 1.56, 1.78] },
  {
    nombre: "Pinus sylvestris Sistema Central",
    valores: [0.02, 0.05, 0.06, 0.15, 0.17],
  },
  {
    nombre: "Pinus sylvestris Sistema Ibérico",
    valores: [0.03, 0.04, 0.05, 0.09, 0.11],
  },
  {
    nombre: "Pinus sylvestris Pirineos",
    valores: [0.04, 0.05, 0.07, 0.11, 0.17],
  },
  {
    nombre: "Pinus sylvestris (Resto)",
    valores: [0.03, 0.05, 0.06, 0.12, 0.15],
  },
  { nombre: "Pinus uncinata", valores: [0.04, 0.05, 0.09, 0.11, 0.12] },
  { nombre: "Pistacia terebinthus", valores: [0.04, 0.11, 0.21, 0.35, 0.4] },
  { nombre: "Platanus hispanica", valores: [0.21, 0.46, 0.67, 0.92, 1.26] },
  { nombre: "Populus alba", valores: [0.21, 0.46, 0.67, 0.92, 1.26] },
  { nombre: "Populus nigra", valores: [0.29, 0.72, 1.01, 1.44, 1.9] },
  { nombre: "Populus x canadensis", valores: [0.34, 0.81, 1.18, 1.55, 2.02] },
  { nombre: "Prunus spp.", valores: [0.15, 0.19, 0.22, 0.26, 0.3] },
  { nombre: "Pseudotsuga menziesii", valores: [0.35, 0.63, 1.3, 2.88, 3.4] },
  { nombre: "Punica granatum", valores: [0.34, 0.81, 1.18, 1.55, 2.02] },
  { nombre: "Pyrus spp.", valores: [0.15, 0.19, 0.22, 0.26, 0.3] },
  { nombre: "Quercus canariensis", valores: [0.05, 0.06, 0.13, 0.15, 0.17] },
  { nombre: "Quercus faginea", valores: [0.04, 0.05, 0.1, 0.11, 0.13] },
  { nombre: "Quercus ilex", valores: [0.05, 0.06, 0.07, 0.08, 0.1] },
  { nombre: "Quercus petraea", valores: [0.06, 0.07, 0.18, 0.21, 0.24] },
  { nombre: "Quercus pubescens", valores: [0.07, 0.12, 0.15, 0.23, 0.26] },
  { nombre: "Quercus pyrenaica", valores: [0.05, 0.07, 0.15, 0.17, 0.2] },
  { nombre: "Quercus robur", valores: [0.07, 0.16, 0.19, 0.22, 0.34] },
  { nombre: "Quercus rubra", valores: [0.07, 0.18, 0.22, 0.35, 0.4] },
  { nombre: "Quercus suber", valores: [0.07, 0.09, 0.11, 0.13, 0.15] },
  { nombre: "Rhamnus alaternus", valores: [0.04, 0.11, 0.21, 0.35, 0.4] },
  { nombre: "Robinia pseudacacia", valores: [0.06, 0.16, 0.19, 0.34, 0.39] },
  { nombre: "Salix spp.", valores: [0.31, 0.57, 0.9, 1.24, 1.37] },
  { nombre: "Sorbus spp.", valores: [0.17, 0.21, 0.25, 0.29, 0.33] },
  { nombre: "Tamarix spp.", valores: [0.03, 0.07, 0.08, 0.14, 0.16] },
  { nombre: "Taxus baccata", valores: [0.03, 0.05, 0.06, 0.12, 0.15] },
  { nombre: "Tetraclinis articulata", valores: [0.03, 0.07, 0.08, 0.14, 0.16] },
  { nombre: "Thuja spp.", valores: [0.01, 0.01, 0.02, 0.02, 0.02] },
  { nombre: "Tilia spp.", valores: [0.05, 0.06, 0.09, 0.12, 0.13] },
  { nombre: "Ulmus spp.", valores: [0.18, 0.23, 0.27, 0.5, 0.58] },
];

class Calculadora extends React.Component {
  constructor() {
    super();
    this.state = {
      arbol: "inicio",
    };
  }

  cambioSelect = (event) => {
    const encontrado = arboles.find(
      (arbol) => arbol.nombre === event.target.value
    );
    this.setState({
      arbol: event.target.value,
      encontrado,
    });
  };

  render() {
    return (
      <div className="Calculadora">
        <h1>Calculadora CO₂ y Absorción de Agua</h1>
        <div className="calculos">
          <div>
            <h3>Datos</h3>
            <p>
              Selecciona una especie de árbol que deseas plantar, si no conoces
              la especie, tómale una fotografía y súbela a{" "}
              <a href="https://identify.plantnet.org/">identify.plantnet.org</a>{" "}
              donde podrás identificarla.
            </p>
            <select onChange={this.cambioSelect} value={this.state.arbol}>
              <option disabled value="inicio" key="inicio">
                Selecciona una especie...
              </option>
              {arboles.map((arbol) => (
                <option value={arbol.nombre} key={arbol.nombre}>
                  {arbol.nombre}
                </option>
              ))}
            </select>
          </div>
          <div>
            {this.state.arbol === "inicio" ? (
              <div>
                <h3>Resultados:</h3>
                <p>Selecciona una especie de la lista.</p>
              </div>
            ) : (
              <div>
                <h3>Resultados:</h3>
                <p>
                  Seleccionaste la especie: <b>{this.state.arbol}</b>
                </p>
                <p>
                  Proyección de absorciones acumuladas estimadas en toneladas de
                  CO2 sobre pie:
                </p>
                <ul>
                  <li key="20">
                    20 años: {this.state.encontrado.valores[0]} (toneladas de
                    CO2).
                  </li>
                  <li key="25">
                    25 años: {this.state.encontrado.valores[1]} (toneladas de
                    CO2).
                  </li>
                  <li key="30">
                    30 años: {this.state.encontrado.valores[2]} (toneladas de
                    CO2).
                  </li>
                  <li key="35">
                    35 años: {this.state.encontrado.valores[3]} (toneladas de
                    CO2).
                  </li>
                  <li key="40">
                    40 años: {this.state.encontrado.valores[4]} (toneladas de
                    CO2).
                  </li>
                </ul>
                <p>Proyección de absorción de agua cumulativa:</p>
                <ul>
                  <li key="20">
                    20 años:{" "}
                    {(
                      ((Math.pow(Math.PI * ((0.0162 * 20) / 2), 2) *
                        3.5 *
                        0.8) /
                        0.9) *
                      (20 * 365)
                    ).toFixed(2)}{" "}
                    litros.
                  </li>
                  <li key="25">
                    25 años:{" "}
                    {(
                      ((Math.pow(Math.PI * ((0.0162 * 25) / 2), 2) *
                        3.5 *
                        0.8) /
                        0.9) *
                      (25 * 365)
                    ).toFixed(2)}{" "}
                    litros.
                  </li>
                  <li key="30">
                    30 años:{" "}
                    {(
                      ((Math.pow(Math.PI * ((0.0162 * 30) / 2), 2) *
                        3.5 *
                        0.8) /
                        0.9) *
                      (30 * 365)
                    ).toFixed(2)}{" "}
                    litros.
                  </li>
                  <li key="35">
                    35 años:{" "}
                    {(
                      ((Math.pow(Math.PI * ((0.0162 * 35) / 2), 2) *
                        3.5 *
                        0.8) /
                        0.9) *
                      (35 * 365)
                    ).toFixed(2)}{" "}
                    litros.
                  </li>
                  <li key="40">
                    40 años:{" "}
                    {(
                      ((Math.pow(Math.PI * ((0.0162 * 40) / 2), 2) *
                        3.5 *
                        0.8) /
                        0.9) *
                      (40 * 365)
                    ).toFixed(2)}{" "}
                    litros.
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Calculadora;
