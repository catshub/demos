import _Stores from '../store'

declare global {
  /**
   * extend
   * 扩展现有声明
   */

  type NumLike = number | string

  /**
   * custom
   * 自定义声明
   */

  // store
  type Stores = typeof _Stores
  type Store<T extends keyof Stores = keyof Stores> = Stores[T]
  type PropsMobx<T extends keyof Stores = keyof Stores> = Pick<Partial<Stores>, T> & { [props: string]: any }

  interface PropsRoute<T = any> extends Partial<RouteComponentProps<T>> {}
  interface PropsForm<T = any> extends RcBaseFormProps {
    form?: WrappedFormUtils<T>
  }
  type Props_Mobx_Route<T extends keyof Stores = keyof Stores> = PropsMobx<T> & PropsRoute
  type Props_Mobx_Form<T extends keyof Stores = keyof Stores> = PropsMobx<T> & PropsForm
  type Props_Route_Form = PropsRoute & PropsForm
  type PropsMFR<T extends keyof Stores = keyof Stores> = PropsMobx<T> & PropsForm & PropsRoute
}
