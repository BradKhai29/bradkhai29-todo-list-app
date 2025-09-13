/**
 * Define a strongly typed PropsWithChildren type.
 * This type extends a given props type T to include an optional children prop.
 *
 * @template TProp - The original props type to extend.
 * @typedef {TProp & { children?: React.ReactNode }} PropsWithChildren
 */
export type PropsWithChildren<TProp> = TProp & { children?: React.ReactNode };