import { useEffect, useState } from 'react'

export default function Products() {
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(8)
  const [keyword, setKeyword] = useState('')
  const [orderBy, setOrderBy] = useState('recent')

  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts({
      pageSize,
      page,
      orderBy,
      keyword
    }).then(data => {
      setProducts(data)
    })
  }, [page, pageSize, orderBy, keyword])

  return <div>
    <SearchProduct keyworkd={keyword} onValueChange={setKeyword}/>
    <SortProduct orderBy={orderBy} onValueChange={setOrderBy} />
    {products.map( ...)}
    <Pagination page={page} onPageChange={setPage}/>
  </div>
}
