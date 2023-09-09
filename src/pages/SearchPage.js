import React from 'react';
import MasterLayout from '../MasterLayout/MasterLayout';
import Search from '../components/Search/Search';

const SearchPage = () => {
    return (
        <div>
       <MasterLayout>
        <Search></Search>
       </MasterLayout>
        </div>
    );
};

export default SearchPage;