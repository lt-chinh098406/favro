import camelCase from 'lodash/camelCase'
import snakeCase from 'lodash/snakeCase'

export interface UtilHelperProps {
  toCamelCase: (obj: object) => any
  toSnakeCase: (obj: object) => any
}

const toCamelCase: any = (obj: any) => {
  if (!obj || typeof obj !== 'object') return obj

  if (!Array.isArray(obj)) {
    return Object.fromEntries(
      Object.entries(obj).map(([key, val]) => [
        camelCase(key),
        toCamelCase(val),
      ])
    )
  } else {
    return obj.map((el) => toCamelCase(el))
  }
}

const toSnakeCase: any = (obj: any) => {
  if (!obj || typeof obj !== 'object') return obj

  if (!Array.isArray(obj)) {
    return Object.fromEntries(
      Object.entries(obj).map(([key, val]) => [
        snakeCase(key),
        toSnakeCase(val),
      ])
    )
  } else {
    return obj.map((el) => toSnakeCase(el))
  }
}

const helper: UtilHelperProps = {
  toCamelCase,
  toSnakeCase,
}

export default helper
