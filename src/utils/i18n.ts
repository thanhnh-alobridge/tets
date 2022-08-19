import { useCallback } from 'react';
import { useTranslation as useOriginalTranslation } from 'react-i18next';

export function useTranslation(scope?: string) {
  const { t } = useOriginalTranslation();
  const enhancedT = useCallback(
    (key, ...args) => {
      if (key.startsWith('.')) {
        return t(`${scope}${key}`, ...args);
      }

      return t(key, ...args);
    },
    [scope, t]
  );

  return { t: enhancedT };
}
