import React from 'react';
import Link from 'next/link';
import styles from '../components/components.module.css';

// Component for the Help section banner
export default function HelpBanner() {
  return (
    // Outer section with a specific style class
    <section className={styles.help}>
      
      {/* Inner section with text content */}
      <section className='text-[#fff] sm:w-[50%] sm:p-[5em]'>
        
        {/* Main heading for the banner */}
        <h2 className='sm:text-[4em] text-6xl font-sans font-semibold'>
          Need Help?
        </h2>

        {/* Subtitle or paragraph describing the need for help */}
        <p className='sm:text-2xl text-xl font-sans'>
          Need help or assistance? Our team is standing by<br /> to make sure you get the help you need. <br /> Whether you need to adjust an order or <br /> delivery details, we&apos;re ready to help!
        </p>

        {/* Button for contacting support */}
        <button className='px-4 py-2 mt-4 rounded-md hover:bg-white hover:text-black border-2 border-white border-solid font-semibold'>
          Contact Support
        </button>
      </section>
    </section>
  );
}


// import React from 'react'
// import Link from 'next/link'
// import styles from '../components/components.module.css'

// export default function HelpBanner() {
//   return (
//     <section className={styles.help}>
//       <section className='text-[#fff] sm:w-[50%] sm:p-[5em]'>
//         <h2 className='sm:text-[4em] text-6xl font-sans font-semibold'>Need Help?</h2>
//         <p className='sm:text-2xl text-xl font-sans'>
//         Need help or assistance? Our team is standing by<br /> to make sure you get the help you need. <br /> Whether you need to adjust an order or <br /> delivery details, we&apos;re ready to help!
//         </p>
//         <button className='px-4 py-2 mt-4 rounded-md hover:bg-white hover:text-black border-2 border-white border-solid font-semibold'>Contact Support</button>
//       </section>
//     </section>
//   )
// }
