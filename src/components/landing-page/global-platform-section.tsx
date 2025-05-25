import image1 from '../../assets/landing-page/Image 1.svg';
import image2 from '../../assets/landing-page/Image 2.svg';

export default function GlobalPeoplePlatform() {
  return (
    <div className="bg-white py-16 px-4 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Text Content */}
          <div className="lg:col-span-2 space-y-5">
            <p className="text-sm text-gray-500 font-small tracking-wide uppercase">
              Global People Platform
            </p>

            {/* Adjusted heading size (smaller) */}
    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight max-w-lg">
      Expand globally with speed and simplicity
    </h2>

    {/* Increased paragraph width */}
<p className="text-gray-900 leading-relaxed text-base md:text-[1.24rem] max-w-xs sm:max-w-sm md:max-w-lg">
  Route 33 enables teams of any size—from fast-moving startups to global enterprises—to scale across borders
  without friction. Hire talent worldwide without opening entities, streamline HR operations, and pay
  contractors or full-time employees in any country with a single, compliant platform.
</p>
          </div>

          {/* Images - Side by side with diagonal stacking */}
          <div className="lg:col-span-1 flex justify-center items-center relative space-x-4">
            {/* First Image */}
            <div className="transform -rotate-8 border-0 ">
              <img
                src={image2}
                alt="Person working on laptop with coffee"
                className="w-60 h-80 object-cover "
              />
            </div>
            {/* Second Image */}
            <div className="transform rotate-8 -mt-50 px-3">
              <img
                src={image1}
                alt="Silhouette of person against window at sunset"
                className="w-60 h-80 object-cover  "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

