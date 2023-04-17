import React from 'react'
import { useNavigate } from 'react-router-dom'

function NavBar() {
    const navigate = useNavigate();

    return (
        <div>
            <button onClick={()=>navigate('/')}>All Products</button>
            <br />
            <br />
            {
                localStorage.getItem("token") ?
                <>  
                        <button onClick={() => navigate('/add-product')}>Add Product</button>
                        <button onClick={() => {
                            localStorage.clear()
                            navigate('/login')
                        }}>Logout</button>
                </>
                : <button onClick={()=>{navigate('/login')}}>Login</button>
            }
        </div>
    )
}

export default NavBar
