# Usar una imagen base oficial de Node.js
FROM node:18
# Establecer el directorio de trabajo en /app
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto de la aplicación
COPY . .


# Definir el comando por defecto para correr la aplicación
CMD ["npm", "start"]