# IndicadoresFinancieros
 
 ##Enfoque de diseño
 -el target ha sido iOS(se ha probado sobre virtual iPhone 13 y iPhone XR fisico)
 -cumplir con el requerimiento minimo de funcionabilidad.
 -respetar en lo posible el diseño propuesto.
 
 
 ##instalacion
 -crear environment de [desarrollo link](https://reactnative.dev/docs/getting-started) sin llegar a crear un proyecto.
 
 -clonar repo
 
 -instalar dependencias
 ```
 npm install
 ```
 -generar pod (solo para iOS)
 ```
 npx pod-install ios
 ```
 -setear API_KEY en const.js
 
 -correr en su dispositivo configurado
 ```
 npx react-native run-ios
 ```
 
 Aun cuando no ha sido testeado sobre Android, si se crea la infra creando el enviroment no deberia tener problemas.
 


##TODOS
- [ ] cachear en redux las consultas a la API
- [ ] iconos y splash screen
- [ ] mejorar diseño :)
- [ ] refactorizar Chart a un componente separado
- [ ] agregar funcion nativa de geolocalizacion, y buscar por API su pais y conversion a pesos para hacer calculo a moneda local.


Nota al evaluador:
No sea tan duro conmigo T_T , fue el trabajo de dia y medio, estoy a full con mi trabajo actual y no pude dedicarle tanto tiempo a la prueba como hubiera querido, ademas se que tengo muchas cosas que mejorar como mobile developer, agradezco todos los puntos a mejorar para continuar con mi aprendizaje y experiencia :)