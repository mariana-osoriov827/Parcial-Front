# Parcial - Frontend

Frontend en Angular para registrar bodegas y consultar productos por bodega.

## Requisitos

- Node.js y npm

## Ejecución

Desde la carpeta `Parcial-Front/parcial`:

```bash
npm install
npm start
```

La aplicación queda en `http://localhost:4200`.

## Funcionalidad

- **Registrar bodega**: formulario con nombre y ubicación.
- **Consultar productos**: tabla con los productos existentes y su bodega, obtenidos desde el backend.

## Backend

El frontend consume el backend en `http://localhost:8080/bodegas`:

- `POST /bodegas`: registra una bodega.
- `GET /bodegas`: obtiene bodegas con sus productos asociados.
