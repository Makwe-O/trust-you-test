import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Table from '../../components/Table';
import PieChart from '../../components/PieChart';
import { sendRequest } from '../../apiConfig';
import { SyncLoader } from 'react-spinners';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [tableData, setTableData] = useState({});

  useEffect(() => {
    async function fetchAnswers() {
      // You can await here
      const { data } = await sendRequest('/review-distribution');
      setTableData(data);
      setLoading(false);
      // ...
    }
    fetchAnswers();
  }, []);
  return loading ? (
    <div className='spinner'>
      <SyncLoader />
    </div>
  ) : (
    <div>
      <div>
        <Header title={'Overall Score'} />
        <div className='item-container'>
          <Table
            title={['Answer Type', 'Amount of Reviews']}
            data={tableData?.data?.overall_score}
            question='overall_score'
          />
          <div style={{ height: '400px' }}>
            <PieChart data={tableData?.data?.overall_score} />
          </div>
        </div>
      </div>

      <div>
        <Header title={'Guest Type'} />
        <div className='item-container'>
          <Table
            title={['Answer Type', 'Amount of Reviews']}
            data={tableData?.data?.guest_type}
            question='guest_type'
          />
          <div style={{ height: '250px' }}>
            <PieChart data={tableData?.data?.guest_type} />
          </div>
        </div>
      </div>

      <div>
        <Header title={'Guest Age'} />
        <div className='item-container'>
          <Table
            title={['Answer Type', 'Amount of Reviews']}
            data={tableData?.data?.guest_age}
            question='guest_age'
          />
          <div style={{ height: '250px' }}>
            <PieChart data={tableData?.data?.guest_age} />
          </div>
        </div>
      </div>

      <div>
        <Header title={'Guest Nationality'} />
        <div className='item-container'>
          <Table
            title={['Answer Type', 'Amount of Reviews']}
            data={tableData?.data?.guest_nationality}
            question='guest_nationality'
          />
          <div style={{ height: '400px' }}>
            <PieChart data={tableData?.data?.guest_nationality} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
