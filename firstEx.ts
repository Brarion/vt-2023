type MyAwaited<T> = T extends Promise<infer U> ? U : T;

type ExampleType = Promise<string>;
type NonPromiseType = "Hello, world!";
type ResultFromPromise = MyAwaited<ExampleType>;
