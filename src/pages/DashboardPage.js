import React from 'react';
import MasterLayout from '../MasterLayout/MasterLayout';
import Dashboard from '../components/dashboard/Dashboard';

const DashboardPage = () => {
    return (
        <div>
            <MasterLayout>
                <Dashboard></Dashboard>
            </MasterLayout>
        </div>
    );
};

export default DashboardPage;