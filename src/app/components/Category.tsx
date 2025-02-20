import React from 'react';
import cate from './category.module.css';
import Link from 'next/link';

export default function Category() {
  return (
    <aside className={cate.cat}>
      <p className='relative font-bold p-0 m-0 left-40 bottom-4'>Shop by category</p>
      <ul>
        <li>
          <Link href='/category/crayfish'>
            <a>Crayfish</a>
          </Link>
        </li>

        <li>
          <Link href='/category/scallops'>
            <a>Scallops</a>
          </Link>
        </li>

        <li>
          <Link href='/category/lobsters'>
            <a>Lobsters</a>
          </Link>
        </li>

        <li>
          <Link href='/category/fish'>
            <a>Fish</a>
          </Link>
        </li>

        <li>
          <Link href='/category/oysters'>
            <a>Oysters</a>
          </Link>
        </li>

        <li>
          <Link href='/category/prawns'>
            <a>Prawns</a>
          </Link>
        </li>

        <li>
          <Link href='/category/crabs'>
            <a>Crabs</a>
          </Link>
        </li>

        <li>
          <Link href='/category/squids'>
            <a>Squids</a>
          </Link>
        </li>

        <li>
          <Link href='/category/crawfish'>
            <a>Crawfish</a>
          </Link>
        </li>

        <li>
          <Link href='/category/snails'>
            <a>Snails</a>
          </Link>
        </li>

        <li>
          <Link href='/category/seafood_ink'>
            <a>Seafood ink</a>
          </Link>
        </li>
      </ul>
    </aside>
  );
}


// import React from 'react'
// import cate from './category.module.css'
// import Link from 'next/link'

// export default function Category() {
//   return (
//     <aside className={cate.cat}>
//       <p className='relative font-bold p-0 m-0 left-40 bottom-4'>Shop by category</p>
//       <ul>
//         <Link href='/category/crayfish'>
//           <li>Crayfish</li>
//         </Link>

//         <Link href='/category/scallops'>
//           <li>Scallops</li>
//         </Link>

//         <Link href='/category/lobsters'>
//           <li>Lobsters</li>
//         </Link>

//         <Link href='/category/fish'>
//           <li>Fish</li>
//         </Link>

//         <Link href='/category/oysters'>
//           <li>Oysters</li>
//         </Link>

//         <Link href='/category/prawns'>
//           <li>Prawns</li>
//         </Link>

//         <Link href='/category/crabs'>
//           <li>Crabs</li>
//         </Link>

//         <Link href='/category/squids'>
//           <li>Squids</li>
//         </Link>

//         <Link href='/category/crawfish'>
//           <li>Crawfish</li>
//         </Link>

//         <Link href='/category/snails'>
//           <li>Snails</li>
//         </Link>

//         <Link href='/category/seafood_ink'>
//             <li>Seafood ink</li>
//         </Link>        
//       </ul>
//     </aside>
//   )
// }
