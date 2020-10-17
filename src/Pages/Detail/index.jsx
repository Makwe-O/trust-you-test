import React, { useState, useEffect } from 'react';
import { sendRequest } from '../../apiConfig';
import { SyncLoader } from 'react-spinners';
import { useParams, Link } from 'react-router-dom';
import Card from '../../components/Card';

const Detail = () => {
  const [reviewData, setReviewData] = useState([]);
  const [loading, setLoading] = useState([]);
  const params = useParams();

  useEffect(() => {
    async function fetchReviews() {
      // You can await here
      const { data } = await sendRequest('/reviews', {
        filter_type: params.question,
        filter_value: params.answer,
      });
      setReviewData(data);
      setLoading(false);
      // ...
    }
    fetchReviews();
  }, [params.answer, params.question]);

  return loading ? (
    <div className='spinner'>
      <SyncLoader />
    </div>
  ) : (
    <>
      <Link to='/'>Go Back</Link>
      {reviewData?.data.length === 0 ? (
        <h4 className='no-data'>No data available</h4>
      ) : (
        <div className='card-list'>
          {reviewData?.data.map((data, index) => (
            <div key={index}>
              <Card cardData={data} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Detail;
