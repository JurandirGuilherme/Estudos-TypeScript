class Usuario {
  private nome: string;
  private email: string;
  private idade: number;
  private dtNasc: Date;
  private logradouro: string;
  public produtosComprados: Array<Produto> = [];
  public produtosRecomendados: Array<Produto> = [];
  public listaDeDesejo: Array<Produto> = [];

  constructor(
    nome: string,
    idade: number,
    email: string,
    logradouro: string,
    dtNasc?: Date,
  ) {
    this.nome = nome,
    this.email = email,
    this.idade = idade,
    dtNasc && (this.dtNasc = dtNasc)
    this.logradouro = logradouro
  }
  public setNome(nome: string): void {
    this.nome = nome;
  }
  public getNome(): string {
    return this.nome;
  }
  public setEmail(email: string): void {
    this.email = email;
  }
  public getEmail(): string {
    return this.email;
  }
  public setIdade(idade: number): void {
    this.idade = idade;
  }
  public getIdade(): number {
    return this.idade;
  }

  public adicionarProdutoComprado(id: number, nome:string, preco:number, categoria: Categoria):void{

    let produto = new Produto(id, nome, preco, categoria)
    for (let i = 0; i < produtos.length; i++){
      if (produtos[i].nome == produto.nome){
        this.produtosComprados.push(produto);
        break;
      }
    }
  }
  public adicionarProdutosRecomendados(id: number, nome:string, preco:number, categoria: Categoria):void{
    this.produtosRecomendados.push(new Produto(id, nome, preco, categoria))
  }
  public adicionarListaDeDesejo(id: number, nome:string, preco:number, categoria: Categoria):void{
    this.listaDeDesejo.push(new Produto(id, nome, preco, categoria))
  }
}

type Categoria = "Oriental" | "Fast Food" | "Sobremesa";

class Produto{
    id:number
    nome:string
    preco: number
    categoria: Categoria
    constructor(id:number, nome:string, preco:number, categoria: Categoria){
        this.id = id,
        this.nome = nome,
        this.preco = preco,
        this.categoria = categoria;
    }
}



let usuarios:Array<Usuario> = [];
let produtos:Array<Produto> = [];

const criarProduto = (id: number, nome: string, preco:number, categoria:Categoria)=>{
  produtos.push(new Produto(id, nome, preco, categoria));
}

for (let i = 0; i < 10; i++) {
    usuarios.push(new Usuario(`UsuarioTeste${i}`, 10+i, `testeemail${i}@gmail.com`, `Cidade ${i}`, new Date(),))
}


criarProduto(1, "Temaki", 22, "Oriental")

// usuario[0].listaDeDesejo.push(new Produto(0, "Sushi", 12, "Oriental"))
usuarios[0].adicionarProdutoComprado(1,"Temaki", 22, "Oriental")
// usuario[0].adicionarProdutoComprado(1,"Yaksouba", 22, "Oriental")

// usuarios[0].produtosComprados.forEach((data)=>{
//   console.log(data)
// })