// Copyright 2020 The Oppia Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Unit tests for the ExplorationCategoryService.
 */

// TODO(#7222): Remove the following block of unnnecessary imports once
// the code corresponding to the spec is upgraded to Angular 8.
import { importAllAngularServices } from 'tests/unit-test-utils.ajs';
// ^^^ This block is to be removed.

import { TestBed } from '@angular/core/testing';
import { ExplorationCategoryService } from './exploration-category.service';

require(
  'pages/exploration-editor-page/services/exploration-category.service.ts');

describe('Exploration Category Service', function() {
  let ecs: ExplorationCategoryService = null;

  importAllAngularServices();
  beforeEach(() => {
    ecs = TestBed.inject(ExplorationCategoryService);
  });

  it('should test the child object properties', function() {
    expect(ecs.propertyName).toBe('category');
    expect(ecs._isValid('Algorithms')).toBe(true);
    let NotNormalize = '   Exploration             Category Service     ';
    let Normalize = 'Exploration Category Service';
    expect(ecs._normalize(NotNormalize)).toBe(Normalize);
  });
});
