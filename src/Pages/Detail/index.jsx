import React, { useState, useEffect } from 'react';
import { sendRequest } from '../../apiConfig';
import { SyncLoader } from 'react-spinners';
import { useParams, Link } from 'react-router-dom';

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
  }, []);
  console.log(reviewData, '########');
  return loading ? (
    <SyncLoader />
  ) : (
    <>
      <Link to='/'>Go Back</Link>
      <div>
        {reviewData.data.map((data) => (
          <div>data</div>
        ))}
      </div>
    </>
  );
};

export default Detail;
