import { Menu } from '@headlessui/react'
import { useEffect, useState } from 'react'
import { getAllProducts } from '../services/products'

export function Home() {
  const [products, setProducts] = useState<Array<any> | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  async function handleGettAllProducts() {
    try {
      setIsLoading(true)
      const { data } = await getAllProducts()
      console.log(data)
      setProducts(data)
    } catch (error) {
      alert(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    handleGettAllProducts()
  }, [])

  return (
    <div className="w-screen h-screen flex bg-slate-300">
      <div className="w-3/5 bg-red-300 ml-auto mx-auto">
        {/* <Menu>
          <Menu.Button>Menu</Menu.Button>
          <Menu.Items>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`${active && 'bg-blue-500'}`}
                  href="/account-settings"
                >
                  Account settings
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </Menu> */}

        <div className='grid grid-cols-4 mt-10 gap-11'>
          {!isLoading && products ? products.map(product => (
            <div className='px-1 py-1 flex items-center justify-center bg-slate-700'>
              <span className='text-slate-100'>{product.name}</span>
            </div>
          )) : (
            <span>Carregando...</span>
          )}
        </div>
      </div>
    </div>
  )
}