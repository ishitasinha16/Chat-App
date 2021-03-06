import React, { useState, useEffect } from 'react';
import { useChatContext } from 'stream-chat-react';

import { searchIcon } from '../assests';


const ChannelSearch = () => {
    const {query,setQuery}= useState('');
    const {loading, setLoading}= useState('false');

    const getChannels = async (text) => {
        try {
            // todo
        } catch (error) {   
            setQuery('')
            }
    }

    const onSearch = (event) => {
        event.preventdefault();

        setLoading(true);
        setQuery(event.target.value);
        getChannels(event.target.value);


    }

    return (
        <div className="channel-search__container">
            <div className="channel-search__input__wrapper">
            <div className="channel-search__input__icon">
                <searchIcon />
            </div>
            <input
            className="channel-search__input__text"
            placeholder="search"
            type="text"
            value={query}
            onChange={onSearch}
            />
            </div>


        </div>
    )
}

export default ChannelSearch