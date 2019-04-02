# GPS-Tracker-App
Apicación Android creada para la materia `Construcción de Sistemas de Computación`. Para trackear el mapa de posiciones GPS almacenada en dispositivo ESP32 asociado.
Esta aplicación está creada utilizando la tecnología React Native para agilizar la velocidad de desarrollo de la interfaz.
https://facebook.github.io/react-native/

# Getting Starting
Para inicializar la app deberá clonar el repo.
Luego, si no tiene el entorno de React Native instalado en su PC, deberá seguír esta guía:
https://facebook.github.io/react-native/docs/getting-started

`DOTENV`
Deberá crear un archivo `.env` en el root del proyecto para almacenar las keys privadas de la aplicación.

el contenido será:
```
GOOGLE_MAPS_API_KEY=XXXXXXXXXXXXXXXXXXXXXXXXX

```



En la carpeta del proyecto, ejecutar:

`npm install`
para instalar las dependencias

abrir un emulador desde android studio o genymotion

luego el comando
`react-native run-android`
para correr la aplicación en el emulador.


# Servidor dentro de la app.
Para los fines de la aplicación se requirió utilizar un servidor embebido en la aplicación para lograr la comunicación desde el ESP32.
Para ellos se utilozó la librería:
https://github.com/koush/AndroidAsync

Siguiendo la guía:
http://programminglife.io/android-http-server-with-androidasync/

y se requirió crear un Módulo Nativo para react native, siguiendo la guía:
https://medium.com/wolox-driving-innovation/crear-un-m%C3%B3dulo-nativo-con-react-native-5d71a85c7dc6

# Problemas al buildear
Si al intentar buildear la aplicación hay problemas con las dependencias de react-native-maps,
deberá agregar manualmente la siguiente linea al final del `build.gradle` de `react-native-maps`
ubicado en `node_modules/react-native-maps...`

`implementation "com.android.support:appcompat-v7:${rootProject.ext.supportLibVersion}"` -> Dentro de `dependencies`
