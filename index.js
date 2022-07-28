"use strict";
//function soma(a: number, b : number){
//    return a + b ;
//}
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Types 
//Interfaces
// interface IAnimal{
//     nome: string;
//     tipo: 'terestre' | 'aquático';
//     domestico: boolean;
// }
// interface IFelino extends IAnimal{
//     visaoNoturna: Boolean;
// }
// interface ICanino extends IAnimal{
//     porte:'pequeno' | 'medio' | 'grande';
// }
// type IDomestico = IFelino | ICanino 
// const animal: IDomestico = {
//     domestico: true,
//     nome: 'cachorro',
//     porte: 'medio',
//     tipo: 'terestre',
//     visaoNoturna: true
// }
// const animal: IAnimal = {
//     nome: 'Elefante',
//     tipo: 'terestre',
// } 
// const felino: IFelino = {
//     nome: "Leão",
//     tipo: 'terestre',
//     visaoNoturna: true,
// }
// const input = document.getElementById('input') as HTMLInputElement;
// input.addEventListener('input', (Event) => {
//     console.log('Digitei');
//     const i = Event.currentTarget as HTMLInputElement;
//     console.log(i.value);
// });
//Generic Types
// function adicionaApendiceAListas<T>(array: any[], valor: T ) {
//     return array.map(item => item + valor);
// }
// adicionaApendiceAListas([123], 1)
//-----------------------------------------------------------------------------
//Condicional a partir de paremetros 
// interface IUsuario{
//     id: string;
//     email: string;
// }
// interface IAdmin extends IUsuario{
//     cargo: 'gerente' | 'coordenador' | 'supervisor'
// }
// function redirecione(usuario: IUsuario | IAdmin) {
//     if('cargo' in usuario){
//         //redirecionar para area de administração
//     }
//     //redirecionar para área de usuario
// }
// interface IUsuario{
//     id: string;
//     email: string;
//     cargo?: 'Funcionario' | 'gerente' | 'coordenador' | 'supervisor'
// }
// function redirecione(usuario: IUsuario) {
//     if(usuario.cargo){
//         //redirecionar(usuario.cargo)
//     }
//     //redirecionar para a área  do úsuario
// }
// type CaschorrroSomenteLeitura = {
//     readonly [k in keyof Cachorro]: Cachorro[k]
// }
// interface Cachorro{
//     nome: string;
//     idade: number;
//     parqueFavorito?: string;
// }
// class MeuCachorro implements CaschorrroSomenteLeitura{
//     idade;
//     nome;
//     constructor(nome, idade){
//         this.nome = nome;
//         this.idade = idade
//     }
// }
// const cao = new MeuCachorro('Apolo', 14)
const jquery_1 = __importDefault(require("jquery"));
jquery_1.default.fn.extend({
    novaFuncao() {
        console.log('Chamou nova Função');
    }
});
(0, jquery_1.default)('input').novaFuncao;
