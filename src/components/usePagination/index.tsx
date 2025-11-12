import {useCallback, useMemo, useRef, useState} from 'react';
import {RefreshControl} from 'react-native';
import {ApiType} from '../ApiService';
import {Colors} from '@config';
import {useFocusEffect} from '@react-navigation/native';

interface usePaginationOptions {
  request: ApiType;
}

type usePaginationType = (options: usePaginationOptions) => [
  {
    data: any[];
    refreshControl: React.JSX.Element;
    onEndReached: () => void;
  },
  ApiType,
];

export const usePagination: usePaginationType = ({request}) => {
  const [isFetching, setIsFetching] = useState(false);
  const [pages, setPage] = useState<
    {
      data: any[];
      links: {
        total: number;
        per_page: number;
        current: number;
        prev: number;
        next: number;
      };
    }[]
  >([]);

  const Api = useRef(
    request
      .withOutToast()
      .onFailure(() => {
        setPage([
          {
            data: [],
            links: {},
          },
        ]);
      })
      .onCall(() => setIsFetching(true))
      .onSuccess(data => {
        setIsFetching(false);
        setPage(s =>
          data.data.pagination.meta.current_page == 1
            ? [data.data]
            : s.concat([data.data]),
        );
      })
      .trackParams(),
  ).current;
  const data = useMemo(() => pages.flatMap(s => s.data), [pages]);
  useFocusEffect(
    useCallback(() => {
      Api.withParams({
        page: 1,
      }).call();
    }, []),
  );
  return [
    {
      data,
      refreshControl: (
        <RefreshControl
          refreshing={!!pages.length && isFetching}
          onRefresh={() => {
            setIsFetching(true);
            Api?.withParams({
              page: 1,
            });
          }}
          colors={[Colors.primary]}
          tintColor={Colors.primary}
        />
      ),
      onEndReached: () => {
        if (
          !!pages.length &&
          pages[pages.length - 1].data.length ==
            pages[pages.length - 1]?.links?.per_page
        ) {
          Api.withParams({
            page: pages[pages.length - 1]?.links?.next,
          });
        }
      },
      emptyListProps: {
        firstFetch: !pages.length,
      },
    },
    Api,
  ];
};
