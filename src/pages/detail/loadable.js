import React, { Suspense } from 'react';
const DetailLazy = React.lazy(() => import('./index'));

const Loading = () => {
  return <div>Loading...</div>;
};

function Detail() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <DetailLazy />
      </Suspense>
    </div>
  );
}

export default Detail;
