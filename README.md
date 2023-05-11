# Bsale Api - Airline

- Bsale Api - Airline es una api que genera la simulación del checking de un pasajero para ....

## Instalación

1. Clonar el repositorio

```bash
git clone https://github.com/anthony
```

2. Entrar a la carpeta

```bash
cd bsaleapi
```

3. Instalar los módulos del package.json

   - La aplicación usa algunas librerías para una mejor experiencia a nivel del servidor

4. Crear el archivo .env

```bash
touch .env
```

5. Datos del .env

```.env
PORT = 5050
HOST = mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com
USER = bsale_test
PASSWORD = bsale_test
NAME_DB= airline
```

6. Correr el servidor

```bash
npm run dev
```

## Respuesta del servidor

```bash
Executing (default): SELECT 1+1 AS result
[1] Authentication successfully
[0] 22:46:46 - Starting compilation in watch mode...
[0]
[0]
[0] 22:46:53 - Found 0 errors. Watching for file changes.
[1] listening on the port 5050
[1] Executing (default): SELECT 1+1 AS result
```

# Uso de la API

- method: GET
- path: localhost:5050/api/flights/:id/passengers

### params: :id

- id: El id es el valor de la primary key de un vuelo (flight)

### Ejemplo:

- GET: http://localhost:5050/api/flights/10/passengers
  \_

### Respuesta esperada:

```json
{
  "flightId": 2,
  "takeoffDateTime": 1688491980,
  "takeoffAirport": "Aeropuerto Internacional Jorge Cháve, Perú",
  "landingDateTime": 1688495580,
  "landingAirport": "Aeropuerto Francisco Carlé, Perú",
  "airplaneId": 2,
  "passengers": [
    {
      "passengerId": 10,
      "dni": "643238510",
      "name": "Gustavo",
      "age": 61,
      "country": "México",
      "boardingPassId": 182,
      "purchaseId": 90,
      "seatTypeId": 3,
      "seatId": 172
    }
  ]
}
```

# URL deployment

-
