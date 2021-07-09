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
 * @fileoverview Unit tests for the ExplorationTitleService.
 */

import { TestBed } from '@angular/core/testing';
import { importAllAngularServices } from 'tests/unit-test-utils.ajs';
import { ExplorationTitleService } from './exploration-title.service';

describe('Exploration Title Service', function() {
  let ets: ExplorationTitleService = null;

  importAllAngularServices();

  beforeEach(() => {
    ets = TestBed.inject(ExplorationTitleService);
  });

  it('should test the child object properties', function() {
    expect(ets.propertyName).toBe('title');
    let NotNormalize = '   Exploration         Title Service     ';
    let Normalize = 'Exploration Title Service';
    let Valid = 'exploration';
    let Empty = '';
    let Special = 'Explor%tion Title }service';
    expect(ets._normalize(NotNormalize)).toBe(Normalize);
    expect(ets._isValid(Valid)).toBe(true);
    expect(ets._isValid(Empty)).toBe(false);
    expect(ets._isValid(Special)).toBe(false);
  });
});
