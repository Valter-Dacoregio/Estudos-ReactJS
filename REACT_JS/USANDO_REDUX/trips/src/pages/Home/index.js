import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addReserveRequest } from '../../store/modules/reserve/actions';
import { MdFlightTakeoff } from 'react-icons/md';

import api from '../../services/api';
import './style.css';

export default function Home({ history }) {
  const dispatch = useDispatch();
  const [trips, setTrips] = useState([]);

  useEffect(()=>{

    async function loadApi(){
      const response = await api.get('trips');
      setTrips(response.data);

      console.log(response.data);
    }

    loadApi();

  },[]);

  function handleAdd(id){
    dispatch(addReserveRequest(id));
  }


 return (
   <div className="box">
     {trips.map(trip =>(
       <li key={trip.id}>
         <img src={trip.image} alt={trip.title} />
         <strong>{trip.title}</strong>
         <span>Status: {trip.status ? 'Disponível' : 'Indisponível'}</span>

         <button 
         type="button"
         onClick={()=> handleAdd(trip.id) }
         >
           <div>
             <MdFlightTakeoff size={16} color="#fff" />
           </div>
           <span>SOLICITAR RESERVA</span>
         </button>
       </li>
     ))}
   </div>
 );
}