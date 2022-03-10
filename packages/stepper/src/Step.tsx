import React, { PropsWithChildren } from 'react';
import { css, cx } from '@leafygreen-ui/emotion';
import { StepStates, StepProps } from './types';
import StepIcon from './StepIcon';
import { palette } from '@leafygreen-ui/palette';
import { spacing } from '@leafygreen-ui/tokens';
import { Body } from '@leafygreen-ui/typography';

export const Step = function Step({
  children,
  index,
  state,
  ariaLabel = `step${index || ''}`,
  shouldDisplayLine = true,
  iconSize = 20,
  className,
}: PropsWithChildren<StepProps>) {
  const isCurrent = state === StepStates.Current;

  const baseStyles = css`
    display: flex;
    margin: auto;
    flex-direction: column;
    align-items: center;
    padding-bottom: ${spacing[1]}px;
    position: relative; // for the :after line

    ${shouldDisplayLine &&
    `
      &:after {
        content: '';
        height: 1px;
        width: 100%;
        position: absolute;
        top: ${iconSize / 2}px;
        left: 50%;
        z-index: -1;
        background-color: ${palette.gray.base};
      }
    `}
  `;

  const completedMultipleStyles = css`
    .lg-ui-step-label {
      color: ${palette.green.dark2};
      text-decoration-line: underline;
      text-decoration-style: dotted;
      text-underline-position: under;
    }

    ${shouldDisplayLine &&
    `
        &:after {
          background-color: ${palette.green.dark1};
        }
      `}
  `;

  const completedStyles = css`
    .lg-ui-step-label {
      color: ${palette.green.dark2};
    }

    ${shouldDisplayLine &&
    `
        &:after {
          background-color: ${palette.green.dark1};
        }
      `}
  `;

  const currentStyles = css`
    .lg-ui-step-label {
      color: ${palette.green.dark3};
    }
  `;

  const upcomingStyles = css`
    .lg-ui-step-label {
      color: ${palette.gray.dark1};
    }
  `;

  const upcomingMultipleStyles = css`
    .lg-ui-step-label {
      text-decoration-line: underline;
      text-decoration-style: dotted;
      text-underline-position: under;
      color: ${palette.gray.dark1};
    }
  `;

  const styles: Record<StepStates, string> = {
    [StepStates.CompletedMultiple]: completedMultipleStyles,
    [StepStates.Completed]: completedStyles,
    [StepStates.Current]: currentStyles,
    [StepStates.Upcoming]: upcomingStyles,
    [StepStates.UpcomingMultiple]: upcomingMultipleStyles,
  };

  return (
    <div
      className={cx(baseStyles, styles[state], className)}
      aria-label={ariaLabel}
      aria-current={isCurrent && 'step'}
    >
      <StepIcon state={state} content={index} size={iconSize} />
      {/*
        TODO: Would prefer to use a centralized font-weight value directly in css so it's not dependent on a ternary operator.
        Currently using the <Body> component with the `weight` prop since this is currently the only way to use a reusable variable.
      */}
      <Body
        className="lg-ui-step-label"
        weight={isCurrent ? 'medium' : 'regular'}
      >
        {children}
      </Body>
    </div>
  );
};

export default Step;
