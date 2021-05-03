import { useState, useEffect } from "react";

/**
 * Update debounced value after delay
 *
 * Usage:
 *
 * const debouncedSearchTerm = useDebounce(searchTerm, 500);
 *
 * @param  value to update after delay has expired
 * @param  delay on ms between debouncings
 * @returns debouncedValue
 */

const useDebounce = (value: any, delay: number = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cancel the timeout if value changes (also on delay change or unmount)
    // This is how we prevent debounced value from updating if value is changed ...
    // .. within the delay period. Timeout gets cleared and restarted.
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
export { useDebounce };
