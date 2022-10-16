import React, { useState } from 'react'
import { Link } from "react-router-dom";

function FetchData({ allUsers, isLoading }) {

    const [filterUsers, setFilterUsers] = useState([]);

    const onClickAll = () => {
        setFilterUsers([]);
    }

    const onClickGents = () => {
        setFilterUsers(allUsers.filter(user => user.gender === "male"));
    }

    const onClickLadies = () => {
        setFilterUsers(allUsers.filter(user => user.gender === "female"));
    }

    let numberOfUsers = Object.keys(allUsers).length;

    if (isLoading) {
        return <h1 className='loading'>Loading...</h1>
    }
    return (
        <div className='user-list'>
            <div className="filter-section">
                <p className='faces-section'>{numberOfUsers} new faces</p>
                <p className='button-section'>
                    <button onClick={onClickAll}>ALL</button>
                    <button onClick={onClickGents}>Gents</button>
                    <button onClick={onClickLadies}>Ladies</button>
                </p>
            </div>
            <div className="users">
                {filterUsers.length > 0 ? filterUsers.map((filterUser) =>
                    <div key={filterUser.login.uuid}>
                        <Link to={`/user/${filterUser.login.uuid}`} >
                            <img src={filterUser.picture.large} alt="" /></Link>
                    </div>)
                    :
                    allUsers.map((user) =>
                        <div key={user.login.uuid}>
                            <Link to={`/user/${user.login.uuid}`} state={{ data: user }}>
                                <img src={user.picture.large} alt="" /></Link>
                        </div>)}
            </div>
        </div>
    )
}

export default FetchData;