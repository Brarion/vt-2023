type FlattenArray<T> = T extends Array<infer U> ? U : T;

type Flatten<T extends any[]> = T extends [infer U, ...infer Rest]
    ? U extends any[]
        ? [...Flatten<U>, ...Flatten<Rest>]
        : [U, ...Flatten<Rest>]
    : [];

const originalArray = [1, [2, 3], [4, [5, 6]]];
type FlattenedArray = Flatten<typeof originalArray>;


