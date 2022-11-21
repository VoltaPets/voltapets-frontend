import './styles.css';
import { useState } from 'react';

export default function App() {
  const data = [
    {
      codigoVacuna: 1,
      nombreVacuna: 'vacuna uno',
      fechaVacunacion: 'ayer',
      imagen: {
        path: 'imagen uno',
        url: 'url uno'
      }
    },
    {
      codigoVacuna: 2,
      nombreVacuna: 'vacuna dos',
      fechaVacunacion: 'hoy',
      imagen: {
        path: 'imagen dos',
        url: 'url dos'
      }
    },
    {
      codigoVacuna: 3,
      nombreVacuna: 'vacuna tres',
      fechaVacunacion: 'maÃ±ana',
      imagen: {
        path: 'imagen tres',
        url: 'url tres'
      }
    }
  ];

  let vacunasObj = {};

  data.forEach((vacunaData) => {
    const codigo = `codigo${vacunaData.codigoVacuna}`;
    const nombre = `nombre${vacunaData.codigoVacuna}`;
    const fecha = `fecha${vacunaData.codigoVacuna}`;
    const imagen = `imagen${vacunaData.codigoVacuna}`;
    const path = `path${vacunaData.codigoVacuna}`;
    const url = `url${vacunaData.codigoVacuna}`;

    vacunasObj[`${codigo}`] = vacunaData.codigoVacuna;
    vacunasObj[`${nombre}`] = vacunaData.nombreVacuna;
    vacunasObj[`${fecha}`] = '';
    vacunasObj[`${imagen}`] = {};
    vacunasObj[`${imagen}`][`${path}`] = '';
    vacunasObj[`${imagen}`][`${url}`] = '';
  });

  const [vacunaInput, setVacunaInput] = useState(vacunasObj);

  let handleChange = (e) => {
    const { className, name, value } = e.target;
    setVacunaInput((prevState) => ({
      ...prevState,
      [name]: value,
      [className]: {
        ...prevState[className],
        [name]: value
      }
    }));
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    var vacunaList = [];
    data.forEach((vacuna) => {
      const codigo = `codigo${vacuna.codigoVacuna}`;
      const nombre = `nombre${vacuna.codigoVacuna}`;
      const fecha = `fecha${vacuna.codigoVacuna}`;
      const imagen = `imagen${vacuna.codigoVacuna}`;
      const path = `path${vacuna.codigoVacuna}`;
      const url = `url${vacuna.codigoVacuna}`;

      vacunaList.push({
        codigoVacuna: vacunaInput[codigo],
        nombreVacuna: vacunaInput[nombre],
        fechaVacunacion: vacunaInput[fecha],
        imagen: {
          path: vacunaInput[imagen][path],
          url: vacunaInput[imagen][url]
        }
      });
    });

    alert(JSON.stringify(vacunaList));
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        {data.map((vacuna) => {
          const codigo = `codigo${vacuna.codigoVacuna}`;
          const nombre = `nombre${vacuna.codigoVacuna}`;
          const fecha = `fecha${vacuna.codigoVacuna}`;
          const imagen = `imagen${vacuna.codigoVacuna}`;
          const path = `path${vacuna.codigoVacuna}`;
          const url = `url${vacuna.codigoVacuna}`;
          return (
            <div className={vacuna.codigoVacuna}>
              <label> {vacuna.nombreVacuna} </label>

              <input type="hidden" name={[`${codigo}`]} value={vacuna.codigoVacuna} />
              <input type="hidden" name={[`${nombre}`]} value={vacuna.nombreVacuna} />
              <input
                type="text"
                name={[`${fecha}`]}
                //value= {}
                placeholder="Fecha"
                onChange={handleChange}
              />
              <input
                type="text"
                className={[`${imagen}`]}
                name={[`${path}`]}
                //value={}
                placeholder="Path"
                onChange={handleChange}
              />
              <input
                type="text"
                className={[`${imagen}`]}
                name={[`${url}`]}
                //value={}
                placeholder="Url"
                onChange={handleChange}
              />
            </div>
          );
        })}

        <button type="submit">Create</button>
      </form>
    </div>
  );
}
  