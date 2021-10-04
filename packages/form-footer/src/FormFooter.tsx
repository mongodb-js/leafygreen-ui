import React, { useMemo } from 'react';
import Banner from '@leafygreen-ui/banner';
import Button from '@leafygreen-ui/button';
import { css, cx } from '@leafygreen-ui/emotion';
import { uiColors } from '@leafygreen-ui/palette';

const footerStyle = (sticky: boolean) => {
  return css`
    position: ${sticky ? 'fixed' : 'static'};
    bottom: ${sticky ? '0px' : 'unset'};
    min-height: 92px;
    width: 100%;
    padding: 24px;
    border: 1px solid ${uiColors.gray.light2};
    box-shadow: 0px -4px 4px 0px rgba(6, 22, 33, 0.1);
  `;
};

const contentStyle = css`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0 auto;
  gap: 8px;

  > button {
    white-space: nowrap;
  }
`;

const bannerStyle = css`
  flex-grow: 1;
`;

/**
 * Types
 */
interface PrimaryButtonProps {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  variant?: 'primary' | 'danger';
  disabled?: boolean;
  type?: 'button' | 'submit';
}

const isPrimaryButtonProps = (testObj: any): testObj is PrimaryButtonProps => {
  return testObj && testObj.text;
};

export interface FormFooterProps {
  /**
   * The primary (right-most) button. Defined as a <Button> element, or as an object with the shape:
   *
   * ```ts
   * interface PrimaryButtonProps {
   *  text: string;
   *  onClick?: React.MouseEventHandler<HTMLButtonElement>;
   *  variant?: 'primary' | 'danger';
   *  disabled?: boolean;
   *  type?: 'button' | 'submit';
   * }
   * ```
   */
  primaryButton?: React.ReactChild | PrimaryButtonProps;

  /**
   * Text for the cancel button. Defaults to 'Cancel'
   */
  cancelText?: string;

  /**
   * onClick callback for the cancel button
   */
  onCancel?: React.MouseEventHandler<HTMLButtonElement>;

  /**
   * Text for the back button.
   */
  backButtonText?: string;

  /**
   * onClick callback for the back button
   */
  onBackClick?: React.MouseEventHandler<HTMLButtonElement>;

  /**
   * Text within the error banner
   */
  errorMessage?: string;

  /**
   * Defines whether the footer should be stuck to the bottom of the frame.
   * Can also be achieved using `className`
   */
  sticky?: boolean;

  /**
   * Styling prop for the content.
   * Useful for setting left and right margins, or max-
   */
  contentClassName?: string;

  /**
   * Styling prop
   */
  className?: string;
}

/**
 * Component
 */
export default function FormFooter({
  sticky = false,
  primaryButton,
  onCancel,
  cancelText = 'Cancel',
  backButtonText,
  onBackClick,
  errorMessage,
  contentClassName,
  className,
}: FormFooterProps) {
  const RenderedPrimaryButton: React.ReactNode = useMemo(() => {
    if (isPrimaryButtonProps(primaryButton)) {
      return (
        <Button
          variant={primaryButton.variant ?? 'primary'}
          disabled={primaryButton.disabled}
          onClick={primaryButton.onClick}
          type={primaryButton.type}
        >
          {primaryButton.text}
        </Button>
      );
    }

    return primaryButton;
  }, [primaryButton]);

  return (
    <footer className={cx(footerStyle(sticky), className)}>
      <div className={cx(contentStyle, contentClassName)}>
        {errorMessage && (
          <Banner className={bannerStyle} variant="danger">
            {errorMessage}
          </Banner>
        )}
        {backButtonText && (
          <Button variant="default" onClick={onBackClick}>
            {backButtonText}
          </Button>
        )}
        <Button variant="default" onClick={onCancel}>
          {cancelText || 'Cancel'}
        </Button>
        {primaryButton && RenderedPrimaryButton}
      </div>
    </footer>
  );
}
