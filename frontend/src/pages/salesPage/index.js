import React, { useState, useEffect } from 'react';

import MaterialTable from 'material-table'

import { api } from '../../services/api';

import '../../assets/styles/global.scss';

import './salesPage.scss';
import { DashboardBanner } from '../../components/layout/dashboardBanner';
import { useAuth } from '../../contexts/Auth';

export function SalesPage() {
  const { authorizationBearer } = useAuth();
  const [sales, setSales] = useState();

  useEffect(() => {
    const fetchSales = async () => {
      try {
        const response = await api.get('/Sales', { 
          headers: { Authorization: authorizationBearer() } 
        });
        const data = await response.data;

        const sales = data.map((sale) => {
          const saleData = {
            value: sale.value,
            amount: sale.amount,
            productName: sale.product.name
          }
          return saleData;
        });
        setSales([...sales]);

      } catch(error) {
        console.log(error);
        return error.response;
      }
    }

    fetchSales();
  }, [authorizationBearer]);

  return (
    <section className="dashboard-page-container">
      <DashboardBanner />
      <div className="sales-dashboard-content">
        <h4 className="dashboard-information">Exibindo o histórico de vendas</h4>
        <div className="dashboard-table">
          <MaterialTable
            columns={[
              { title: 'Produto', field: 'productName' },
              { title: 'Quantidade', field: 'amount', type: 'numeric' },
              { title: 'Valor', field: 'value', type: 'numeric' },
            ]}
            data={ sales }
            options={{
              search: false,
              exportButton: true
            }}
            title="Histórico de vendas"
          />
        </div>
      </div>
    </section>
  );
}