var frutas = [],
  verduras = [],
  graos = [],
  graos = [],
  carnes = [],
  bebidas = [],
  besteiras = [],
  test,
  counter = 0

do {
  let addItemInList = prompt(
    `Deseja adicionar alguma comida na sua lista de compras? (Digite "Sim" ou "Não")`
  )

  if (addItemInList == "Sim") {
    counter++

    var food = prompt(`Qual alimento deseja inserir?`)
    var categoryOfFood = prompt(
      `Em qual categoria esse alimento se encaixa? ("frutas", "verduras", "grãos", "carnes", "bebidas", "besteiras")`
    )

    if (categoryOfFood == "frutas") {
      frutas.push(food)
    } else {
      if (categoryOfFood == "verduras") {
        verduras.push(food)
      } else {
        if (categoryOfFood == "grãos") {
          graos.push(food)
        } else {
          if (categoryOfFood == "carnes") {
            carnes.push(food)
          } else {
            if (categoryOfFood == "bebidas") {
              bebidas.push(food)
            } else {
              if (categoryOfFood == "besteiras") {
                besteiras.push(food)
              } else {
              }
            }
          }
        }
      }
    }
  } else {
    if (counter != 0) {
      alert(
        `>Lista de compras:\n Frutas: ${frutas}\n Verduras: ${verduras}\n Grãos: ${graos}\n Carnes: ${carnes}\n Bebidas: ${bebidas}\n Besteiras: ${besteiras}\n`
      )
    } else {
      alert(
        "Ok, lhe esperamos mais tarde quando decidir montar a sua lista! 😁"
      )
    }
  }

  if (addItemInList == "Sim") {
    test = 1
  } else {
    test = 2
  }
} while (test == 1)
