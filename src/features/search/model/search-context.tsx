import {
  useState,
  createContext,
  useContext,
  type ReactNode,
  type SetStateAction,
  type Dispatch,
} from 'react';

type SearchContextType = {
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
};

type SearchProviderProps = {
  children: ReactNode;
};

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchProvider(props: SearchProviderProps) {
  const { children } = props;
  const [value, onChange] = useState('');

  return <SearchContext.Provider value={{ value, onChange }}>{children}</SearchContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useSearch() {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
}
