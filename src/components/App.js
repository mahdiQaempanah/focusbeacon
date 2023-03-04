import '../styles/App.css';
import SessionsByDuration from './SessionsByDuration';
import LifetimeMetrics from './LifetimeMetrics';
import '@tremor/react/dist/esm/tremor.css';
import Milestones from './Milestones';
import { ColGrid, Metric } from '@tremor/react';
import useProcessData from '../hooks/useProcessData';
import RepeatPartners from './RepeatPartners';
import LTMSessions from './LTMSessions';
import LTMHours from './LTMHours';
import NavBar from './NavBar';
import LoaderSpinner from './LoaderSpinner';
import Footer from './Footer';
import LTWSessions from './LTWSessions';
import LTWHours from './LTWHours';

export default function App() {
  const [
    loading,
    profileData,
    totalSessions, 
    totalHours, 
    totalPartners,
    firstSessionDate,
    maxHoursADay,
    sessionsByDurationArr,
    milestonesArr,
    repeatPartnersArr,
    lTMSessionsArr,
    lTMHoursArr,
    updateTime,
    lTWSessionsArr,
    lTWHoursArr,
  ] = useProcessData();
  
  if (loading) {
    return (
      <div className='center'>
        <LoaderSpinner/>
      </div>
    )
  } else {
    return (
      <div className='background'>
        <NavBar data={profileData}/>
        <Metric textAlignment='text-center' className={'margin'} marginTop='mt-7'>All Time</Metric>
        <div className={'margin'}>
          <LifetimeMetrics data={[
              totalSessions, 
              totalHours,
              totalPartners,
              firstSessionDate,
              maxHoursADay,
          ]}/>
        </div>
        <div className={'margin'}>
          <ColGrid numColsLg={ 3 } gapX="gap-x-6" gapY="gap-y-6">
            <SessionsByDuration data={[sessionsByDurationArr, totalSessions]}/>
            <Milestones data={milestonesArr}/>
            <RepeatPartners data={repeatPartnersArr}/>
          </ColGrid>
        </div>
        
        <Metric textAlignment='text-center' className={'margin'}>Last 12 Weeks</Metric>
        <div className={'margin'}>
          <ColGrid numColsLg={ 2 } gapX="gap-x-6" gapY="gap-y-6">
            <LTWSessions data={lTWSessionsArr}/>
            <LTWHours data={lTWHoursArr}/>
          </ColGrid>
        </div>

        <Metric textAlignment='text-center' className={'margin'}>Last 12 Months</Metric>
        <div className={'margin'}>
          <ColGrid numColsLg={ 2 } gapX="gap-x-6" gapY="gap-y-6">
            <LTMSessions data={lTMSessionsArr}/>
            <LTMHours data={lTMHoursArr}/>
          </ColGrid>
        </div>

        <div className={'margin'}>
          <Footer data={updateTime}/>
        </div>
        
        <br/>
      </div>
    )
  }
}
