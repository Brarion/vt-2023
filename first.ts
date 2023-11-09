type MyExclude<T, U> = T extends U ? never : T;

type T0 = MyExclude<"a" | "b" | "c", "a">; // "b" | "c"
type T1 = MyExclude<"a" | "b" | "c", "a" | "b">; // "c"