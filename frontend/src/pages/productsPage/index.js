import React, { useState, useEffect } from 'react';

import MaterialTable from 'material-table'

import { api } from '../../services/api';

import '../../assets/styles/global.scss';

import './productsPage.scss';
import { DashboardBanner } from '../../components/layout/dashboardBanner';
import { useAuth } from '../../contexts/Auth';
import { PopUpForm } from '../../components/forms/popupform';

export function ProductsPage() {
  const { authorizationBearer } = useAuth();
  const [products, setProducts] = useState();
  const [saleProduct, setSaleProduct] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [updateTable, setUpdateTable] = useState(false);

  const togglePopUp = () => setToggle(!toggle);
  const fetchProductsAgain = () => setUpdateTable(!updateTable);

  console.log(saleProduct)


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get('/Products', { 
            headers: { Authorization: authorizationBearer() } 
          });
          const data = await response.data;
  
          setProducts(data);
          return data

      } catch(error) {
        console.log(error);
        return error.response;
      }
    }

    fetchProducts();
  }, [authorizationBearer, updateTable]);

  async function createProduct(newProduct) {
    if(newProduct.price < 0 || newProduct.amount < 0) {
      alert("Preços e estoques não podem ser negativos")
      return
    }
    try {
      console.log(newProduct)
      const response = await api.post("/Products", 
      newProduct, 
      { headers: { Authorization: authorizationBearer() }});

      setProducts([...products, response.data])
      console.log(response)
    } catch(error) {
      console.log(error);
      alert("campos preenchidos incorretamente");
      return error.response
    }
  }

  return (
    <section className="dashboard-page-container">
      { saleProduct && toggle && <PopUpForm product={ saleProduct } toggle={ togglePopUp } refetch={ fetchProductsAgain } /> }
      <DashboardBanner />
      <div className="dashboard-content">
        <div className="dashboard-table">
          <MaterialTable
            columns={[
              { title: 'Nome', field: 'name' },
              { title: 'Preço', field: 'price', type: 'numeric' },
              { title: 'Estoque', field: 'amount', type: 'numeric' },
              { title: 'Vendas', field: 'salesCount', type: 'numeric', editable: "never" }
            ]}
            data={ products }
            actions={[
              {
                icon: 'shopping_bag',
                tooltip: 'Vender produto',
                onClick: (event, rowData) => { 
                  if(rowData.amount <= 0) {
                    alert("Produto esgotado")
                    return
                  }
                  setSaleProduct({ ...rowData });
                  togglePopUp();
                },

              }
            ]}
            options={{
              // search: false,
              exportButton: true
            }}
            editable ={{
              onRowAdd: (newProduct) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  resolve();
                  createProduct(newProduct);
                }, 600);
              }),
            }}
            title="Produtos"
          />
        </div>
      </div>
    </section>
  );
}