const preco_etanol = 3.05;
const preco_gasolina = 4.79;
const km_por_litros = 15.3;
const distancia_em_km = 419;
const tipo_combustivel = "Gasolina";

const litrosConsumidos = distancia_em_km / km_por_litros;

if (tipo_combustivel === "Etanol") {
  const valor_gasto_viagem = litrosConsumidos * preco_etanol;
  console.log(valor_gasto_viagem.toFixed(2));
} else {
  const valor_gasto_viagem = litrosConsumidos * preco_gasolina;
  console.log(valor_gasto_viagem.toFixed(2));
}
