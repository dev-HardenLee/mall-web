import { lazy, Suspense } from 'react'
import { Navigate } from 'react-router-dom'

const Loading = <div className={'bg-red-700'}>Loading...</div>
const ProductList = lazy(() => import('../pages/product/ListPage'))
const ProductAdd = lazy(() => import('../pages/product/AddPage'))

const productsRouter = () => {
  return [
    {
      path: '',
      element:  <Navigate replace={true} to={'/products/list'}></Navigate>
    },
    {
      path: 'list',
      element: <Suspense fallback={Loading}><ProductList/></Suspense>
    },
    {
      path: 'add',
      element: <Suspense fallback={Loading}><ProductAdd/></Suspense>
    },
  ]
}

export default productsRouter
