type MyAwaited<T> = T extends Promise<infer U> ? U : any;
type ExampleType = Promise<string>;
type Result = MyAwaited<ExampleType>;