import React, { useState } from 'react'
import axios from 'axios'
import './ProductComponet.css'


function EditProductComponents({ product }: any) {
    const [name, setName] = useState(product.name)
    const [price, setPrice] = useState(product.price)
    const [edited, setEdited] = useState(false)
    const [deleted, setDeleted] = useState(false)

    async function handleEdit() {
        if (name.length > 0 && price > 0) {
            try {
                const token = localStorage.getItem("token")
                const result: any = await axios.post("http://localhost:4000/edit-product", { productId: product._id, name, price, user: product.user }, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setEdited(false)
            } catch (error) {

            }
        }
    }

    async function handleDelete() {
        try {
            const token = localStorage.getItem("token")
            const result: any = await axios.post("http://localhost:4000/delete-product", { productId: product._id }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setEdited(false)
            setDeleted(true)
        } catch (error) {
        }
    }

    return (
            !deleted ?
                <>
                    <tr style={{ border: '1px solid black' }}>
                        {!edited &&
                            <>
                                <td style={{ border: '1px solid black' }}>{name}</td>
                                <td style={{ border: '1px solid black' }}>{price}</td>
                            </>
                        }
                        {edited &&
                            <>
                                <td style={{ border: '1px solid black' }}><input type="text" value={name} onChange={(e) => setName(e.target.value)} /></td>
                                <td style={{ border: '1px solid black' }}><input type="number" value={price} onChange={(e) => setPrice(parseInt(e.target.value))} /></td>
                            </>
                        }
                        {
                            product.user == localStorage.getItem("userId") &&
                            <>
                                <td>{!edited ? <button onClick={() => setEdited(true)}>Edit</button> : <button onClick={handleEdit}>Save</button>}</td>
                                <td><button onClick={handleDelete}>Delete</button></td>
                            </>
                        }
                    </tr>
                </> : <></>
    )
}

export default EditProductComponents
