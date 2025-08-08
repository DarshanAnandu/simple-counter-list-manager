import React, { useState } from 'react'
import { Bounce, toast } from 'react-toastify';

export const Counter = ({list,setList}) => {
    const [count, setCount] = useState(0);
    const OnAddToList = () => {
        if (count === 0) {
            toast('Zero cant be added to the list...', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                className: 'p-0 w-[400px] border border-purple-600/40',
                theme: "light",
                transition: Bounce,
            });
            return;
        }
        const newListData = [...list, count];
        localStorage.setItem('listD', JSON.stringify(newListData));
        setList(newListData);
        setCount(0);
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#fff', padding: '20px', minHeight: '200px', borderRadius: '15px', boxShadow: '0px 10px 10px 1px rgba(128, 125, 125, 0.5)' }}>
            <h5 style={{ fontSize: '20px', margin: 0 }}>Counter</h5>
            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', minWidth: '500px' }}>
                <button onClick={() => { setCount((p) => p - 1) }} style={{ border: '4px solid #5677e0ff', fontSize: '30px', color: '#5677e0ff', background: 'transparent', cursor: 'pointer', borderRadius: '50%', height: '50px', width: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>-</button>
                <p style={{ fontSize: '40px', color: '#000', margin: 0 }}>{count}</p>
                <button onClick={() => { setCount((p) => p + 1) }} style={{ border: '4px solid #5677e0ff', fontSize: '40px', color: '#5677e0ff', background: 'transparent', cursor: 'pointer', borderRadius: '50%', height: '50px', width: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>+</button>
            </div>
            <button onClick={() => { OnAddToList() }} style={{ cursor: 'pointer', width: '100%', height: '40px', color: '#fff', background: '#5677e0ff', borderRadius: '10px', border: 'none' }}>Add to List</button>
        </div>
    )
}
