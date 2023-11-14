var Usuario = /** @class */ (function () {
    function Usuario(nome, idade, email, logradouro, dtNasc) {
        this.produtosComprados = [];
        this.produtosRecomendados = [];
        this.listaDeDesejo = [];
        this.nome = nome,
            this.email = email,
            this.idade = idade,
            dtNasc && (this.dtNasc = dtNasc);
        this.logradouro = logradouro;
    }
    Usuario.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Usuario.prototype.getNome = function () {
        return this.nome;
    };
    Usuario.prototype.setEmail = function (email) {
        this.email = email;
    };
    Usuario.prototype.getEmail = function () {
        return this.email;
    };
    Usuario.prototype.setIdade = function (idade) {
        this.idade = idade;
    };
    Usuario.prototype.getIdade = function () {
        return this.idade;
    };
    Usuario.prototype.adicionarProdutoComprado = function (id, nome, preco, categoria) {
        var produto = new Produto(id, nome, preco, categoria);
        for (var i = 0; i < produtos.length; i++) {
            if (produtos[i].nome == produto.nome) {
                console.log("true");
                break;
            }
        }
        this.produtosComprados.push(produto);
    };
    Usuario.prototype.adicionarProdutosRecomendados = function (id, nome, preco, categoria) {
        this.produtosRecomendados.push(new Produto(id, nome, preco, categoria));
    };
    Usuario.prototype.adicionarListaDeDesejo = function (id, nome, preco, categoria) {
        this.listaDeDesejo.push(new Produto(id, nome, preco, categoria));
    };
    return Usuario;
}());
var Produto = /** @class */ (function () {
    function Produto(id, nome, preco, categoria) {
        this.id = id,
            this.nome = nome,
            this.preco = preco,
            this.categoria = categoria;
    }
    return Produto;
}());
var usuarios = [];
var produtos = [];
var criarProduto = function (id, nome, preco, categoria) {
    produtos.push(new Produto(id, nome, preco, categoria));
};
for (var i = 0; i < 10; i++) {
    usuarios.push(new Usuario("UsuarioTeste".concat(i), 10 + i, "testeemail".concat(i, "@gmail.com"), "Cidade ".concat(i), new Date()));
}
criarProduto(1, "Temaki", 22, "Oriental");
// usuario[0].listaDeDesejo.push(new Produto(0, "Sushi", 12, "Oriental"))
usuarios[0].adicionarProdutoComprado(1, "Temaki", 22, "Oriental");
// usuario[0].adicionarProdutoComprado(1,"Yaksouba", 22, "Oriental")
// usuarios[0].produtosComprados.forEach((data)=>{
//   console.log(data)
// })
