// ❌ "type" is split to its own line
import {
	a,
	AAAAAAAAAAAAAA,
	BBBBBBBBBBBBBB,
	CCCCCCCCCCCCCC,
	DDDDDDDDDDDDDD,
} from "./exportedstuff";

// ✅ Types are applied to specific exports
// ✅ Only used types are linted in import
// ❌ "type" is split to its own line
import {
	EEEEEEEEEEEEEE,
	FFFFFFFFFFFFFF,
	GGGGGGGGGGGGGG,
	HHHHHHHHHHHHHH,
	IIIIIIIIIIIIII,
	JJJJJJJJJJJJJJ,
} from "./exportedstuff";

a;
let _a: AAAAAAAAAAAAAA;
let _e: EEEEEEEEEEEEEE;
