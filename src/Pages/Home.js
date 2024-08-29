import React, { useEffect, useRef, useState } from 'react'
import { fetchCardDetails, getAllCards } from '../Services/operations/CardOperation'
import toast from 'react-hot-toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';

const Home = () => {
    const {handleSubmit} = useForm();
    const inputRef = useRef(null);
    const [cards, setCards ] = useState([]);
    const fetchCard = async() => {
        const searchQuery = inputRef.current.value.trim();
        if (searchQuery === '') {
            toast.error('Please enter the title! ');
            return;
        }
        const result = await fetchCardDetails(searchQuery);
        setCards(result)
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                var res = await getAllCards();
                setCards(res);

            } catch (error) {
                toast.error(error.message)
            }
        }
        fetchData();
    }, [setCards])

    return (
        <>
            <div className="container-fluid d-flex flex-column justify-content-center align-items-center p-5 bg-info">
                <h1 className='mt-5'>How Can We Help?</h1>
                <nav className="navbar mt-2 mb-5">
                    <form className="container-fluid">
                        <div className="input-group ">
                            <input type="text" className="form-control border border-black" placeholder="Search by card title" aria-label="Username" aria-describedby="basic-addon1" ref={inputRef}/>
                            <span className="input-group-text ml-4 border border-black " id="basic-addon1" style={{cursor:'pointer'}}><FontAwesomeIcon icon={faArrowRight} onClick={handleSubmit(fetchCard)}/></span>
                        </div>
                    </form>
                </nav>
            </div>
            <div className='container mt-4'>
                <div className="row gx-5 mt-5 mb-5">
                    {
                        cards?.length === 0 ? <h1 className='text-black text-center'>No card Found !</h1>:
                        cards?.map((val,index) => (
                            <div className="col-sm-6 mb-3 mb-sm-0 mt-5 mb-5" key={index}>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title text-uppercase">{val?.title}</h5>
                                        <p className="card-text" style={{textTransform:'capitalize'}}>{val?.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </>


    )
}

export default Home