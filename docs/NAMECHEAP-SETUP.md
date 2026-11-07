# Conectar el formulario con Namecheap

## 1. Crear la base de datos

En **cPanel → MySQL Databases**:

1. Crea una base de datos.
2. Crea un usuario MySQL.
3. Asigna el usuario a la base de datos con **All Privileges**.
4. Guarda estos datos:
   - Host: normalmente `localhost`
   - Puerto: `3306`
   - Nombre de la base de datos
   - Usuario
   - Contraseña

## 2. Crear la tabla

En **cPanel → phpMyAdmin**:

1. Selecciona la base de datos.
2. Abre **Import**.
3. Sube [schema.sql](../database/schema.sql).
4. Ejecuta la importación.

Esto crea la tabla `contact_submissions`, donde se guardan los mensajes.

## 3. Configurar las variables

En el servidor, agrega estas variables privadas:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=usuario_mysql
DB_PASSWORD=contraseña_mysql
DB_NAME=nombre_base_de_datos
```

Usa los nombres completos que muestra cPanel, incluyendo sus prefijos si existen.

Para trabajar localmente, copia [.env.example](../.env.example) a `.env.local` y coloca los datos reales. No subas `.env.local` a GitHub.

## 4. Conectar y ejecutar el sitio

La aplicación ya incluye:

- API: `app/api/contact/route.ts`
- Conexión MySQL: `lib/db.ts`
- Formulario: `app/components/ContactSection.tsx`

En el servidor ejecuta:

```bash
pnpm install --frozen-lockfile
pnpm build
pnpm start
```

Después abre el sitio, envía un mensaje y verifica en phpMyAdmin:

```sql
SELECT * FROM contact_submissions
ORDER BY created_at DESC;
```

## Importante

Las credenciales solo deben estar en las variables del servidor. Nunca las pongas en el formulario ni uses variables `NEXT_PUBLIC_` para la base de datos.

El hosting debe permitir ejecutar aplicaciones **Node.js/Next.js**. Si tu plan de Namecheap no lo permite, esta conexión no funcionará directamente allí y será necesario usar un hosting compatible o un endpoint PHP.
