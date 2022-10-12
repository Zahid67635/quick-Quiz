import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Stats = () => {
    const data = useLoaderData().data;
    console.log(data);
    return (
        <div>
            <h1 className='text-3xl mb-12 m-3'>Chart of the total quizes:</h1>
            <div className='flex justify-center'>
                <LineChart width={500} height={500} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey='total' stroke="#82ca9d" />

                </LineChart>
            </div>

        </div>
    );
};

export default Stats;