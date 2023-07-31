import type { ExtractPropTypes, PropType } from 'vue'

export const epPropKey = '__epPropKey'

export type NativePropType = | ((...args: any) => any) | { new (...args: any): any } | undefined | null

export type IfNever<T, Y = true, N = false> = [T] extends [never] ? Y : N

export type IfUnknown<T, Y, N> = [unknown] extends [T] ? Y : N

export type UnknownToNever<T> = IfUnknown<T, never, T>

type Value<T> = T[keyof T]

export type ExtractPropType<T extends object> = Value<
  ExtractPropTypes<{
    key: T
  }>
>

export type Writable<T> = { -readonly [P in keyof T]: T[P] }

export type WritableArray<T> = T extends readonly any[] ? Writable<T> : T

export type ResolvePropType<T> = IfNever<T, never, ExtractPropType<{
    type: WritableArray<T>
    required: true
  }>
>
export type EpPropMergeType<Type, Value, Validator> = | IfNever<UnknownToNever<Value>, ResolvePropType<Type>, never> | UnknownToNever<Value> | UnknownToNever<Validator>

export type EpPropInputDefault<Required extends boolean, Default> =
  Required extends true ? never : Default extends Record<string, unknown> | Array<any> ? () => Default : (() => Default) | Default

export type EpPropInput<Type, Value, Validator, Default extends EpPropMergeType<Type, Value, Validator>, Required extends boolean> = {
  type?: Type
  required?: Required
  values?: readonly Value[]
  validator?: ((val: any) => val is Validator) | ((val: any) => boolean)
  default?: EpPropInputDefault<Required, Default>
}

export type IfEpProp<T, Y, N> = T extends { [epPropKey]: true } ? Y : N

export type IfNativePropType<T, Y, N> = [T] extends [NativePropType] ? Y : N

export type EpProp<Type, Default, Required> = {
  readonly type: PropType<Type>
  readonly required: [Required] extends [true] ? true : false
  readonly validator: ((val: unknown) => boolean) | undefined
  [epPropKey]: true
} & IfNever<Default, unknown, { readonly default: Default }>

export type EpPropFinalized<Type, Value, Validator, Default, Required> =
  EpProp<EpPropMergeType<Type, Value, Validator>, UnknownToNever<Default>, Required>

export type EpPropConvert<Input> =
  Input extends EpPropInput<infer Type, infer Value, infer Validator, any, infer Required> ? EpPropFinalized<Type, Value, Validator, Input['default'], Required> : never
