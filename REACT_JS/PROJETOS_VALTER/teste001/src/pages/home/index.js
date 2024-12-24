import React, { useCallback, useState } from 'react';
import api from '../../services/api';
import './style.css';

export default function Home(){
    const [nome, setNome] = useState('');
    const [lista, setLista] = useState([]);

    const buscar = useCallback(()=>{
        
        async function buscarImdb(){
            // let temp =  await ['Amora','Banana','Laranja','Melância'];
            // await setLista(temp);

            const response = await api.get('trips');
            console.log(response);
            console.log(response.data);
            setLista(response.data);

            console.log(nome);
            console.log(lista);
        }

        buscarImdb();


    }, [lista, nome]);

    function buscar2(){
        console.log(lista);
    }

    return(
        <div className="container">
            <article className="filtros">
                <label>Nome:</label>
                <input 
                type="text" 
                placeholder="Digite aqui..." 
                value={nome}
                onChange={(e)=> setNome(e.target.value)} />
                <button type="button" onClick={buscar}>Buscar</button>
            </article>
            


            <div id="listagem">
                {lista.map(item =>(
                    <article key={item.id}>
                        {item.id}
                        {item.title}
                        {item.image}
                    </article>
                ))}
            </div>
        </div>
    );
}