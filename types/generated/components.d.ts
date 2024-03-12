import type { Schema, Attribute } from '@strapi/strapi';

export interface TestCpnTestCpn extends Schema.Component {
  collectionName: 'components_test_cpn_test_cpns';
  info: {
    displayName: 'test-cpn';
    icon: 'arrowRight';
  };
  attributes: {};
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'test-cpn.test-cpn': TestCpnTestCpn;
    }
  }
}
