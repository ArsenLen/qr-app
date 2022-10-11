import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

const CheckinPage = () => {
    const user = false
    const navigate = useNavigate();
    useEffect(() => {
        !user && navigate('/register')
    })
    return (
        <div>
            <h1 className="checkin-title">Вы успешно прошли авторизацию!</h1>
        </div>
    );
};

export default CheckinPage;