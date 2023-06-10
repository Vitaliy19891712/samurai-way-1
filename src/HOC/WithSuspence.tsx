import { ComponentType, Suspense } from "react";

export function withSuspence<T>(Component: ComponentType<T>) {
  return (props: any) => {
    return (
      <Suspense fallback={<p>Loading...</p>}>
        <Component {...props} />
      </Suspense>
    );
  };
}
