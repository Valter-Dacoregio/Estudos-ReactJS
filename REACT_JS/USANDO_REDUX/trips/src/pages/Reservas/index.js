import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeReserve, updateAmountRequest } from '../../store/modules/reserve/actions';
import { MdDelete, MdRemoveCircle, MdAddCircle } from 'react-icons/md';
import './style.css';

export default function Reservas() {
  const dispath = useDispatch();
  const reserves = useSelector(state => state.reserve);

  console.log('MINHA RESERVA:', reserves);

  function handleRemove(id){
    dispath(removeReserve(id))
  }

  function decrementAmount(trip){
    dispath(updateAmountRequest(trip.id, trip.amount-1));
  }

  function incrementAmount(trip){
    dispath(updateAmountRequest(trip.id, trip.amount+1));
  }

 return (
   <div>
       <h1 className="title">Você solicitou {reserves.length} Reservas</h1>
       
       {reserves.map(reserve => (
        <div className="reservas" key={reserve.id}>
          <img
          src={reserve.image}
          alt={reserve.title}
          />
          <strong>{reserve.title}</strong>
          
          <div id="amount">
            <button type="button" onClick={()=> decrementAmount(reserve) }>
              <MdRemoveCircle size={25} color="#191919" />
            </button>
            <input type="text" readOnly value={reserve.amount} />
            <button type="button" onClick={()=> incrementAmount(reserve) }>
              <MdAddCircle size={25} color="#191919" />
            </button>
          </div>

          <button
          type="button"
          onClick={()=>handleRemove(reserve.id)}
          >
            <MdDelete size={20} color="#191919" />
          </button>
        </div>
       ))}


       <footer>
         <button type="button" >Solicitar Reservas</button>
       </footer>

   </div>
 );
}