# Usar una imagen base oficial de Node.js
FROM node:18-alpine
# Establecer el directorio de trabajo en /app
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto de la aplicación
COPY . .

# Exponer el puerto en el que la aplicación va a correr
EXPOSE 3000

# Definir el comando por defecto para correr la aplicación
CMD ["npm", "start"]