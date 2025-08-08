import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { FaLongArrowAltDown, FaLongArrowAltUp } from "react-icons/fa";

export const List = ({ list, setList, listData }) => {
    const [sortBtn, setSortBtn] = useState(0);
    const sort = () => {
        // console.log('sor',sortBtn);
        
        if (sortBtn === 0) {
            setSortBtn((p) => p+1);
            const sortedList = [...list].sort((a, b) => a - b);
            setList(sortedList);
        } else if (sortBtn === 1) {
            setSortBtn((p) => p+1);
            const sortedList = [...list].sort((a, b) => b - a);
            setList(sortedList);
        } else if (sortBtn === 2) {
            setSortBtn(0)
            setList(listData)
        }
    }
    const getArrowIcon = () => {
        if (sortBtn === 1) {
            return <FaLongArrowAltDown />;
        }
        if (sortBtn === 2) {
            return <FaLongArrowAltUp />;
        }
        return (
            <>
                <FaLongArrowAltDown />
                <FaLongArrowAltUp />
            </>
        );
    };
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginTop: '20px', background: '#fff', padding: '20px', minHeight: '200px', minWidth: '500px', borderRadius: '15px', boxShadow: '0px 10px 10px 1px rgba(128, 125, 125, 0.5)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <h5 style={{ fontSize: '20px', margin: 0 }}>Numbers List</h5>
                <div>
                    <button onClick={() => { localStorage.removeItem('listD'); setList([]); }} style={{ height: '30px', cursor: 'pointer', border: '1px solid red', marginRight: '7px', background: 'transparent', color: 'red', borderRadius: '7px' }}>Reset</button>
                    <button onClick={() => { sort() }} style={{ height: '30px', background: '#5677e0ff', color: '#fff', cursor: 'pointer', transition: 'background 0.3s ease, transform 0.3s ease', borderRadius: '7px', border: 'none' }}>Sort {getArrowIcon()}</button>
                </div>
            </div>
            <div>
                {list?.map((e, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#ebebebbd', width: '100%', marginBottom: '5px', borderRadius: '10px', }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: '20px', gap: '10px', }}>
                            <p style={{ fontSize: '20px', width: '30px' }}>{e}</p>
                            <p>#{i + 1}</p>
                        </div>
                        <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', marginRight: '10px' }}><AiOutlineClose /></button>
                    </div>
                ))}
            </div>
            <div style={{ background: '#e3faf9ff', borderRadius: '10px', paddingLeft: '20px' }}>
                <p style={{ color: '#071e66ff', fontWeight: '500' }}>Total Numbers: {list.length}</p>
            </div>
        </div>
    )
}
