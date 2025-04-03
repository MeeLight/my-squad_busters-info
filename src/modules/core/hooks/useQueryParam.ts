// Hooks
import { useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'

interface IUseQueryParam {
  name: string
  regexPattern: RegExp
  errorPagePath: string
}

interface IUseQueryParamResult {
  queryParam: string | null
}

export default function useQueryParam({
  name,
  regexPattern,
  errorPagePath
}: IUseQueryParam): IUseQueryParamResult {
  const navigate = useNavigate()
  const [searchParams, _] = useSearchParams()
  const queryParam = searchParams.get(name)

  useEffect(() => {
    if (queryParam !== null) {
      if (!regexPattern.test(queryParam)) {
        console.error('[queryParam] Invalid')
        navigate(errorPagePath)
      }
    }
  }, [queryParam])

  return { queryParam }
}
