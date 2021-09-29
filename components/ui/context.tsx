import {
  createContext,
  useReducer,
  useMemo,
  useContext,
  useCallback,
} from 'react';
import type { FC } from 'react';

export interface State {
  staffNotesArchiveShownPostsNumber: { [key: string]: number };
  setStaffNotesArchiveShownPostsNumber?: (
    category: string,
    number: number
  ) => void;
  interviewsArchiveShownPostsNumber: { [key: string]: number };
  setInterviewsArchiveShownPostsNumber?: (
    series: string,
    number: number
  ) => void;
}

const initialState = {
  staffNotesArchiveShownPostsNumber: {},
  interviewsArchiveShownPostsNumber: {},
};

type Action =
  | {
      type: 'SET_STAFF_NOTES_ARCHIVE_SHOWN_POSTS_NUMBER';
      category: string;
      number: number;
    }
  | {
      type: 'SET_INTERVIEWS_ARCHIVE_SHOWN_POSTS_NUMBER';
      series: string;
      number: number;
    };

export const UIContext = createContext<State>(initialState);

UIContext.displayName = 'UIContext';

function uiReducer(state: State, action: Action) {
  switch (action.type) {
    case 'SET_STAFF_NOTES_ARCHIVE_SHOWN_POSTS_NUMBER': {
      return {
        ...state,
        staffNotesArchiveShownPostsNumber: {
          ...state.staffNotesArchiveShownPostsNumber,
          [action.category]: action.number,
        },
      };
    }
    case 'SET_INTERVIEWS_ARCHIVE_SHOWN_POSTS_NUMBER': {
      return {
        ...state,
        interviewsArchiveShownPostsNumber: {
          ...state.interviewsArchiveShownPostsNumber,
          [action.series]: action.number,
        },
      };
    }
  }
}

export const UIProvider: FC = (props) => {
  const [state, dispatch] = useReducer(uiReducer, initialState);

  const setStaffNotesArchiveShownPostsNumber: State['setStaffNotesArchiveShownPostsNumber'] =
    useCallback(
      (category, number) =>
        dispatch({
          type: 'SET_STAFF_NOTES_ARCHIVE_SHOWN_POSTS_NUMBER',
          category,
          number,
        }),
      [dispatch]
    );

  const setInterviewsArchiveShownPostsNumber: State['setInterviewsArchiveShownPostsNumber'] =
    useCallback(
      (series, number) =>
        dispatch({
          type: 'SET_INTERVIEWS_ARCHIVE_SHOWN_POSTS_NUMBER',
          series,
          number,
        }),
      [dispatch]
    );

  const value = useMemo(
    () => ({
      ...state,
      setStaffNotesArchiveShownPostsNumber,
      setInterviewsArchiveShownPostsNumber,
    }),
    [
      state,
      setStaffNotesArchiveShownPostsNumber,
      setInterviewsArchiveShownPostsNumber,
    ]
  );

  return <UIContext.Provider value={value} {...props} />;
};

export const useUI = () => {
  const context = useContext(UIContext);
  if (context === undefined) {
    throw new Error(`useUI must be used within a UIProvider`);
  }
  return context;
};

export const ManagedUIContext: FC = ({ children }) => (
  <UIProvider>{children}</UIProvider>
);
