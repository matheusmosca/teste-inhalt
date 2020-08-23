
// Retorna as informações necessárias para o gráfico (Top 5 de produtos mais vendidos)
export function formatProductsproducts(data) {
  const copy = [...data];
  // Ordena os produtos pelo número de vendas
  copy.sort((a,b) => (a.salesCount > b.salesCount) ? 1 : ((b.salesCount > a.salesCount) ? -1 : 0)).slice(-1);
  let array = [...copy];
  // Pega os 5 últimos (Os que foram mais vendidos)
  array = copy.slice(Math.max(array.length - 5, 0))
  const names = array.map((x) => x.name);
  const sales = array.map((x) => x.salesCount);

  const chartData = {
    labels: names,
    datasets: [{
      label: 'vendas',
      data: sales,
      backgroundColor: [
        'rgba(255, 99, 132, .8)',
        'rgba(54, 162, 235, .8)',
        'rgba(255, 206, 86, .8)',
        'rgba(75, 192, 192, .8)',
        'rgba(153, 102, 255, .8)',
    ],
  borderWidth: 1,
    }] 
  }
  return chartData;
}

export function calculateSalesStatistics(data) {
  const products = [...data];

  const revenue = (products.reduce((acc, current) => (current.salesCount * current.price) + acc, 0));
  const totalSales = products.reduce((acc, current) => current.salesCount + acc, 0);

  return { revenue, totalSales };
}