import React from 'react'
import useService from '../../hooks/useService'

const ManageServices = () => {
    const [services, setServices] = useService()

    const handelDelete = id =>{
        const proceed = window.confirm('Are you sure?');
        if(proceed){
            const url = `http://localhost:5000/service/${id}`
            fetch(url,{
                method: 'DELETE',

            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                const remaining = services.filter(service => service._id !== id)
                setServices(remaining)
            })
        }
    }
    return (
        <div className=' w-52 mx-auto'>
            <h2>Manage Your Services</h2>
            {
                services.map(service=><div key={service._id}>
                    <h5>{service.name}<button onClick={() => handelDelete(service._id)}>X</button></h5>
                    
                </div>)
            }
        </div>
    );
};

export default ManageServices;