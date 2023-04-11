import React from 'react';
import HorizontalSkeleton from '../../../skeleton/HorizontalSkeleton';

const Loading = () => {
  return (
    <div className="px-5 py-5 md:px-14 lg:px-24 lg:py-10">
      {new Array(15).fill(1).map((_) => (
        <HorizontalSkeleton />
      ))}
    </div>
  );
};

export default Loading;
