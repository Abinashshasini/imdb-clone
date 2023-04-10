import React from 'react';
import HorizontalSkeleton from '../../../skeleton/HorizontalSkeleton';

const Loading = () => {
  return (
    <>
      {new Array(15).fill(1).map((_) => (
        <HorizontalSkeleton />
      ))}
    </>
  );
};

export default Loading;
