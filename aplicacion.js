let saluda = () => {
    let nombre = process.env.USER || process.env.USERNAME 
    console.log(`Hola ${nombre}`)
}

saluda()
