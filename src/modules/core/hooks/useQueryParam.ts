import { useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'

interface IQueryParamHook {
  queryParamName: string
  regex: RegExp
}

interface IQueryParamHook {
  queryParamName: string
  regex: RegExp
}

export default function useQueryParam({
  queryParamName,
  regex
}: IQueryParamHook) {
  const [searchParams, setSearchParams] = useSearchParams()
  const queryParam = searchParams.get(queryParamName)

  useEffect(() => {
    if (queryParam) {
      if (!regex.test(queryParam)) {
        // Redireccionar o mostrar error si el formato no es válido
        console.error('Formato de query inválido')
        // Opción: redireccionar a página de error o limpiar el parámetro
        setSearchParams({})
      }
    }
  }, [queryParam, setSearchParams])

  return { queryParam }
}
