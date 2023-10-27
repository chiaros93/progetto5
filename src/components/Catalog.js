import React, { useState, useEffect } from 'react';
import './Catalog.css';


const URL = "http://localhost:3000/products";

function Catalog() {
    const [productData, setProductData] = useState({products: []});
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch (URL);
                if (!response.ok) { 
                    throw new Error('No se pudo cargar el archivo JSON. ');
                }
                const data = await response.json();
                setProductData({ products: data });
            } catch (error) {
                console.error('Error al cargar el archivo JSON: ', error);
            }
        };

    fetchData();
}, []);

return (
    <div class="elementi">
        <div key="products">
            <h2 class="tituloCarousel">Recomendado</h2>
            <ul class="carousel">
                {productData.products.slice(0,10).map((product,index)=>(
                    <li class="card" key={index}>
                        
                        <img class="imageProduct" src={product.imagen} alt={product.nombre} />
                        <p className="name">{product.nombre}</p>
                        <p className="price"> {product.precio} £</p>
                    </li> 

                ))}
            </ul>
            
        </div>
    </div> 
);         
                } 

export default Catalog;



