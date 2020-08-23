import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';

import { formatProductsproducts } from "./helper";
import { calculateSalesStatistics } from "./helper";

import { api } from '../../services/api';

import '../../assets/styles/global.scss';

import './statisticsPage.scss';
import { DashboardBanner } from '../../components/layout/dashboardBanner';
import { StatisticCard } from '../../components/statistics/statisticCard';
import { ErrorImage } from '../../components/errors/errorImage';
import { useAuth } from '../../contexts/Auth';

export function StatisticsPage() {
  const { authorizationBearer } = useAuth();
  const [products, setProducts] = useState()
  const [chartData, setChartData] = useState()
  const [revenue, setRevenue] = useState();
  const [totalSales, setTotalSales] = useState();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get('/Products', { 
            headers: { Authorization: authorizationBearer() } 
          });
          const data = await response.data;
          setProducts(data)
          const chartData = formatProductsproducts(data);
          const { revenue, totalSales } = calculateSalesStatistics(data);

          setRevenue(revenue);
          setTotalSales(totalSales);
          setChartData(chartData)

          return data

      } catch(error) {
        console.log(error);
        return error.response;
      }
    }

    fetchProducts();
  }, [authorizationBearer]);

  return (
    <div className="dashboard-page-container">
      <DashboardBanner />
      <div className="statistics-dashboard-content">
      { chartData && 
        <h4 className="dashboard-information">Exibindo as estatísticas da sua empresa</h4>
      }  
        <div className="statistics-content">
          { (chartData) ? 
            <>
              <div className="cards-container">
                <StatisticCard title="Total arrecadado" value={ `R$${revenue}` }/>
                <StatisticCard title="Total de vendas" value={ totalSales }/>
              </div>
              <div className="chart">
                <Doughnut data={ chartData } />
              </div>
            </> 
            : 
            <ErrorImage errorMessage="Hmm... ainda não há dados para exibir aqui"/>
          }
        </div>
      </div>
    </div>
  );
}