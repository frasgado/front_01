"# front_01" 

# Iniciar proyecto de git
git init

# Preparar archivos que se convertiran en commit
git add .

# El punto es para agregar todos los archivos modificados.

# Crear commit con su mensaje
git commit -m "Mensaje agregado"

# Agregar remoto solo la primera vez
git remoto add origin https://github.com/frasgado/front_01


# Enviar commits al servidor de GitHub
git push -u origin master
