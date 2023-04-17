import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function AddProductComponent() {
    const [name, setName] = useState('')
    const [price, setPrice ] = useState(0)
    const navigate = useNavigate();

    const handleProduct = async() => {
        if (name.length > 0 && price > 0) {
            try {
                const token = localStorage.getItem("token")
                const userId = localStorage.getItem("userId")
                await axios.post("http://localhost:4000/add-product", { name, price, user: userId },{
                    headers:{
                        Authorization: `Bearer ${token}`
                    }
                })
                navigate('/')
            } catch (error) {

            }
        }
    }
    return (
        <div className='login'>
            <div>
                <div>
                    <label htmlFor="">Product</label>
                    <input type="text" onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">Price</label>
                    <input type="number" value={price} onChange={(e) => setPrice(parseInt(e.target.value))}/>
                </div>
                <button onClick={handleProduct} style={{cursor: 'pointer'}}>Add</button>
            </div>
       </div>
    )
}

export default AddProductComponent
