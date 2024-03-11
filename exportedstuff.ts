type AAAAAAAAAAAAAA = "A";
type BBBBBBBBBBBBBB = "B";
type CCCCCCCCCCCCCC = "C";
type DDDDDDDDDDDDDD = "D";
type EEEEEEEEEEEEEE = "E";
type FFFFFFFFFFFFFF = "F";
type GGGGGGGGGGGGGG = "G";
type HHHHHHHHHHHHHH = "H";
type IIIIIIIIIIIIII = "I";
type JJJJJJJJJJJJJJ = "J";
const a = "A";

// ✅Types are applied to specific exports
// ❌ "type" is split to its own line
//
// Expected:
// export {
// 	a,
// 	type AAAAAAAAAAAAAA,
// 	type BBBBBBBBBBBBBB,
// 	type CCCCCCCCCCCCCC,
// 	type DDDDDDDDDDDDDD,
// 	type EEEEEEEEEEEEEE,
// };
//
// Actual:
// export {
// 	a,
// 	type
//     AAAAAAAAAAAAAA,
// 	type
//     BBBBBBBBBBBBBB,
// 	type
//     CCCCCCCCCCCCCC,
// 	type
//     DDDDDDDDDDDDDD,
// 	type
//     EEEEEEEEEEEEEE,
// };
export {
	a,
	AAAAAAAAAAAAAA,
	BBBBBBBBBBBBBB,
	CCCCCCCCCCCCCC,
	DDDDDDDDDDDDDD,
	EEEEEEEEEEEEEE,
};

// ✅Types are applied to entire export block
export {
	FFFFFFFFFFFFFF,
	GGGGGGGGGGGGGG,
	HHHHHHHHHHHHHH,
	IIIIIIIIIIIIII,
	JJJJJJJJJJJJJJ,
};
