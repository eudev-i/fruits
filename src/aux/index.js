// Estrutura de condição para inserir a imagem da fruta de acordo com o nome trago pela API
export function imgFruits(name) {
  switch (name) {
    case "orange":
      return require("../images/orange.jpg");

    case "strawberry":
      return require("../images/strawberry.jpg");

    case "mango":
      return require("../images/mango.jpg");

    case "banana":
      return require("../images/banana.jpg");

    case "melon":
      return require("../images/melon.jpg");

    case "papaya":
      return require("../images/papaya.jpg");
  }
}
