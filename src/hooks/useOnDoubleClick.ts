// https://medium.com/trabe/prevent-click-events-on-double-click-with-react-with-and-without-hooks-6bf3697abc40

import { get } from 'lodash';
import useCancellablePromises from './useCancellablePromises';

const DELAY_DEFAULT = 300;

const delayFunc = (n: number = DELAY_DEFAULT) => new Promise(resolve => setTimeout(resolve, n));
const cancellablePromise = (promise: Promise<any>) => {
  let isCanceled = false;

  const wrappedPromise = new Promise((resolve, reject) => {
    promise.then(
      (value: boolean) => (isCanceled ? reject({ isCanceled, value }) : resolve(value)),
      (error: any) => reject({ isCanceled, error }),
    );
  });

  return {
    promise: wrappedPromise,
    cancel: () => (isCanceled = true),
  };
};

export const useOnDoubleClick = (
  onClick: Function,
  onDoubleClick: Function,
  options?: {
    delay: number,
  }
) => {
  const api = useCancellablePromises();
  const delay = get(options, 'delay', DELAY_DEFAULT)

  const handleClick = () => {
    api.clearPendingPromises();
    const waitForClick = cancellablePromise(delayFunc(delay));
    api.appendPendingPromise(waitForClick);

    return waitForClick.promise
      .then(() => {
        api.removePendingPromise(waitForClick);
        onClick();
      })
      .catch(errorInfo => {
        api.removePendingPromise(waitForClick);
        if (!errorInfo.isCanceled) {
          throw errorInfo.error;
        }
      });
  };

  const handleDoubleClick = () => {
    api.clearPendingPromises();
    onDoubleClick();
  };

  return [handleClick, handleDoubleClick];
};

export default useOnDoubleClick;
