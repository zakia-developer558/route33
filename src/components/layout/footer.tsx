import monster from '../../assets/landing-page/monster.png'
export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 mb-4 md:mb-0">
            © 2025 GetFork, Inc. All rights reserved.
          </div>
          <div className="flex space-x-6 text-gray-500">
            Powered by Monster Hub
           <img
           src={monster}
           height={24}
           width={24}
           />
          </div>
        </div>
      </div>
    </footer>
  );
}
