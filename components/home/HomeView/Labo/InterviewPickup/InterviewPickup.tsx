import { useState, useCallback } from 'react';
import dayjs from 'dayjs';
import cn from 'classnames';
import s from './InterviewPickup.module.css';
import { renderRichText } from '@lib/contentful/utils/rich-text';
import {
  Grid,
  Block,
  BlockContentPickup,
  BlockContentPickupLarge,
} from '@components/ui';
import type { VFC } from 'react';
import type { HomeLaboInterviewPickupFragment } from 'types/schema';
import { useIntlMessage } from '@lib/hooks/useIntlMessage';

type Props = {
  className?: string;
  items: HomeLaboInterviewPickupFragment[];
};

export const homeLaboInterviewPickupFragment = /* GraphQL */ `
  fragment HomeLaboInterviewPickup on Interview {
    sys {
      id
    }
    slug
    title
    date
    content {
      json
    }
    image {
      url
      description
    }
  }
`;

const usePointer = () => {
  const [isPointerEnterLargeBlock, setIsPointerEnterLargeBlock] =
    useState(false);
  const onPointerEnter = useCallback(() => {
    setIsPointerEnterLargeBlock(true);
  }, []);
  const onPointerLeave = useCallback(() => {
    setIsPointerEnterLargeBlock(false);
  }, []);
  return { isPointerEnterLargeBlock, onPointerEnter, onPointerLeave };
};

const InterviewPickup: VFC<Props> = ({ className, items }) => {
  const f = useIntlMessage();
  const { isPointerEnterLargeBlock, onPointerEnter, onPointerLeave } =
    usePointer();
  const [firstItem, ...restItems] = items;
  return (
    <section className={cn(s.root, className)}>
      <h3
        className={cn('block-title', {
          'text-white': isPointerEnterLargeBlock,
          'text-green': !isPointerEnterLargeBlock,
        })}
      >
        {f('labo.interviewsPickup')}
      </h3>
      <div className={cn(s.content)}>
        <Block
          href={`/interviews/${firstItem.slug}`}
          site={'labo'}
          onPointerEnter={onPointerEnter}
          onPointerLeave={onPointerLeave}
        >
          <BlockContentPickupLarge
            title={firstItem.title ?? ''}
            titleTag="h3"
            date={dayjs(firstItem.date).format('YYYY.MM.DD')}
            imageSrc={firstItem.image?.url}
            imageAlt={firstItem.image?.description ?? firstItem.title ?? ''}
          >
            {renderRichText(firstItem.content, 200)}
          </BlockContentPickupLarge>
        </Block>
        {restItems.length > 0 && (
          <Grid layout={'col-3'} isSlide={true}>
            {restItems.map((item) => (
              <Block
                key={item.sys?.id}
                href={`/interviews/${item.slug}`}
                site={'labo'}
              >
                <BlockContentPickup
                  title={item.title ?? ''}
                  titleTag="h4"
                  date={dayjs(item.date).format('YYYY.MM.DD')}
                  hasImage={true}
                  imageSrc={item.image?.url}
                  imageAlt={item.image?.description ?? firstItem.title ?? ''}
                >
                  {renderRichText(firstItem.content, 100)}
                </BlockContentPickup>
              </Block>
            ))}
          </Grid>
        )}
      </div>
    </section>
  );
};

export default InterviewPickup;
