import { arqueiro } from "./scr/models/arqueiro";
import { bruxo } from "./scr/models/bruxo";
import { guerreiro } from "./scr/models/guerreiro";
import { ninja } from "./scr/models/ninja";
import { personagem } from "./scr/models/personagem";
import { xama } from "./scr/models/xama";

let usu_personagem = new personagem('Harry','Bruxo','Reino da magia','Traje leve','Expelliarmus','Expectro Patronum','Média','Médio')
console.log(usu_personagem)

let bruxo_personagem = new bruxo('Harry','Bruxo','Reino da magia','Traje leve','Expelliarmus','Expectro Patronum','Média','Médio', 'Expelliarmus')
console.log(bruxo_personagem)
bruxo_personagem.pocao('Poçao do Morto Vivo')
console.log(bruxo_personagem)

let arqueiro_personagem = new arqueiro('Gavião Arqueiro','Arqueiro','Reino da força','Traje leve','Flecha e arco','Flecha e arco personalizadas', 'Resistência baixa','Alto alcance','Prata')
console.log(arqueiro_personagem)

let ninja_personagem = new ninja('Tokyo','Ninja','Reino de força','Vestimentas leves e escuras','Winged Horse kick','Ninjutsu','Baixa','Letal')
console.log(ninja_personagem)
ninja_personagem.agilidade_porcentagem(300)
console.log(ninja_personagem)


let xama_personagem = new xama('Flora', 'Xamã', 'Reino da Magia','Vestimentas leves','Elemetos','Totens','Média','Longo alcance')
console.log(xama_personagem)

let guerreiro_personagem = new guerreiro('Numerus','Guerreiro','Reino da Forca','Traje pessados','Corpo a corpo','Poder cifra','Alta','Alta','Armas de Haste')
console.log(guerreiro_personagem)
