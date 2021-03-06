/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var objectKeys = require( '@stdlib/utils/keys' );
var datasets = require( './../' ).datasets;


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof datasets, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has methods for returning datasets', function test( t ) {
	var expected;
	var keys;
	var k;
	var i;

	expected = [
		'AFINN_111',
		'AFINN_96',
		'ANSCOMBES_QUARTET',
		'BERNDT_CPS_WAGES_1985',
		'CDC_NCHS_US_BIRTHS_1969_1988',
		'CDC_NCHS_US_BIRTHS_1994_2003',
		'CDC_NCHS_US_INFANT_MORTALITY_BW_1915_2013',
		'CMUDICT',
		'DALE_CHALL_NEW',
		'EMOJI',
		'EMOJI_CODE_PICTO',
		'EMOJI_PICTO_CODE',
		'FEMALE_FIRST_NAMES_EN',
		'FIVETHIRTYEIGHT_FFQ',
		'FRB_SF_WAGE_RIGIDITY',
		'HARRISON_BOSTON_HOUSE_PRICES',
		'HARRISON_BOSTON_HOUSE_PRICES_CORRECTED',
		'HERNDON_VENUS_SEMIDIAMETERS',
		'IMG_ACANTHUS_MOLLIS',
		'IMG_AIRPLANE_FROM_ABOVE',
		'IMG_ALLIUM_OREOPHILUM',
		'IMG_BLACK_CANYON',
		'IMG_DUST_BOWL_HOME',
		'IMG_FRENCH_ALPINE_LANDSCAPE',
		'IMG_LOCOMOTION_HOUSE_CAT',
		'IMG_LOCOMOTION_NUDE_MALE',
		'IMG_MARCH_PASTORAL',
		'IMG_NAGASAKI_BOATS',
		'LIU_NEGATIVE_OPINION_WORDS_EN',
		'LIU_POSITIVE_OPINION_WORDS_EN',
		'MALE_FIRST_NAMES_EN',
		'MINARD_NAPOLEONS_MARCH',
		'MOBY_DICK',
		'MONTH_NAMES_EN',
		'NIGHTINGALES_ROSE',
		'PACE_BOSTON_HOUSE_PRICES',
		'PRIMES_100K',
		'SAVOY_STOPWORDS_FIN',
		'SAVOY_STOPWORDS_FR',
		'SAVOY_STOPWORDS_GER',
		'SAVOY_STOPWORDS_IT',
		'SAVOY_STOPWORDS_POR',
		'SAVOY_STOPWORDS_SP',
		'SAVOY_STOPWORDS_SWE',
		'SOTU',
		'SPACHE_REVISED',
		'SPAM_ASSASSIN',
		'SSA_US_BIRTHS_2000_2014',
		'STANDARD_CARD_DECK',
		'STOPWORDS_EN',
		'SUTHAHARAN_MULTI_HOP_SENSOR_NETWORK',
		'SUTHAHARAN_SINGLE_HOP_SENSOR_NETWORK',
		'US_STATES_ABBR',
		'US_STATES_CAPITALS',
		'US_STATES_CAPITALS_NAMES',
		'US_STATES_NAMES',
		'US_STATES_NAMES_CAPITALS'
	];
	keys = objectKeys( datasets ).sort();
	t.deepEqual( keys, expected, 'returns expected value' );

	for ( i = 0; i < expected.length; i++ ) {
		k = expected[ i ];
		t.equal( typeof datasets[ k ], 'function', 'returns a function for key: ' + k );
	}
	t.end();
});
