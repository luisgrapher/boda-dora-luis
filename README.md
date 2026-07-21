# Web de boda — Dora & Luis

## Qué incluye
- Portada principal.
- Acceso al álbum compartido.
- Botón para subir fotos y videos.
- Club de Solteros(as) con tarjetas tipo Tinder.
- Filtros por hombres, mujeres o todos.
- Interacción de swipe, botones y modal de “Me interesa”.
- Diseño adaptable a celular.

## 1. Cambiar las fotos
Reemplaza:
- `assets/portada.jpg`
- Las fotos dentro de `assets/perfiles/`

Conserva los mismos nombres o modifica las rutas dentro de `app.js`.

## 2. Cambiar los enlaces del álbum
Abre `app.js` y modifica:

```js
uploadUrl: "TU_ENLACE_PARA_SUBIR_ARCHIVOS",
galleryUrl: "TU_ENLACE_DE_GALERIA",
```

Opciones gratuitas:
- Google Photos: álbum colaborativo.
- Google Drive: carpeta compartida.
- Dropbox File Request.
- OneDrive: solicitud de archivos.

## 3. Cambiar los perfiles
En `app.js`, edita el bloque `PROFILES`.

Cada perfil usa:
- `name`
- `age`
- `gender`: `hombre` o `mujer`
- `table`
- `occupation`
- `quote`
- `interests`
- `image`

Incluye perfiles únicamente con autorización expresa.

## 4. Probar
Haz doble clic en `index.html`.

## 5. Publicar gratis
### GitHub Pages
1. Crea una cuenta en GitHub.
2. Crea un repositorio nuevo.
3. Sube todos los archivos.
4. Ve a Settings → Pages.
5. Selecciona `Deploy from a branch`.
6. Selecciona `main` y `/root`.
7. GitHub entregará una URL pública.

### Netlify Drop
1. Entra a Netlify Drop.
2. Arrastra la carpeta completa.
3. Obtendrás una URL pública de inmediato.

## 6. Crear el QR
Cuando tengas la URL pública:
1. Ábrela desde un celular sin iniciar sesión.
2. Verifica todos los botones.
3. Crea un QR con esa URL.
4. Imprime una prueba y escanéala antes de imprimir todos los carteles.

## Nota
Las imágenes de demostración son placeholders. Reemplázalas antes de publicar.


## Versión final hasta ahora
Incluye portada, álbum colaborativo de Google Fotos y Wedding Match con 4 perfiles reales.
