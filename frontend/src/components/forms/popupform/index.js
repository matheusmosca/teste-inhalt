import React, { useState } from 'react';
import swal from 'sweetalert';
import { api } from '../../../services/api';
import { useAuth } from "../../../contexts/Auth";

import '../../../assets/styles/global.scss';
import './popUpForm.scss';

import { RectangularButton } from "../../layout/rectangularButton";
import { MainInput } from "../../layout/mainInput";

export function PopUpForm({ product, toggle, refetch }) {
  const [amount, setAmount] = useState();
  const { authorizationBearer } = useAuth()
  
  const { id: productId, name: productName, amount: availableAmount } = product;
  async function handleProductSale(e) {
    e.preventDefault();
    if (amount <= 0) {
      swal("Operação inválida", "A quantidade deve ser maior que zero", "warning")
      return;
    }
    if (availableAmount < amount || availableAmount === 0) {
      swal("Operação inválida", "Não há produtos em estoque o suficiente.", "warning")
      return;
    }
    try {
      const response = await api.post(`/Sales/${productId}`, 
      { amount: parseInt(amount) }, 
      { headers: { Authorization: authorizationBearer() }});
      console.log(response)
      toggle();
      refetch()
    } catch(error) {
      console.log(error.response);
      swal("Erro", "Campo preenchido incorretamente.", "error");

    }

  }

  return (
    <>
      { availableAmount > 0 &&
        <div className="popup-form-container">  
          <div className="popup-form-inner">
            <form onSubmit={ (e) => handleProductSale(e) } action="" className="popup-form-content">
              <h4>Deseja vender quantas <br/> unidades de <br/> <span>{ productName }</span>?</h4>
              <MainInput required={ true } saveInputValue={ setAmount } inputType="number" labelName={`Estoque disponível: ${availableAmount}`}/>
              <div className="buttons-container">
                <RectangularButton onSubmit={ (e) => handleProductSale(e) } buttonText="Vender"/>
                <RectangularButton onClickEffect={ toggle } buttonText="Cancelar"/>
              </div>
            </form>
          </div>
        </div>  
      }  
    </>
  )
}