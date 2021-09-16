import BasicTable from "../components/Table";
import React, { useState, useEffect } from 'react';

function TablePage() {

    const [isNull, setIsNull] = useState(true);

    localStorage.getItem('name');
    localStorage.getItem('email');
    localStorage.getItem('phone');

    useEffect(() => {
        if (localStorage.getItem('name') !== null || localStorage.getItem('email') !== null || localStorage.getItem('phone') !== null || localStorage.getItem('reviews') !== null) {
            setIsNull(false);
        }
    }, [localStorage.getItem('name'), localStorage.getItem('email'), localStorage.getItem('phone')]);


    return (
        <>
            <h1 style={{ marginBottom: '5px', marginTop: '50px', marginLeft: '80px' }}>All Feedback</h1>
            {!isNull && (<div style={{ padding: '30px' }}>
                <BasicTable />
            </div>)}
            {isNull && <h2 style={{ textAlign: 'center', marginTop: '80px' }}>No Feedback Found</h2>}
        </>
    )
};


export default TablePage;