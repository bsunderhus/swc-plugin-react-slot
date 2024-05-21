import type {
  ReactElement,
  ReactPortal,
  JSXElementConstructor,
  ReactNode,
} from "react";
import type { IntrinsicOptionalPlugs, IntrinsicPlugs } from "./helper.types";
import type { PlugStatus } from "./plug.types";

/**
 * @public
 *
 * The base type of an object.
 *
 * This should **ONLY** be used in type templates as in `extends ObjectDataType`
 * it shouldn't be used as the type itself.
 *
 *
 * > **Note:** _In the context of Javascript, {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Language_overview#data_types | data types} is the term used to refer to the primitive types of the language._
 *
 * > _The Suffix "DataType" will denote the building block types that will serve as "primitive" to all other types._
 */
export type ObjectDataType = Record<string, unknown>;

/**
 * @public
 *
 * The base type of outlet type.
 *
 * This should **ONLY** be used in type templates as in `extends OutletTypeDataType`
 * it shouldn't be used as the type itself.
 *
 *
 * > **Note:** _In the context of Javascript, {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Language_overview#data_types | data types} is the term used to refer to the primitive types of the language._
 *
 * > _The Suffix "DataType" will denote the building block types that will serve as "primitive" to all other types._
 */
export type OutletTypeDataType =
  | keyof IntrinsicPlugs
  | JSXElementConstructor<ObjectDataType>;

/**
 * @public
 *
 * The base type of a plug type.
 *
 * This should **ONLY** be used in type templates as in `extends PlugTypeDataType`
 * it shouldn't be used as the type itself.
 *
 * > **Note:** _In the context of Javascript, {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Language_overview#data_types | data types} is the term used to refer to the primitive types of the language._
 *
 * > _The Suffix "DataType" will denote the building block types that will serve as "primitive" to all other types._
 */
export type PlugTypeDataType =
  | OutletTypeDataType
  | keyof IntrinsicOptionalPlugs;

/**
 * @public
 *
 * The base type of plug properties.
 *
 * This should **ONLY** be used in type templates as in `extends PlugPropsDataType`
 * it shouldn't be used as the type itself.
 *
 * > **Note:** _In the context of Javascript, {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Language_overview#data_types | data types} is the term used to refer to the primitive types of the language._
 *
 * > _The Suffix "DataType" will denote the building block types that will serve as "primitive" to all other types._
 */
export interface PlugPropsDataType {
  /**
   * The element type that the outlet is connected to.
   */
  as?: OutletTypeDataType;
  /**
   * A render function that can be used to completely override the markup of the outlet.
   * This is a dangerous feature and should be used with caution.
   */
  dangerouslyRenderOutlet?: OutletRendererDataType;
}

/**
 * @public
 *
 * The base type of an outlet renderer.
 *
 * This should **ONLY** be used in type templates as in `extends OutletRendererDataType`
 * it shouldn't be used as the type itself.
 *
 * > **Note:** _In the context of Javascript, {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Language_overview#data_types | data types} is the term used to refer to the primitive types of the language._
 *
 * > _The Suffix "DataType" will denote the building block types that will serve as "primitive" to all other types._
 */
export type OutletRendererDataType = (
  element: ReactElement<any, any>
) => ReactNode;

/**
 * @public
 *
 * The base type of a slot. Similar to ReactNode but without null | undefined
 *
 * This should **ONLY** be used in type templates as in `extends SlotDataType`
 * it shouldn't be used as the type itself.
 *
 * > **Note:** _In the context of Javascript, {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Language_overview#data_types | data types} is the term used to refer to the primitive types of the language._
 *
 * > _The Suffix "DataType" will denote the building block types that will serve as "primitive" to all other types._
 */
export type SlotDataType =
  | ReactElement
  | string
  | number
  | Iterable<SlotDataType>
  | ReactPortal
  | boolean;

/**
 * @public
 *
 * The base type of a plug.
 *
 * This should **ONLY** be used in type templates as in `extends PlugDataType`
 * it shouldn't be used as the type itself.
 *
 *
 * > **Note:** _In the context of Javascript, {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Language_overview#data_types | data types} is the term used to refer to the primitive types of the language._
 *
 * > _The Suffix "DataType" will denote the building block types that will serve as "primitive" to all other types._
 */
export type PlugDataType = PlugPropsDataType | SlotDataType | PlugStatus;
