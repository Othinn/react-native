/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

const {ComponentsScreen} = require('../../../screens/components.screen.js');
const {
  ActivityIndicatorComponentScreen,
} = require('../../../screens/components/activityIndicatorComponent.screen.js');

describe('Test is checking default activity indicator component', function () {
  before(async function (capabilities, specs) {
    //Added it for make sure that metro bundler is completed
    await ComponentsScreen.checkComponentScreenHeaderIsDisplayed();
  });

  it('Should view properly Indicator Component', async function () {
    expect(
      await ComponentsScreen.checkActivityIndicatorComponentIsDisplayed(),
    ).toBeTruthy();
  });

  it('Click Activity Indicator', async function () {
    await ComponentsScreen.clickActivityIndicatorComponent();
  });

  it('Should view properly default progress bar', async function () {
    expect(
      await ActivityIndicatorComponentScreen.checkDefaultActivityIndicatorIsDisplayed(),
    ).toBeTruthy();
  });
});
