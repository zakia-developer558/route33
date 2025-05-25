import Rocket from '../../assets/landing-page/Laucnh-icon.svg'

export default function LaunchFaster() {
  return (
    <div className="bg-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Icon */}
        <div className="flex justify-center mb-8">
            <img
            src={Rocket}
           
            />
         
        </div>
        <div className='-mt-70'>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
          Launch Faster with
          <br />
          AI-First Architecture
        </h1>

        {/* Description */}
{/* Description */}
<p className="text-gray-600 text-[1.24rem] leading-relaxed max-w-lg mx-auto">
  Bring your ideas to life with production-ready AI <br></br> agents designed to scale. Our infrastructure is built to
  help you move from concept to execution—faster, smarter, and more reliably.
</p>


        </div>
      </div>
    </div>
  )
}
