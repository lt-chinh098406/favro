export interface ConstantCommonProps {
  ACCESS_TOKEN_KEY: string

  REFRESH_TOKEN_KEY: string

  TOKEN_AGE: number

  REFRESH_TOKEN_AGE: number

  LOCALE: string

  STATUS_CODE: {
    OK: number
    PAGE_NOT_FOUND: number
    UNAUTHORIZED: number
    FORBIDDEN: number
    SYSTEM_ERROR: number
    BAD_INPUT: number
  }
}

const constants: ConstantCommonProps = {
  ACCESS_TOKEN_KEY: 'access_token',
  REFRESH_TOKEN_KEY: 'refresh_token',
  LOCALE: 'en',

  TOKEN_AGE: 60 * 60 * 24 * 7,

  REFRESH_TOKEN_AGE: 60 * 60 * 24 * 30,

  STATUS_CODE: {
    OK: 200,
    PAGE_NOT_FOUND: 404,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    SYSTEM_ERROR: 500,
    BAD_INPUT: 400,
  },
}

export default constants
