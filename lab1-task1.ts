type MyAwaited<T> = T extends Promise<infer U> ? U : T;

// Пример
type ExampleType = Promise<string>;
type Result = MyAwaited<ExampleType>;
