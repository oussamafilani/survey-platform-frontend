import {useState, useEffect} from 'react'
import {DocumentNode, useQuery} from '@apollo/client'
import {useLocation} from 'react-router-dom'
interface IUseQueryPaginated {
  query_doc: DocumentNode
  variables?: {[key: string]: any}
  skip?: boolean
}
function useQueryPaginated({query_doc, variables, skip}: IUseQueryPaginated) {
  function useQueryParams() {
    return new URLSearchParams(useLocation().search)
  }
  const query = useQueryParams()
  const pageIndex = parseInt(query.get('page') ?? '') || 0
  const pageSize = parseInt(query.get('pageSize') ?? '') || 10
  const [offsets, setOffsets] = useState({})
  const {fetchMore, loading, ...rest} = useQuery(query_doc, {
    variables: {...variables, limit: pageSize, offset: pageIndex * pageSize},
    skip,
  })
  useEffect(() => {
    if (!skip) {
      if (pageIndex in offsets) return
      fetchMore({variables: {offset: pageIndex * pageSize}})
      setOffsets(offsets => ({...offsets, [pageIndex]: true}))
    }
  }, [fetchMore, offsets, setOffsets, pageIndex, pageSize, skip])

  return {...rest, loading, pageSize}
}

export default useQueryPaginated
