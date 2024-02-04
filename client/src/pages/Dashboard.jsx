import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DashSidebar from '../components/DashSidebar';
import DashProfile from '../components/DashProfile';
import DashPosts from '../components/DashPosts';
import DashUsers from '../components/DashUsers';
import DashComments from '../components/DashComments';
import DashboardComp from '../components/DashboardComp';
import DashJobsComments from '../components/DashJobsComment';
import DashJobs from '../components/DashJobs';
import DashCustomer from '../components/DashCustomer';
import DashAppointment from '../components/DashAppointment';

export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState('');
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
      <div className='md:w-56'>
        {/* Sidebar */}
        <DashSidebar />
      </div>
      {/* profile... */}
      {tab === 'profile' && <DashProfile />}
      {/* posts... */}
      {tab === 'posts' && <DashPosts />}

        {/* comments  */}
      {tab === 'comments' && <DashComments />}
      {tab == 'userappointment' && <DashAppointment/>}
      {tab === 'customer' && <DashCustomer />}
      {tab === 'jobcomments' && <DashJobsComments />}
      {tab === 'job' && <DashJobs />}
      {/* users */}
      {tab === 'users' && <DashUsers />}
    
      {/* dashboard comp */}
      {tab === 'dash' && <DashboardComp />}
    </div>
  );
}
