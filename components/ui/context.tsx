import { createContext, useReducer, useMemo, useContext } from 'react';
import type { FC } from 'react';

export interface State {
  staffNotesArchiveShownPostsNumber: { [key: string]: number };
  setStaffNotesArchiveShownPostsNumber?: (
    category: string,
    number: number
  ) => void;
}

const initialState = {
  staffNotesArchiveShownPostsNumber: {},
};

type Action = {
  type: 'SET_STAFF_NOTES_ARCHIVE_SHOWN_POSTS_NUMBER';
  category: string;
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
  }
}

export const UIProvider: FC = (props) => {
  const [state, dispatch] = useReducer(uiReducer, initialState);

  const setStaffNotesArchiveShownPostsNumber: State['setStaffNotesArchiveShownPostsNumber'] =
    (category, number) =>
      dispatch({
        type: 'SET_STAFF_NOTES_ARCHIVE_SHOWN_POSTS_NUMBER',
        category,
        number,
      });

  const value = useMemo(
    () => ({
      ...state,
      setStaffNotesArchiveShownPostsNumber,
    }),
    [state]
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
