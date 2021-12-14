import React, { useState } from 'react';
import Verses from './Verses/Verses';
import AddVerse from './Verses/AddVerse';
import Navbar from './Navbar'
import Verse from './Verses/Verse';

const Dashboard = () => {

    return (
        <div>
            <Navbar />
            <AddVerse />
            <Verses />
            <Verse />
            
        </div>
    )
}

export default Dashboard
