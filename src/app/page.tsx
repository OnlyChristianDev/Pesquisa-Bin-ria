"use client"

const lista = [1,2,4,5,6,8,9,10,24,65,68,89]

const pesquisaFunction = (numero : number) => {
  let inicio = 0;
  let fim = lista.length - 1

  while (inicio <= fim ) {
    const media = Math.floor((inicio + fim) / 2 )
    if (lista[media] === numero){
      console.log(`achou o numero ${numero}`)
      return
    } else if (lista[media] > numero) {
    fim = media - 1
   } else {
    inicio = media + 1
   } 
 }
 console.log("numero nao encontrado")
}

export default function Home() {
 

  return (
    <>
    <h1>
      pesquisa binaria
    </h1>
    <button onClick={() => pesquisaFunction(23)}>pesquisar</button>
    </>
  );
}
