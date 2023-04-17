import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './ProductComponet.css'
import EditProductComponents from './EditProductComponents'
import Product from '../../pages/Product';

interface iProduct {
    name: string,
    price: number
}

function ProductComponent() {
    const [products, setProducts] = useState([])

    async function fetchProducts() {
        const { data } = await axios.get("http://localhost:4000/all-products")
        setProducts(data)
    }

    useEffect(() => {
        fetchProducts();
    },[])

    return (
        <div className='products'>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>

                {
                    products.map((product: iProduct) => {
                        return (
                            <EditProductComponents product={product}/>
                        )
                    })
                }

            </table>
        </div>
    )
}

export default ProductComponent
