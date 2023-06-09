import CardSkeleton from '../../skeleton/CardSkeleton';
import HorizontalSkeleton from '../../skeleton/HorizontalSkeleton';

const Loading = () => {
  return (
    <div className="px-5 py-5 xl:px-36 xl:py-8 lg:py-8 lg:px-16 mt-20">
      <div
        style={{
          gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
          gap: '2rem',
        }}
        className="hidden md:grid mt-10 pb-20"
      >
        {new Array(16).fill(1).map((_) => (
          <CardSkeleton type="large" />
        ))}
      </div>
      <div className="flex mt-10 pb-20 lg:hidden  flex-wrap">
        {new Array(16).fill(1).map((_) => (
          <HorizontalSkeleton />
        ))}
      </div>
    </div>
  );
};

export default Loading;
