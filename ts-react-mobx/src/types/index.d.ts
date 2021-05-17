declare module '*.less' {
  const resource: { [key: string]: string }
  export = resource
}

interface Window {
  __data: any
  TopTab: any
}
interface NodeModule {
  hot: any
}

declare namespace React {
  interface HTMLAttributes {
    styleName?: string
  }
}
