import react from 'react'
import { Routes, Route } from 'react-router-dom'
import Admin from '../Admin/components/Admin'

const AdminRouters = () => {

    return(
        <div>
            <Routes>
                <Route path = '/*' element={<Admin/>}></Route>
            </Routes>

        </div>
    )
}

export default AdminRouters