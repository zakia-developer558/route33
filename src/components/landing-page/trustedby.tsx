import Walletly from '../../assets/landing-page/walletly logo.svg'
import xtencive from '../../assets/landing-page/xincentive logo.svg'
import getfork from '../../assets/landing-page/getfork logo.svg'
import security from '../../assets/landing-page/security group.svg'


export default function TrustedBySection() {
  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-xl text-center text-muted-foreground mb-8">
          Trusted by the best in the business
        </h2>

        {/* Logo Grid - Same for both mobile and desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center items-center">
          <div >
            <img src={Walletly} alt="Walletly" className="object-contain h-12 mx-auto" />
          </div>
          <div>
            <img src={xtencive} alt="ROB" className="object-contain h-12  mx-auto" />
          </div>
          <div>
            <img src={getfork} alt="Stanford" className="object-contain h-12 mx-auto" />
          </div>
          <div>
            <img src={security} alt="Colossus" className="object-contain h-12 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}