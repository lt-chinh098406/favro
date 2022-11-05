export interface OptionsProps {
  value: any
  label: any
}

export interface OptionsMasterProps extends OptionsProps {
  colorCode: any
}

export interface ObjectProps {
  [key: string]: any
}

export type SnackbarTypeProps = 'success' | 'error'

export interface SnackbarProps {
  text: string
  show: boolean
  type?: SnackbarTypeProps
}

export interface TableHeaderProps {
  text: string
  value: string
  width?: string
  sortable?: boolean
  align?: string
  class?: string | string[]
  key?: string
}

export type ValueOf<T> = T[keyof T]

export interface TableHeaderSortableProps extends TableHeaderProps {
  sortable?: boolean
}

export interface ItemProps {
  id: number
  name: string
}

export interface OptionAutocompleteProps {
  text: string
  value: number
}
