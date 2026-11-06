# Configuración de contacto en Namecheap

El formulario guarda los mensajes en MySQL mediante el endpoint:

```text
POST /api/contact
```

La conexión a MySQL ocurre únicamente en el servidor. No copies las credenciales de la base de datos en ningún archivo `tsx` ni en variables que comiencen con `NEXT_PUBLIC_`.

## 1. Crear la base de datos en Namecheap

En cPanel:

1. Abre **MySQL Databases**.
2. Crea una base de datos para el sitio.
3. Crea un usuario MySQL con una contraseña segura.
4. Asigna el usuario a la base de datos con **All Privileges**.
5. Anota los valores exactos que muestra cPanel:
   - Host: normalmente `localhost`.
   - Puerto: normalmente `3306`.
   - Nombre completo de la base de datos, que puede incluir el prefijo de tu cuenta.
   - Nombre completo del usuario, que puede incluir el prefijo de tu cuenta.

No uses las credenciales de cPanel como sustituto del usuario de MySQL si cPanel creó un usuario separado.

## 2. Crear la tabla

Importa [schema.sql](../database/schema.sql) desde **phpMyAdmin**:

1. Selecciona la base de datos recién creada.
2. Abre la pestaña **Import**.
3. Selecciona `database/schema.sql`.
4. Ejecuta la importación.

La tabla creada se llama `contact_submissions`.

## 3. Configurar las variables privadas

Copia [.env.example](../.env.example) como `.env.local` en desarrollo y reemplaza los valores:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=usuario_mysql_real
DB_PASSWORD=contraseña_mysql_real
DB_NAME=base_de_datos_real
```

`.env.local` está excluido por `.gitignore`. Nunca lo subas a GitHub.

En el servidor, configura las mismas variables en el panel de la aplicación Node.js de cPanel. No agregues el prefijo `NEXT_PUBLIC_`.

## 4. Instalar y compilar

En el entorno donde se ejecuta Next.js:

```bash
pnpm install --frozen-lockfile
pnpm build
```

El proyecto requiere Node.js compatible con Next.js 16 y usa `pnpm` como administrador de paquetes. Si cPanel solo ofrece npm, ejecuta `npm install` usando el `package.json` y conserva `pnpm-lock.yaml` para los despliegues con pnpm.

## 5. Configurar la aplicación Node.js

Si tu plan de Namecheap incluye **Setup Node.js App**:

1. Crea una aplicación Node.js para el dominio.
2. Selecciona la versión de Node.js disponible compatible con Next.js 16.
3. Configura el directorio de la aplicación.
4. Añade las cinco variables de entorno de la sección anterior.
5. Ejecuta la instalación de dependencias.
6. Ejecuta `pnpm build`.
7. Configura el comando de inicio:

```bash
pnpm start
```

8. Reinicia la aplicación después de cambiar variables o archivos.

El formulario se conecta automáticamente a `/api/contact`; no se debe cambiar la URL a la de MySQL.

## 6. Probar la conexión

Desde el sitio publicado:

1. Completa todos los campos del formulario.
2. Envía el mensaje.
3. Confirma que aparece el mensaje de éxito.
4. Abre phpMyAdmin y revisa:

```sql
SELECT id, name, email, event_date, message, created_at
FROM contact_submissions
ORDER BY created_at DESC
LIMIT 10;
```

Si aparece un error 500:

- Confirma que las cinco variables estén configuradas en la aplicación, no solo en tu computadora.
- Verifica que el usuario tenga privilegios sobre la base de datos.
- Confirma que `DB_NAME` y `DB_USER` incluyan los prefijos de cPanel.
- Revisa los logs de la aplicación Node.js.
- Reinicia la aplicación después de corregir las variables.

## Importante sobre hosting compartido

Si tu plan de Namecheap no permite ejecutar aplicaciones Node.js/Next.js, esta API no puede ejecutarse directamente como Route Handler de Next.js en ese hosting. En ese caso hay dos opciones:

1. Alojar esta aplicación Next.js en un servicio compatible con Node.js y mantener MySQL en Namecheap.
2. Crear un endpoint PHP en Namecheap que reciba el formulario y guarde los datos en MySQL. Esa alternativa requiere adaptar el formulario y aplicar validación/CORS en PHP.

No publiques el formulario conectado directamente a MySQL desde el navegador.
