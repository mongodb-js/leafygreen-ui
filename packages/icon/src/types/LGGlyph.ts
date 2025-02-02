import { ComponentType } from 'react';
import * as SVGR from './SVGR';

export interface ComponentProps extends SVGR.ComponentProps {
  size?: number | 'small' | 'default' | 'large' | 'xlarge';
}

export type Component = ComponentType<ComponentProps>;
