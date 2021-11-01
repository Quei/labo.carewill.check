export const richTextEntryHyperlinkFragment = /* GraphQL */ `
  fragment RichTextEntryHyperlink on Entry {
    __typename
    sys {
      id
    }
    ... on StaffNote {
      slug
    }
    ... on Recruiting {
      slug
    }
  }
`;
