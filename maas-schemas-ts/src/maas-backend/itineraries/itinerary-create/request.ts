/*

undefined
Request schema for itineraries-create

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Itinerary_ from 'maas-schemas-ts/core/itinerary';
import * as ProductOption_ from 'maas-schemas-ts/core/product-option';
import * as CustomerSelection_ from 'maas-schemas-ts/core/components/customerSelection';
import * as Units_ from 'maas-schemas-ts/core/components/units';
import * as ApiCommon_ from 'maas-schemas-ts/core/components/api-common';
import * as Common_ from 'maas-schemas-ts/core/components/common';
import * as Message_ from 'maas-schemas-ts/core/components/message';

export const schemaId =
  'http://maasglobal.com/maas-backend/itineraries/itinerary-create/request.json';

// OutwardReturnWrapper
// The purpose of this remains a mystery
export type OutwardReturnWrapper = t.Branded<
  {
    itinerary?: Itinerary_.Itinerary;
    customerSelections?: Array<{
      ref?: ProductOption_.Ref;
      customerSelection?: CustomerSelection_.CustomerSelection;
    }>;
  },
  OutwardReturnWrapperBrand
>;
export const OutwardReturnWrapper = t.brand(
  t.partial({
    itinerary: Itinerary_.Itinerary,
    customerSelections: t.array(
      t.partial({
        ref: ProductOption_.Ref,
        customerSelection: CustomerSelection_.CustomerSelection,
      }),
    ),
  }),
  (
    x,
  ): x is t.Branded<
    {
      itinerary?: Itinerary_.Itinerary;
      customerSelections?: Array<{
        ref?: ProductOption_.Ref;
        customerSelection?: CustomerSelection_.CustomerSelection;
      }>;
    },
    OutwardReturnWrapperBrand
  > => true,
  'OutwardReturnWrapper',
);
export interface OutwardReturnWrapperBrand {
  readonly OutwardReturnWrapper: unique symbol;
}

// Request
// The default export. More information at the top.
export type Request = t.Branded<
  {
    identityId?: Units_.IdentityId;
    headers?: ApiCommon_.Headers;
    payload?: {
      itinerary?: Itinerary_.Itinerary;
      paymentSourceId?: Common_.PaymentSourceId;
      outward?: OutwardReturnWrapper;
      return?: OutwardReturnWrapper;
    };
    message?: Message_.Message;
  },
  RequestBrand
>;
export const Request = t.brand(
  t.partial({
    identityId: Units_.IdentityId,
    headers: ApiCommon_.Headers,
    payload: t.partial({
      itinerary: Itinerary_.Itinerary,
      paymentSourceId: Common_.PaymentSourceId,
      outward: OutwardReturnWrapper,
      return: OutwardReturnWrapper,
    }),
    message: Message_.Message,
  }),
  (
    x,
  ): x is t.Branded<
    {
      identityId?: Units_.IdentityId;
      headers?: ApiCommon_.Headers;
      payload?: {
        itinerary?: Itinerary_.Itinerary;
        paymentSourceId?: Common_.PaymentSourceId;
        outward?: OutwardReturnWrapper;
        return?: OutwardReturnWrapper;
      };
      message?: Message_.Message;
    },
    RequestBrand
  > => true,
  'Request',
);
export interface RequestBrand {
  readonly Request: unique symbol;
}

export default Request;

// Success