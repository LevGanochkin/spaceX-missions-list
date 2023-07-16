import React from 'react';
import { useGetLaunchQuery } from '../store/spacex.api';
import { useActions } from '../utils/actions';
import TableComponent from '../components/TableComponent';
import HeaderComponent from '../components/HeaderComponent';
 
const HomePage = () => {

    const {isLoading, isError, data} = useGetLaunchQuery("launches/query")

    const {setOrder} = useActions();

    const setSortOrder = (isDesc: boolean) => {
        setOrder(isDesc)
    }
    
    return (
        <div className="flex flex-col justify-center pt-8">
            <HeaderComponent handleClick={setSortOrder} action={setOrder}/>
            { isError && <p className='text-center text-red-600 text-3xl'>Data response error</p>}
            { isLoading && <p className='text-center text-green-600 text-3xl'>Loading data</p>}
            {<TableComponent data={data}/>}
        </div>
    );
}

export default HomePage;