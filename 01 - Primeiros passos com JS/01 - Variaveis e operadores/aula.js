const preco_combustivel = 4.72;
const km_por_litros = 15.3;
const distancia_em_km = 419;

const litrosConsumidos = distancia_em_km / km_por_litros;
const valor_gasto_viagem = litrosConsumidos * preco_combustivel;

console.log(valor_gasto_viagem.toFixed(2));

