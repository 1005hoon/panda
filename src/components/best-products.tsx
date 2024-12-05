import { useEffect, useState } from 'react'

export default function BestProducts() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts({
      pageSize: 4,
      orderBy: 'favorite'
    })
  }, [])

  return <div>best products</div>
}
