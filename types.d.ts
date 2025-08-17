declare module 'lucide-react' {
  import { ComponentType, SVGProps } from 'react';
  
  export interface IconProps extends SVGProps<SVGSVGElement> {
    size?: number | string;
    absoluteStrokeWidth?: boolean;
  }
  
  export const Clock: ComponentType<IconProps>;
  export const Phone: ComponentType<IconProps>;
  export const MapPin: ComponentType<IconProps>;
  export const Star: ComponentType<IconProps>;
  export const ChevronLeft: ComponentType<IconProps>;
  export const ChevronRight: ComponentType<IconProps>;
  export const MessageCircle: ComponentType<IconProps>;
  export const Shield: ComponentType<IconProps>;
  export const Sparkles: ComponentType<IconProps>;
  export const Zap: ComponentType<IconProps>;
  export const Heart: ComponentType<IconProps>;
  export const Play: ComponentType<IconProps>;
  export const ExternalLink: ComponentType<IconProps>;
  export const X: ComponentType<IconProps>;
  export const Mail: ComponentType<IconProps>;
  export const Award: ComponentType<IconProps>;
  export const Users: ComponentType<IconProps>;
  export const Calendar: ComponentType<IconProps>;
}

declare module 'next/link' {
  import { ComponentType, ReactNode } from 'react';
  
  interface LinkProps {
    href: string;
    children: ReactNode;
    className?: string;
    target?: string;
    rel?: string;
  }
  
  const Link: ComponentType<LinkProps>;
  export default Link;
}
